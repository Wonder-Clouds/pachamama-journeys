from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TourViewSet, TourGalleryViewSet

router = DefaultRouter()
router.register(r'tours', TourViewSet)
router.register(r'gallery', TourGalleryViewSet)

urlpatterns = [
    path('tour/', include(router.urls)),
]