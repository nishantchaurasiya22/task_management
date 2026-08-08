import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import {SignUpUserAPI} from "../api/auth"
import "../styles/button.css"
import "../styles/form.css"
import { toast } from "react-toastify"
const Signup = () => {
  const navigate=useNavigate()
  const{register,handleSubmit,reset,formState:{errors}}=useForm()

  const onsubmit=async(data)=>{
    try{
      await SignUpUserAPI(data)
      toast.success("register successfully")
      navigate("/") 
      }catch(err){
        toast.error(err.response?.data?.detail)
        reset()
      }
  }
  return (
     <div className="form_Section">
    <h1 className="form_title">Hi, Let's get you started</h1>
    <form className="form" onSubmit={handleSubmit(onsubmit)}>
     <input {...register("user_name",{required:"Username is required"})} type="text" className="input" placeholder="Enter your username"/>
     {errors.user_name && <span className="error_msg">{errors.user_name.message}</span> }
     <input {...register("email",{required:"Email is required"})} type="email" className="input" placeholder="Enter your email" />
     {errors.email && <span className="error_msg">{errors.email.message}</span>}
     <input {...register("password",{required:"Password is required"})}  type="password" className="input" placeholder="Enter your password" />
     {errors.password && <span className="error_msg">{errors.password.message}</span>}
     <button className="form_btn">Signup</button>
    </form>
    <p className="link">Already have an account?<span className="link_text" onClick={()=>navigate("/")}>&nbsp;Login</span>  </p>
  </div>
  )
}

export default Signup