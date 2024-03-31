import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialValues = {
  data: [],
  status: "idle",
  error: null,
};

export const getAsyncUsers = createAsyncThunk(
  "users/getAsyncUsers",
  async () => {
    const res = await axios("http://localhost:3000/users");
    return res.data;
  }
);
const usersSlice = createSlice({
  name: "users",
  initialState: initialValues,
  reducers: {
    sortCategory(state,action){
      state.data = state.data.filter((user) => user.category !== action.payload);
      console.log(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncUsers.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getAsyncUsers.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "fulfilled";
      })
      .addCase(getAsyncUsers.rejected, (state, action) => {
        state.status = "failure";
        state.error = action.error;
      })
      ;
  },
});

export default usersSlice.reducer;
export const { sortCategory } = usersSlice.actions;
