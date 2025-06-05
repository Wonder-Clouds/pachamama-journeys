from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from contextlib import asynccontextmanager
from sqlmodel import SQLModel
from .database.engine import engine
from .api.v1 import category, blog, tour


@asynccontextmanager
async def lifespan(app: FastAPI):
    SQLModel.metadata.create_all(engine)
    yield


app = FastAPI(lifespan=lifespan)

app.mount("/static", StaticFiles(directory="static"), name="static")

app.include_router(category.router, prefix="/api/v1")
app.include_router(blog.router, prefix="/api/v1")
app.include_router(tour.router, prefix="/api/v1")
