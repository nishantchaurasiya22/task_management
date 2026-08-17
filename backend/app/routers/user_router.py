from fastapi import APIRouter, status, HTTPException,Response,Depends
from app.models.user_model import UserCreate, UserResponse,UserLogin
from app.services import user_service
from app.dependencies import get_current_user
import psycopg2
from app.auth import create_access_token

auth_router = APIRouter(prefix="/auth", tags=["users"])

@auth_router.post(
    "/signup",
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED
)
def signup(user: UserCreate):
    try:
        new_user = user_service.register_user(
            user.user_name,
            user.email,
            user.password
        )
        return new_user

    except psycopg2.errors.UniqueViolation:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username or email already exists"
        )


@auth_router.post("/login",status_code=status.HTTP_200_OK)
def login(credentials:UserLogin,response:Response)->dict:
    try:
        user=user_service.authenticate_user(credentials.identifier,credentials.password)
        token=create_access_token(data={"user_id":user["id"]})
        response.set_cookie(
            key="access_token",
            value=token,
            httponly=True,
            secure=True,
            samesite="none"
)
        return{
            "message":"Login successfully",
            "user_name": user["user_name"]
            }
    except ValueError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="Invalid credentials")
  
     
@auth_router.get("/me",status_code=status.HTTP_200_OK)
def get_me(current_user:dict=Depends(get_current_user)):
    user_id=int(current_user.get("sub"))
    user=user_service.get_user_profile(user_id)
    if not user:
        raise HTTPException(status.HTTP_404_NOT_FOUND,detail="User not found")
    return user
    

@auth_router.post("/logout",status_code=status.HTTP_200_OK)
def logout(respone:Response):
    respone.delete_cookie("access_token")
    return{
        "message":"Logged out successfully"
    }

