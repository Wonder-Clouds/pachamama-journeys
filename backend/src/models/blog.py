from sqlmodel import Field, SQLModel
import uuid
from category import Category


class Blog(SQLModel, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    title: str = Field(index=True)
    content: str
    cover: str
    category: Category
    status: bool = Field(default=False)
    publication_date: str
    