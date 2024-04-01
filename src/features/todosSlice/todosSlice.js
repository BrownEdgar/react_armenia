import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getPosts from './todosAPI';

const initialStateValue = {
  data: [],
  error: null,
  loading: false
}

export const getAsyncTodos = createAsyncThunk(
  'todos/getAsyncTodos',
  getPosts
)

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialStateValue,
  reducers: {
    addTodo(state, { payload }) {
      console.log(payload)
      state.data.push(payload);
      return state
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncTodos.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getAsyncTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload
      })
      .addCase(getAsyncTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error
      })
  },
  selectors: {
    getAllTodos: (state) => {
      return state
    }
  }
})

export default todosSlice.reducer;
export const { addTodo, addTodos } = todosSlice.actions;
export const { getAllTodos } = todosSlice.selectors;
