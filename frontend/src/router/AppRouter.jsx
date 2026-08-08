import Login from "../pages/Login"
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomeLayout from "../layouts/HomeLayout"
import AuthLayout from "../layouts/AuthLayout"
import Home from "../pages/Home"
import Signup from "../pages/Signup"
import ProtectedRoute from "../components/ProtectedRoute"

const AppRouter = () => {
    const  router=createBrowserRouter([
     {
        path:"/",
        element:<AuthLayout/>,
        children:[
            {index:true,element:<Login/>},
            {path:"signup",element:<Signup/>}
        ]
     },
     {
        path:"/home",
        element:(
         <ProtectedRoute>
            <HomeLayout/>
         </ProtectedRoute>
        ),
        children:[
            {
                index:true,
                element:<Home/>
            }
        ]
     }
    ])
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter