import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const getAsyncPosts = createAsyncThunk(
  'posts/getAsyncPosts',
  async () => {
    const response = await axios('http://localhost:3000/posts')
    return response.data;
  }
)

export const x = createAction('myFlex/action', function prepare(text) {
  return {
    payload: {
      text,
      id: nanoid(),
      createdAt: new Date().toISOString(),
    },
  }
})


const postSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {

  },
  selectors: {
    getAllPosts: (state) => {
      console.log(state)
      return state
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncPosts.fulfilled, (state, action) => {

        return action.payload
      })

  },
})

export default postSlice.reducer;
export const { addCount, minus } = postSlice.actions
export const { getAllPosts } = postSlice.selectors


