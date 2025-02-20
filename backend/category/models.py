from django.db import models


# Create your models here.
class Category(models.Model):
    TYPE = {"blog": "blog", "tour": "tour"}

    name = models.CharField(max_length=250, null=False, blank=False, unique=True)
    type = models.CharField(max_length=5, null=False, blank=False, choices=TYPE)

    def __str__(self):
        return f"{self.name} - {self.type}"
