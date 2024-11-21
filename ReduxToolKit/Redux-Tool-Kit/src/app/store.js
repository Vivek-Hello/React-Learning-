import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../functions/Todo/TodoSlice";


export const Store =  configureStore({
    reducer: TodoReducer
});