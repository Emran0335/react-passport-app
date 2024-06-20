import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// initialState and data from api will be store in it.
const initialState = {
  tasks: [],
  isLoading: false,
  isError: false,
  error: "",
};

// let's get data from the api
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await fetch("http://localhost:3000/api/tasks");
  const tasks = await response.json();
  const sortedTasks = tasks.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  return sortedTasks;
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.tasks = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default tasksSlice.reducer;
