from pydantic import BaseModel,EmailStr
class UserCreate(BaseModel):
    user_name:str
    email:EmailStr
    password:str

class UserResponse(BaseModel):
    id:int
    user_name:str
    email:EmailStr

class UserLogin(BaseModel):
    identifier:str
    password:str
