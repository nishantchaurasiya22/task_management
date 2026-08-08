from pydantic import BaseModel
from typing import Optional

class CreateTask(BaseModel):
    title:str
    description:Optional[str]=None

class UpdateTask(BaseModel):
    is_completed:bool

class ResponseTask(BaseModel):
    id:int
    title:str
    is_completed:bool
    description:Optional[str]=None

