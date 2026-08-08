import "../styles/create_task.css"
import "../styles/button.css"
import { CreateTaskAPI } from "../api/task"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
const Create_Task = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const onSubmit = async (data) => {
        try{
            await CreateTaskAPI(data)
            toast.success("Task created")
            reset()
        }catch(err){
            console.log(err)
            
            toast.error("Something Wrong")
            reset()
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="create_task_container" action="">
            <div className="title_input_container task_container">
                <input {...register("title", { required: "This field is required" })} type="text" placeholder="Enter title for task" />
                {errors.title && <span className="error_msg">{errors.title.message}</span>}
                <span className="req">*</span>
            </div>
            <div className="description_input_container task_container">
                <input {...register("description")} type="text" placeholder="Enter description for task" />
            </div>
            <button className="form_btn" type="submit">create</button>
        </form>
    )
}



export default Create_Task