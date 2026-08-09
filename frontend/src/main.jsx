import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify'
import AppRouter from './router/AppRouter.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
    <>
        <Provider store={store} >
            <AuthProvider>
                <AppRouter />
                <ToastContainer autoClose={1000} />
            </AuthProvider>
        </Provider>
    </>
)
