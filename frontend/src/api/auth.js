
import axiosInstance from "./axiosInstance"
export const SignUpUserAPI=async(data)=>{
    const response=await axiosInstance.post("/auth/signup",data)
    return response.data
}

export const LogInUserAPI=async(data)=>{
    const response=await axiosInstance.post("/auth/login",data)
    return response.data
}

export const LogOutUserAPI=async()=>{
    const response=await axiosInstance.post("/auth/logout")
    return response.data
}


export const CheckAuthAPI=async()=>{
  const response=await axiosInstance.get("/auth/me")
  return response.data
}


export const DeleteTaskAPI=async()=>{
    const response=await axiosInstance.delete(`/tasks/deleted_task/${id}`)
    return response.data
}