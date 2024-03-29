import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAsyncUsers = createAsyncThunk(
  'users/getAsyncUsers',
  async () => {
    const res = await axios('https://jsonplaceholder.typicode.com/users');
    return res.data;
  }
)

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncUsers.pending, (state, action) => {
        console.log(state)
        state.status = 'pending'
      })
      .addCase(getAsyncUsers.fulfilled, (state, action) => {
        return {
          error: null,
          status: 'success',
          data: action.payload
        }
      })
      .addCase(getAsyncUsers.rejected, (state, action) => {
        console.log(111)
        console.log(action)
        state.status = 'failure',
          state.error = action.error
      })
  },

})



export default usersSlice.reducer