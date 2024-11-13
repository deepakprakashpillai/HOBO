from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    profile_picture = models.CharField(max_length=255,blank=True)
    address = models.CharField(max_length=255,blank=True)
    phone_number = models.CharField(unique=True, max_length=20,blank=True)
    