import React, { useEffect } from 'react'
import { GetAllTasksAPI } from '../api/task'

const Manage_Tasks = () => {
  useEffect(()=>{
    const getAllTask=async()=>{
      try{
          const res=await GetAllTasksAPI()
          console.log(res);
          
      }catch(err){
        toast.error(err.response?.data?.detail || "Something  wrong! try again")
      }
      
    }
    getAllTask()
  },[])
  return (
    <div>Manage_Tasks</div>
  )
}

export default Manage_Tasks