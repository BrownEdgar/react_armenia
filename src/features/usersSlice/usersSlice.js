import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialStateValue = {
  data: [],
  error: null,
  loading: false,
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
  initialState: initialStateValue,
  reducers: {
    deleteUser(state, action) {
      const userId = action.payload;
      state.data = state.data.filter((user) => user.id !== userId);
    },
    addUser(state, action) {
      state.data.push(action.payload);
    },
    addUsers(state, action) {
      state.data = [...state.data, ...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAsyncUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAsyncUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
export const { addUser, addUsers, deleteUser } = usersSlice.actions;
