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
    const res = await axios("https://jsonplaceholder.typicode.com/users");
    return res.data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: initialValues,
  reducers: {
    addUser(state, { payload }) {
      state.data.push(payload);
      return state;
    },
    deleteUser(state, action) {
      state.data = state.data.filter((user) => user.id !== action.payload);
    },
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
      });
  },
});

export default usersSlice.reducer;
export const { addUser, deleteUser } = usersSlice.actions;
