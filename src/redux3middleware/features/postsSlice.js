import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAsyncPosts = createAsyncThunk(
  "posts/getPosts",
  async () => {
    const response = await axios('http://localhost:3000/posts')
    return response.data
  }
)


const postsSlice = createSlice(
  {
    name: 'posts',
    initialState: {
      data: [],
      loading: false
    },
    reducers: {},
    selectors: {
      getAllPosts: (state) => state.data
    },
    extraReducers: (builder) => {
      builder.addCase(getAsyncPosts.fulfilled, (state, { payload }) => {
        state.data = payload
      })
    }
  }
)

export default postsSlice.reducer
export const {
  getAllPosts
} = postsSlice.selectors