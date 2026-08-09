import { useForm } from "react-hook-form"
import { useNavigate} from "react-router"
import "../styles/form.css"
import "../styles/button.css"
import { toast } from "react-toastify"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"
const Login = () => {
  const{register,handleSubmit,reset,formState:{errors}}=useForm()
  const navigate=useNavigate()
  const{login}=useAuth()
  const onSubmit=async(data)=>{
  try{
  await login(data)
  toast.success(`Welcome back ${data.identifier} `)
  navigate("/home") 
  }catch(err){ 
    toast.error(err.response?.data?.detail || "Login failed")
    reset()
  }
    
  }
  return (
  <div className="form_Section">
    <h1 className="form_title">Hi,Welcome back</h1>
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
     <input className="input"  {...register("identifier",{required:"This field is required"})} type="text" placeholder="Enter your Email/Username" />
     {errors.identifier && <span className="error_msg">{errors.identifier.message}</span>}
     <input className="input" {...register("password",{required:"Password is required"})}  type="password" placeholder="Enter your password"/>
     {errors.password && <span className="error_msg">{errors.password.message}</span> }
     <button className="form_btn">Login</button>
    </form>
    <p className="link">Don't have account?<span className="link_text" onClick={()=>navigate("/signup")}>&nbsp;Sign up</span>  </p>
  </div>
  )
}

export default Login