from django.contrib import admin
from django.utils.html import format_html
from .models import Tour, TourGallery


class TourGalleryInline(admin.TabularInline):
    model = TourGallery
    extra = 1  # Número de formularios vacíos para añadir imágenes


@admin.register(Tour)
class TourAdmin(admin.ModelAdmin):
    list_display = ["title", "location", "price", "status"]
    list_filter = ["status", "category"]
    search_fields = ["title", "location"]
    inlines = [TourGalleryInline]

    fieldsets = (
        (
            "Basic Information",
            {"fields": ("title", "location", "time", "price", "category")},
        ),
        ("Content", {"fields": ("description", "cover_image", "status")}),
    )
