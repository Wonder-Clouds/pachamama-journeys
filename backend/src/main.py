from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from contextlib import asynccontextmanager
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import SQLModel
from .database.engine import engine
from .api.v1 import category, blog, tour, user
import os

load_dotenv()

CORS_ORIGINS = os.getenv("CORS_ORIGINS")

@asynccontextmanager
async def lifespan(app: FastAPI):
    SQLModel.metadata.create_all(engine)
    yield

origins = CORS_ORIGINS.split(",")

app = FastAPI(lifespan=lifespan, title='Pachamama Journey API 1.0')
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*x|"]
)


static_dir = "static"
if not os.path.exists(static_dir):
    os.makedirs(static_dir)
app.mount("/static", StaticFiles(directory="static"), name="static")

app.include_router(category.router, prefix="/api/v1")
app.include_router(blog.router, prefix="/api/v1")
app.include_router(tour.router, prefix="/api/v1")
app.include_router(user.router, prefix="/api/v1")
