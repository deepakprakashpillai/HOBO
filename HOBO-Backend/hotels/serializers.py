from rest_framework import serializers
from .models import Hotel,Location,Amenity,Policy,HotelImage

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ['id', 'city','state']
        
class AmenitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Amenity
        fields = ['id', 'name']
        
class PolicySerializer(serializers.ModelSerializer):
    class Meta:
        model = Policy
        fields = ['id', 'description']
        
class HotelImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = HotelImage
        fields = ['id', 'image', 'caption']
        
        
class HotelSummarySerializer(serializers.ModelSerializer):
    hotel_image = serializers.SerializerMethodField()
    location = serializers.SerializerMethodField()
    
    class Meta:
        model = Hotel
        fields = ['id','name','hotel_image','price_per_night','location']
        
    def get_hotel_image(self,obj):
        if obj.images.exists():
            return obj.images.first().image
        return None
    
    def get_location(self,obj):
        return obj.location.city
        
class HotelSerializer(serializers.ModelSerializer):
    location = LocationSerializer()
    amenities = AmenitySerializer(many=True)
    policies = PolicySerializer(many = True)
    images = HotelImageSerializer(many = True)
    class Meta:
        model = Hotel
        fields = ['id', 'name', 'description', 'address', 'location', 'price_per_night', 'amenities', 'policies', 'images']

    def create(self,validated_data):
        location_data = validated_data.pop('location')
        amenities_data = validated_data.pop('amenities')
        policies_data = validated_data.pop('policies')
        images_data = validated_data.pop('images')
        
        location,created = Location.objects.get_or_create(**location_data)
        
        hotel = Hotel.objects.create(location = location,**validated_data)
        
        for amenity_data in amenities_data:
            amenity,created = Amenity.objects.get_or_create(**amenity_data)
            hotel.amenities.add(amenity)
            
        for policy_data in policies_data:
            policy,created = Policy.objects.get_or_create(**policy_data)
            hotel.policies.add(policy)
            
        for image_data in images_data:
            image = HotelImage.objects.create(hotel = hotel,**image_data)
            hotel.images.add(image)
            
        return hotel
            
    def update(self, instance, validated_data):
        location_data = validated_data.pop('location',None)
        amenities_data = validated_data.pop('amenities',None)
        policies_data = validated_data.pop('policies',None)
        images_data = validated_data.pop('images',None)
        
        if location_data:
            location,created = Location.objects.get_or_create(**location_data)
            instance.location = location
            
        for attr,value in validated_data.items():
            setattr(instance,attr,value)
            
        instance.save()
        
        if amenities_data is not None:
            instance.amenities.clear()
            for amenity_data in amenities_data:
                amenity,created = Amenity.objects.get_or_create(**amenity_data)
                instance.amenities.add(amenity)
                
        if policies_data is not None:
            instance.policies.clear()
            for policy_data in policies_data:
                policy,created = Policy.objects.get_or_create(**policy_data)
                instance.policies.add(policy)
                
        if images_data is not None:
            instance.images.clear()
            for image_data in images_data:
                image = HotelImage.objects.create(hotel = instance,**image_data)
                instance.images.add(image)
            
        return instance
            
        
        
            
        
        