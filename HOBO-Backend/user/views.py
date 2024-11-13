from django.shortcuts import render
from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from .serilaizers import RegistrationSerializer

User = get_user_model()
# Create your views here.
class RegisterView(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = RegistrationSerializer
    permission_classes = [AllowAny]
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        user = serializer.save()
        
        response_data = {
            'id' : user.id,
            'username' : user.username,
            'email' : user.email
        }
        
        return Response(response_data,status.HTTP_201_CREATED)

    
