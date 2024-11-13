from django.db import models

class Hotel(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    address = models.CharField(max_length=255)
    location = models.ForeignKey('Location',related_name = 'hotels',on_delete=models.CASCADE)
    price_per_night = models.DecimalField(max_digits=7,decimal_places=2,default=0)
    amenities = models.ManyToManyField('Amenity',blank=True)
    policies = models.ManyToManyField('Policy', blank=True)
    images = models.ManyToManyField('HotelImage',related_name = 'images',blank=True)
    
    def __str__(self) -> str:
        return self.name

class Location(models.Model):
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    popularity = models.IntegerField(default=0)
    
    def __str__(self):
        return self.city + " in " + self.state
    
class Amenity(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
    
class Policy(models.Model):
    description = models.CharField(max_length=255)
    
    def __str__(self) -> str:
        return self.description
    
class HotelImage(models.Model):
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    image = models.CharField(max_length=255)
    caption = models.CharField(max_length=255, blank=True)
    
    def __str__(self) -> str:
        return self.hotel.name + " image"

    