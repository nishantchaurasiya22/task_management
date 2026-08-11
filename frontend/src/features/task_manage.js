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
        },
        deleteTask:(state,action)=>{
            state.list=state.list.filter(task=> task.id !== action.payload)
        },
        updateTask:(state,action)=>{
          const index=state.list.findIndex(
            task=>task.id===action.payload.id
          )
          if(index!==-1){
            state.list[index]=action.payload
          }
        }
    },
})


export const{getTasks,addTask,deleteTask,updateTask}=taskSlice.actions
export default taskSlice.reducer