import React from 'react'
import "../styles/button.css"

import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import { useAuth } from '../context/AuthContext'

const HandleLogOut = () => {
  const navigate=useNavigate()
  const{logout}=useAuth()
const handleLogOut=async()=>{
  try{
  const data=await logout()
  toast.success("Logout successfully")
  navigate("/")
  }
  catch(err){
    toast.error(err.response?.data?.detail)
  }

}
  return (
    <div>
      <button  onClick={handleLogOut} className="form_btn">Logout</button>
    </div>
  )
}

export default HandleLogOut