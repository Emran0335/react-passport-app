import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// initialState and data from api will be store in it.
const initialState = {
  user: undefined,
  isLoading: false,
  isError: false,
  error: "",
};

// let's get data from the api
export const fetchUser = createAsyncThunk(
  "user/fetchUsers",
  async (payload) => {
    const response = await fetch(
      `http://localhost:3000/api/user/${payload.userId}`
    );
    const user = await response.json();
    return user;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.user = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default userSlice.reducer;
