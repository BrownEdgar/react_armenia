
import { createSlice } from '@reduxjs/toolkit';

const shuffleSlice = createSlice({
  name: 'shuffle',
  initialState: [20, 42, 56, 78, 95, 23, 69, 99, 123],
  reducers: {
    shuffleArray(state, action) {
      return state.sort(() => Math.random() > 0.5 ? 1 : -1);
    }
  }
});

export default shuffleSlice.reducer;
export const { shuffleArray } = shuffleSlice.actions;

