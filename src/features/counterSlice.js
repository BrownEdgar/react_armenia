import { createSlice } from '@reduxjs/toolkit'

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
  }
})

export default counterSlice.reducer;
export const { addCount, minus } = counterSlice.actions