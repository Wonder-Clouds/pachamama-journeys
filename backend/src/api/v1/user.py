from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session
from ...schemas.user import UserSchema, UserCreate
from uuid import UUID
from ...database.engine import get_session
from ...services import user


router = APIRouter(tags=["User"])


@router.get("/users/", response_model=list[UserSchema])
async def get_users(session: Session = Depends(get_session)):
    return user.list_users(session)


@router.get("/user/{id_user}", response_model=UserSchema)
async def get_user(id_user: UUID, session: Session = Depends(get_session)):
    user_data = user.list_user(session, id_user)

    if not user_data:
        raise HTTPException(status_code=404, detail="User not found")

    return user_data


@router.post("/user/", response_model=UserSchema)
async def post_user(user_item: UserCreate, session: Session = Depends(get_session)):
    return user.create_user(session, user_item)


@router.put("/user/{id_user}", response_model=UserSchema)
async def put_user(
    id_user: UUID, user_data: UserCreate, session: Session = Depends(get_session)
):
    updated = user.update_user(session, id_user, user_data.model_dump())

    if not updated:
        raise HTTPException(status_code=404, detail="User not found")

    return updated


@router.patch("/user/{id_user}", response_model=UserSchema)
async def patch_user(
    id_user: UUID, user_data: UserCreate, session: Session = Depends(get_session)
):
    updated = user.patch_user(session, id_user, user_data)

    if not updated:
        raise HTTPException(status_code=404, detail="User not found")

    return updated


@router.delete("/user/{id_user}")
async def delete_user(id_user: UUID, session: Session = Depends(get_session)):
    deleted = user.delete_user(id_user, session)

    if not deleted:
        raise HTTPException(status_code=404, detail="User not found")

    return {"message": f"User with id {id_user} deleted"}
