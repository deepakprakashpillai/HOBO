from django.contrib import admin
from .models import Hotel,Amenity,Policy,HotelImage,Location

# Register your models here.

admin.site.register(Hotel)
admin.site.register(Amenity)
admin.site.register(Policy)
admin.site.register(HotelImage)
admin.site.register(Location)
