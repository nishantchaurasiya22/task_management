from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers.user_router import auth_router
from app.routers.task_router import  task_router
app=FastAPI(title="TASK_MANAGER_API")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://task-management-frontend-rho-two.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(auth_router)
app.include_router(task_router)