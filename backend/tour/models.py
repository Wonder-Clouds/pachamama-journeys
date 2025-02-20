from django.db import models
from category.models import Category
from core.functions import compress_image
from django.db.models.signals import pre_save
from django.dispatch import receiver

class Tour(models.Model):
    title = models.CharField(max_length=250, blank=False)
    location = models.CharField(max_length=100, blank=False)
    time = models.CharField(max_length=100, blank=False)
    price = models.DecimalField(
        decimal_places=2, blank=False, default=0.00, max_digits=6
    )
    description = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    cover_image = models.ImageField(upload_to="images/tour/")
    status = models.BooleanField(default=False, null=False, blank=False)

    def __str__(self):
        return self.title

@receiver(pre_save, sender=Tour)
def compress_tour_cover(sender, instance, **kwargs):
    if instance.cover_image:
        instance.cover_image = compress_image(instance.cover_image)

class TourGallery(models.Model):
    tour = models.ForeignKey(
        Tour, on_delete=models.CASCADE
    )
    tour_gallery = models.ImageField(upload_to="images/tour/gallery/")

    def __str__(self):
        return f"Gallery image for {self.tour.title}"

@receiver(pre_save, sender=TourGallery)
def compress_tour_gallery(sender, instance, **kwargs):
    if instance.tour_gallery:
        instance.tour_gallery = compress_image(instance.tour_gallery)