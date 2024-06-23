import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    user: userReducer,
  },
});
