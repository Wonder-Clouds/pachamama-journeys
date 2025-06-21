from ..models.user import User
from sqlmodel import Session, select
from uuid import UUID
from fastapi import HTTPException
from .auth import get_password_hash
from ..schemas.user import UserSchema, TypeUser, UserCreate, UserInDB


def create_user(session: Session, user: UserCreate) -> UserSchema:
    user = UserSchema(
        name=user.name,
        username=user.username,
        type=user.type,
        disabled=user.disabled,
        hashed_password=get_password_hash(user.password),
    )
    session.add(user)
    session.commit()
    session.refresh(user)

    return UserSchema(
        id=user.id,
        name=user.name,
        username=user.username,
        type=TypeUser(user.type),
        disabled=user.disabled,
    )


def list_users(session: Session) -> list[UserSchema]:
    return session.exec(select(User)).all()


def list_user(session: Session, id_user: UUID) -> UserInDB | None:
    db_user = session.get(User, id_user)

    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")

    return db_user


def update_user(session: Session, id_user: str, user_data: UserCreate) -> User | None:
    db_user = session.get(User, id_user)
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")

    user_dict = user_data.model_dump(exclude_unset=True)
    user_dict["password"] = get_password_hash(user_dict["password"])

    for key, value in user_dict.items():
        setattr(db_user, key, value)

    session.add(db_user)
    session.commit()
    session.refresh(db_user)

    return db_user


def patch_user(
    session: Session, id_user: str, user_data: UserCreate
) -> UserSchema | None:
    db_user = session.get(User, id_user)

    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")

    user_dict = user_data.model_dump(exclude_unset=True)
    user_dict["password"] = get_password_hash(user_dict["password"])

    for key, value in user_dict.items():
        setattr(db_user, key, value)

    session.add(db_user)
    session.commit()
    session.refresh(db_user)

    return db_user


def delete_user(session: Session, id_user: str) -> bool:
    db_user = session.get(User, id_user)

    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")

    session.delete(db_user)
    session.commit()

    return True
