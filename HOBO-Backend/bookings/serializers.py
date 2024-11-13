
from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Booking
from hotels.models import Hotel
from hotels.serializers import HotelSerializer
from user.serilaizers import RegistrationSerializer

User = get_user_model()

class BookingSerializer(serializers.ModelSerializer):
    user = RegistrationSerializer(required=True)
    hotel = HotelSerializer(required = True)
    
    class Meta:
        fields = ["id","user","hotel","number_of_people","check_in_date","check_out_date","status","created_at"]
        model = Booking
        
    def create(self, validated_data):
        user_data = validated_data.pop('user')
        hotel_data = validated_data.pop('hotel')
        
        user = User.objects.get(username = user_data.username)
        hotel = Hotel.objects.get(name=hotel_data.name)
        
        booking = Booking.objects.create(user=user, hotel=hotel, **validated_data)
        
        return booking