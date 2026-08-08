from app.repositories import user_repository
from pwdlib import PasswordHash

password_hash = PasswordHash.recommended()

def hash_password(password: str) -> str:
    return password_hash.hash(password)

def register_user(user_name: str, email: str, password: str):
    hashed_pw = hash_password(password)
    return user_repository.create_user(user_name, email, hashed_pw)

def authenticate_user(identifier:str,password:str)->dict:
    user=user_repository.login_user(identifier)
    if not user:
        raise ValueError("Invalid credentials")

    if not password_hash.verify(password,user["hashed_password"]):
        raise ValueError("Invalid credentials")

    return{
        "id":user["id"],
        "user_name":user["user_name"],
        "email":user["email"]
    }


def get_user_profile(user_id:int)->dict:
    user=user_repository.get_user_by_id(user_id)
    if not user:
        raise ValueError("User not found")
    return{
        "id":user["id"],
        "user_name":user["user_name"],
        "email":user["email"]
    }