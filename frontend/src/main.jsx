import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify'
import AppRouter from './router/AppRouter.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
    <>
     <AuthProvider>
        <AppRouter/>
        <ToastContainer autoClose={1000}/>
     </AuthProvider>
    </>
)
