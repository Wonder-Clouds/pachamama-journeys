from rest_framework import viewsets
from .models import Tour, TourGallery
from .serializers import TourSerializer, TourGallerySerializer

class TourViewSet(viewsets.ModelViewSet):
    queryset = Tour.objects.all()
    serializer_class = TourSerializer

class TourGalleryViewSet(viewsets.ModelViewSet):
    queryset = TourGallery.objects.all()
    serializer_class = TourGallerySerializer