from rest_framework import serializers
from .models import Tour, TourGallery

class TourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tour
        fields = '__all__'

class TourGallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = TourGallery
        fields = '__all__'