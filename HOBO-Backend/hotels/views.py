from urllib import response
from django.shortcuts import render
from rest_framework import viewsets,status
from rest_framework.response import Response
from rest_framework.filters import SearchFilter
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Hotel,Location,Policy,Amenity,HotelImage
from .serializers import HotelSerializer, HotelSummarySerializer, LocationSerializer, PolicySerializer, AmenitySerializer, HotelImageSerializer
from django_ratelimit.decorators import ratelimit
import logging

logger = logging.getLogger(__name__)



# Create your views here.
class HotelSummaryViewSet(viewsets.ModelViewSet):
    queryset = Hotel.objects.all()
    serializer_class = HotelSummarySerializer
    filter_backends = [SearchFilter]
    search_fields = ['name','location__city']


    
    
class HotelViewSet(viewsets.ModelViewSet):
    
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer
    
    @ratelimit(key='ip',rate='2/m')
    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset,many=True)
        return Response(serializer.data)
    
    def create(self,request,*args, **kwargs):
        serializer = self.get_serializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    def update(self,request,*args, **kwargs):
        partial = kwargs.pop('partial',False)
        instance = self.get_object()
        serializer = self.get_serializer(instance,data = request.data,partial=partial)
        serializer.is_valid(raise_exception = True)
        updated_instance = serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    

    
class LocationViewSet(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    
    
class HotelsByLocationView(APIView):
    def get(self,request,location_name):
        try:
            location = Location.objects.get(city__iexact = location_name)
            hotels = Hotel.objects.filter(location=location)
            serializer = HotelSummarySerializer(hotels,many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Location.DoesNotExist:
            return Response({"details": "location not found"},status=status.HTTP_404_NOT_FOUND)
        
        
@api_view(['GET'])
@ratelimit(key='ip',rate='2/m')
def get_all_hotels(request):
    hotels = Hotel.objects.all()
    serializer = HotelSummarySerializer(hotels,many=True)
    return Response(serializer.data)
