
from django.db import models
from hotels.models import Hotel
from django.contrib.auth import get_user_model
# Create your models here.

User = get_user_model()

class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    hotel = models.ForeignKey(Hotel,on_delete = models.CASCADE)
    number_of_people = models.IntegerField()
    check_in_date = models.DateField(auto_now=False, auto_now_add=False)
    check_out_date = models.DateField(auto_now=False, auto_now_add=False)
    status = models.CharField(max_length=20, choices=[('booked', 'Booked'), ('canceled', 'Canceled')], default='booked')
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return self.hotel.name + " by " + self.user.first_name