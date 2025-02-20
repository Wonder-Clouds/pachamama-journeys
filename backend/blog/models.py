from django.db import models
from django.db.models.signals import pre_save
from django.dispatch import receiver
from category.models import Category
from core.functions import compress_image

class Blog(models.Model):
    title = models.CharField(max_length=250)
    content = models.TextField()
    cover = models.ImageField(upload_to="images/blog/")
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    status = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.title} - {self.category} - {self.status}"

@receiver(pre_save, sender=Blog)
def compress_blog_cover(sender, instance, **kwargs):
    if instance.cover:
        instance.cover = compress_image(instance.cover)