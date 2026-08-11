import React, { useEffect } from 'react'
import "../styles/manage_task.css"
import { GetAllTasksAPI } from '../api/task'
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { getTasks } from '../features/task_manage'
import Task from './Task'
const Manage_Tasks = () => {
   const dispatch=useDispatch()
   const tasks=useSelector((state)=>state.tasks.list)
  useEffect(()=>{
    const getAllTask=async()=>{
      try{
          const res=await GetAllTasksAPI()
          dispatch(getTasks(res))
      }catch(err){
        toast.error(err.response?.data?.detail || "Something  wrong! try again"); 
      } 
    }
    getAllTask()
  },[])
  return (
   <div className='task-section'>
    {tasks.length===0?(<p className='no_task'>No task! Create first task</p>):(tasks.map(task=> <Task id={task.id} title={task.title} description={task.description} status={task.is_completed}  key={task.id} /> ))}
   </div>
  )
}
export default Manage_Tasks
