from sqlmodel import SQLModel, Field
from typing import Optional
import uuid
import json


class Tour(SQLModel, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    title: str = Field(index=True)
    location: str = Field(index=True)
    time: str
    price: float
    description: str
    category: int = Field(foreign_key="category.id")
    gallery: Optional[str] = None
    cover_image: str
    status: bool

    def get_gallery(self):
        if self.gallery:
            return json.loads(self.gallery)
        return []

    def set_gallery(self, gallery_list):
        self.gallery = json.dumps(gallery_list)