from app.repositories.task_repository import create_task,get_all_tasks,update_task,delete_task
def new_task(title:str,description:str,user_id:int)->dict:
    return create_task(title,description,user_id)

def all_tasks(user_id:int)->list:
    return get_all_tasks(user_id)

def updated_task(is_completed:bool,task_id:int,user_id:int)->dict:
    return update_task(is_completed,task_id,user_id)

def deleted_task(task_id:int,user_id:int)->dict:
    return delete_task(task_id,user_id)


