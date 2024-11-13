from django.urls import include,path
from rest_framework.routers import DefaultRouter
from .views import BookingViewset

router = DefaultRouter()
router.register('bookings',BookingViewset)

urlpatterns = [
    path('',include(router.urls))
]