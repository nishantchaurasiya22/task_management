import { createContext, useContext, useEffect, useState } from "react";
import { CheckAuthAPI,LogInUserAPI, LogOutUserAPI } from "../api/auth";

const AuthContext=createContext()
export const AuthProvider=({children})=>{

const[isAuthenticated,setIsAuthenticated]=useState(false)
const[loading,setLoading]=useState(true)
const[user,setUser]=useState(null)
const[err,setErr]=useState(true)

useEffect(() => {
  const checkUser = async () => {
    try {
      const res = await CheckAuthAPI(); 
      setIsAuthenticated(true);
      setUser(res.user || res);
      setErr(false)

    } catch {
      setIsAuthenticated(false);
      setUser(null);
      setErr(true)
    } finally {
      setLoading(false);
    }
  };

  checkUser();
}, []);
const login=async(data)=>{
    const res=await LogInUserAPI(data)
    setUser(res.user || res);
    setIsAuthenticated(true)
}

const logout=async()=>{
    await LogOutUserAPI()
    setUser(null); 
    setIsAuthenticated(false)
}

return(
    <AuthContext.Provider value={{isAuthenticated,user,loading,logout,login}} >
        {children}
    </AuthContext.Provider>
 )
}

export const useAuth=()=>{
    return useContext(AuthContext)
}