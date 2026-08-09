import "../styles/create_task.css"
import "../styles/button.css"
import { CreateTaskAPI } from "../api/task"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { addTask } from "../features/task_manage"
const Create_Task = () => {
    const dispatch=useDispatch()
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const onSubmit = async (data) => {
        try{
            const res=await CreateTaskAPI(data)
            dispatch(addTask(res))
            toast.success("Task created")
            reset()
        }catch(err){
            console.log(err)
            
            toast.error("Something Wrong")
            reset()
        }
    }
    return (
        <form className="task_container" onSubmit={handleSubmit(onSubmit)} action="">
           
            <div className="title_input_container task_container_child">
                <input {...register("title", { required: "This field is required" })} type="text" placeholder="Enter title for task" />
                {errors.title && <span className="error_msg req_message">{errors.title.message}</span>}
                <span className="req">*</span>
            </div>
            <div className="description_input_container task_container_child">
                <input {...register("description")} type="text" placeholder="Enter description for task" />
            </div>
           
            <button className="form_btn" type="submit">create</button>
        </form>
    )
}



export default Create_Task