import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getUser from "./UsersAPI";

export const getUsersPosts = createAsyncThunk(
  'users/getUsersPosts',
  getUser
);

const getUserSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  reducers: {
    addUser(state, action) {
      state.data.push(action.payload);
    },
    deleteUser(state, action) {
      state.data = state.data.filter((elem) => elem.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsersPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getUsersPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  }
});

export default getUserSlice.reducer;
export const { addUser, deleteUser } = getUserSlice.actions;
