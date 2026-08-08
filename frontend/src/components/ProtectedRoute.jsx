import { Navigate} from "react-router"
import { useAuth } from '../context/AuthContext'

const ProtectedRoute = ({children}) => {
  const{isAuthenticated,loading}=useAuth()
  if (loading) return <p>loading...</p>
  return isAuthenticated? children : <Navigate to="/" replace />
}

export default ProtectedRoute