import { createSlice } from "@reduxjs/toolkit";

const taskSlice=createSlice({
    name:"list",
    initialState:{
      list:[],
    },
    reducers:{
        getTasks:(state,action)=>{
            state.list=action.payload
        },
        addTask:(state,action)=>{
            state.list.push(action.payload)
        }
    },
})


export const{getTasks,addTask}=taskSlice.actions
export default taskSlice.reducer