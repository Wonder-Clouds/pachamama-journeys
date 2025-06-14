from pydantic import BaseModel, ConfigDict
from .category import CategorySchema


# Schema of Blog
class BlogSchema(BaseModel):
    id: str
    title: str
    content: str
    cover: str | None
    category: CategorySchema
    status: bool
    publication_date: str


    model_config = ConfigDict(
        json_schema_extra={
            "example": {
                "id": "c303282d-f2e6-46ca-a04a-35d3d873712d",
                "title": "Las Aventuras en el Cusco",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "cover": "static/uploads/blogs/Screenshot from 2025-02-27 00-26-31.png",
                "category": {
                    "id": 1,
                    "name": "Cusco",
                    "type": "blog"
                },
                "status": True,
                "publication_date": "2025-04-21"
            }
        }
    )


class BlogCreate(BaseModel):
    title: str
    content: str
    cover: str | None
    category: CategorySchema
    status: bool
    publication_date: str


    model_config = ConfigDict(
        json_schema_extra={
            "example": {
                "title": "Las Aventuras en el Cusco",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "cover": "static/uploads/blogs/Screenshot from 2025-02-27 00-26-31.png",
                "categoy": 3,
                "status": True,
                "publication_date": "2025-04-21"
            }
        }
    )