import axiosInstance from "./axiosInstance"

export const CreateTaskAPI=async(data)=>{
    const response=await axiosInstance.post("/tasks/create",data)
    return response.data
}

export const GetAllTasksAPI=async()=>{
    const response=await axiosInstance.get("/tasks/get_tasks")
    return response.data
}