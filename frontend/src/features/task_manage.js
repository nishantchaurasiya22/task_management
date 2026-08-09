import { createSlice } from "@reduxjs/toolkit";

const taskSlice=createSlice({
    name:"tasks",
    initialState:{
      tasks:[],
    },
    reducers:{
        getTasks:(state,action)=>{
            state.tasks=action.payload
        },
        addTask:(state,action)=>{
            state.tasks.push(action.payload)
        }
    },
})


export const{getTasks,addTask}=taskSlice.actions
export default taskSlice.reducer