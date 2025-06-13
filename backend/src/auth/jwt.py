from ..schemas.user import UserInDB
from passlib.context import CryptContext
from dotenv import load_dotenv
from fastapi.security import OAuth2PasswordBearer
from sqlmodel import Session, select
from fastapi import HTTPException
import os

from ..models.user import User

load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM") 
SALT = os.getenv("SALT") 
ACCESS_TOKEN_EXPIRE_MINUTES = os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES")

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def authenticate_user(session: Session, username: str, password: str) -> User:
    statement = select(User).where(User.username == username)
    user = session.exec(statement).first()
    if not user:
        raise HTTPException(status_code=404, detail="Username not found")
    if not verify_password(password, user.hashed_password):
        raise HTTPException(status_code=404, detail="Wrong password")
    return user
    