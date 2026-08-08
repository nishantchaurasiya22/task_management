import { Outlet } from "react-router"
import "../styles/authPage.css"
const AuthLayout = () => {
  return (
    <div className="auth_page">
      <div className="form_container">
             <Outlet/>
      </div>
    </div>
  )
}

export default AuthLayout