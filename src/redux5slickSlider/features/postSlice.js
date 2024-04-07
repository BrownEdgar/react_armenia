import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
export const getAsyncPosts = createAsyncThunk(
  'posts/getAsyncPosts',
  async () => {
    const response = await axios('http://localhost:3000/posts')
    return response.data
  }
)

const initialState = {
  data: [],
  loading: false
}
const postSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAsyncPosts.pending, (state, { payload }) => {
      state.loading = true
    })
    builder.addCase(getAsyncPosts.fulfilled, (state, { payload }) => {
      state.loading = false
      state.data = payload

    })
  },
  selectors: {
    getAllPosts: state => state
  }
})

export default postSlice.reducer
export const { getAllPosts } = postSlice.selectors

