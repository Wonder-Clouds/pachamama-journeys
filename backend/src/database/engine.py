from sqlmodel import Session, create_engine
from sqlalchemy import URL
from dotenv import load_dotenv
import os


load_dotenv()

POSTGRES_USER = os.getenv('POSTGRES_USER')
POSTGRES_PASSWORD = os.getenv('POSTGRES_PASSWORD')
POSTGRES_DB = os.getenv('POSTGRES_DB')
DB_HOST = os.getenv('DB_HOST')
DB_PORT = os.getenv('DB_PORT')

path = URL.create(drivername="postgresql+psycopg2",
           username=POSTGRES_USER,
           password=POSTGRES_PASSWORD,
           host=DB_HOST,
           port=DB_PORT,
           database=POSTGRES_DB)


# Create the engine
engine = create_engine(path, echo=True)

# Session
def get_session():
    with Session(engine) as session:
        yield session
