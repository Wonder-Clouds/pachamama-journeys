from sqlmodel import Field, SQLModel
import uuid


class Blog(SQLModel, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    title: str = Field(index=True)
    content: str
    cover: str | None = None
    category: int = Field(foreign_key="category.id")
    status: bool = Field(default=False)
    publication_date: str
    