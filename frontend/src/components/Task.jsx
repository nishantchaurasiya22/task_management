import "../styles/manage_task.css"
import { DeleteTaskAPI, UpdateTaskAPI } from "../api/task"
import { legacy_connect, useDispatch } from "react-redux"

import { toast } from "react-toastify"
import { deleteTask, updateTask } from "../features/task_manage"
const Task = ({ id, title, description, status }) => {
  const dispatch = useDispatch()
  const handleUpdate=async(id)=>{
    try{
     const res=await UpdateTaskAPI(id,{
      is_completed:true
    })
    dispatch(updateTask(res))
    console.log(res);
    
    toast.success("Task completed successfully")
    }catch(err){
      toast.error(err.response?.data?.detail || "Something went wrong")
    }
  }
  const handleDelete=async(id)=>{
    try{
    await DeleteTaskAPI(id)
    dispatch(deleteTask(id))
    toast.success("Task deleted successfully")
    }catch(err){
      console.log(err);
      
      toast.error(err.response?.data?.detail || "Something went wrong")
    }
  }
  return (
    <div className={`task ${status ? "completed" : "not_completed"}`} >
      <span className="detail_1 details">{title}</span>
      {description && <span className="detail_1 details"> <p>{description}</p></span>}
      {status ? "" : <button onClick={()=>handleUpdate(id)} className="status_btn btn">Completed</button>}
      {!status ? "" : <button className="dlt_btn btn" onClick={()=>handleDelete(id)}>Remove</button>}
    </div>
  )
}

export default Task