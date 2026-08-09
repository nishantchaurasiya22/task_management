import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/task_manage"
export const store=configureStore({
    reducer:{
        tasks:taskReducer
    },
})