import uuid
from PIL import Image
from django.core.files.base import ContentFile
import io

def compress_image(image):
    im = Image.open(image)
    im_io = io.BytesIO()
    im.save(im_io, format='WEBP', quality=75)
    unique_name = f"{uuid.uuid4()}.webp"
    new_image = ContentFile(im_io.getvalue(), name=unique_name)
    return new_image