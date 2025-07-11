from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session
from ...database.engine import get_session
from ...schemas.user import UserSchema, UserCreate


router = APIRouter(tags=["Auth"])


@router.get("/auth/login/")
def auth_login(session: Session = Depends(get_session)):
    pass