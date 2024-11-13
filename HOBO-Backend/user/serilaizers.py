
from rest_framework import serializers,validators
from django.contrib.auth import get_user_model

User = get_user_model()

class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True,required = True)
    username = serializers.CharField(required = True, validators=[validators.UniqueValidator(queryset=User.objects.all())])
    email = serializers.EmailField(required = True, validators=[validators.UniqueValidator(queryset=User.objects.all())])
    
    class Meta:
        fields = ['id','username','first_name','last_name','email','phone_number','address','profile_picture','password']
        model = User
        
    def create(self,validated_data):
        user = User(username = validated_data['username'],
                                   email = validated_data['email'],
                                   first_name = validated_data['first_name'],
                                   last_name = validated_data['last_name'],
                                   phone_number = validated_data['phone_number'],
                                   address = validated_data['address'],
                                   profile_picture = validated_data['profile_picture'])
        user.set_password(validated_data['password'])
        user.save()
        return user
        
        
