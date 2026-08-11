import axiosInstance from "./axiosInstance"

export const CreateTaskAPI=async(data)=>{
    const response=await axiosInstance.post("/tasks/create",data)
    return response.data
}

export const GetAllTasksAPI=async()=>{
    const response=await axiosInstance.get("/tasks/get_tasks")
    return response.data
}

export const DeleteTaskAPI=async(id)=>{
  const response=await axiosInstance.delete(`/tasks/delete_task/${id}`)
  return response.data
}

export const UpdateTaskAPI=async(id,data)=>{
    const response=await axiosInstance.patch(`/tasks/updated_task/${id}`,data)
    return response.data
}