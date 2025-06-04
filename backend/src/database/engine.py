from sqlmodel import Session, create_engine
from sqlalchemy import URL


path = URL(drivername="postgresql+psycopg2",
           username="",
           password="",
           host="",
           port="",
           database="")
