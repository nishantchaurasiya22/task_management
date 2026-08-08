import { useAuth } from "../context/AuthContext"

const Message = () => {
  const{user}=useAuth()  
  return (
    <div>{user?.user_name}</div>
  )
}

export default Message