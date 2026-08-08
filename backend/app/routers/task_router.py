from fastapi import APIRouter,status,Depends,HTTPException
task_router=APIRouter(prefix="/tasks",tags=["tasks"])
from app.models.task_model import CreateTask,UpdateTask,ResponseTask
from app.services.task_service import new_task,all_tasks,get_task,updated_task,deleted_task
from app.dependencies import get_current_user
from typing import List

@task_router.post("/create",response_model=ResponseTask,status_code=status.HTTP_201_CREATED)
def create_task(task:CreateTask,current_user:dict=Depends(get_current_user)):
    user_id=int(current_user.get("sub"))
    return new_task(task.title,task.description,user_id)

@task_router.get("/get_tasks",response_model=List[ResponseTask],status_code=status.HTTP_200_OK)
def tasks(current_user:dict=Depends(get_current_user)):
    user_id=int(current_user.get("sub"))
    return all_tasks(user_id)

@task_router.get("/get_task/{task_id}",response_model=ResponseTask,status_code=status.HTTP_200_OK)
def task(task_id:int,current_user:dict=Depends(get_current_user)):
    user_id=int(current_user.get("sub"))
    result=get_task(task_id,user_id)
    if not result:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="Task not found")
    return result

@task_router.put("/updated_task/{task_id}",response_model=ResponseTask,status_code=status.HTTP_200_OK)
def up_task(task:UpdateTask,task_id:int,current_user:dict=Depends(get_current_user)):
    user_id=int(current_user.get("sub"))
    result=updated_task(task.is_completed,task_id,user_id)
    if not result:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="Task not found")
    return result
    
@task_router.delete("/delete_task/{task_id}",response_model=None,status_code=status.HTTP_204_NO_CONTENT)
def del_task(task_id:int,current_user:dict=Depends(get_current_user)):
    user_id=int(current_user.get("sub"))
    result=deleted_task(task_id,user_id)
    if not result:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="Task not found")
    return None
         