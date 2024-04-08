import { createSlice } from '@reduxjs/toolkit'
import { x } from './postsSlice';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 1,
  reducers: {
    addCount(state, action) {
      console.log(action)
      return state + action.payload;
    },
    minus: (state) => {
      state = state - 1;
      return state
    }
  },
  extraReducers: (builder) => {
    builder.addCase(x, (state, action) => {
      console.log(22222)
      return 7
    })
  }
})

export default counterSlice.reducer;
export const { addCount, minus } = counterSlice.actions