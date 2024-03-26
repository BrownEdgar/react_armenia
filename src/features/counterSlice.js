import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    addCount(state, action) {
      return state + action.payload.plus
    },
    minusCount(state, action){
      return state -action.payload.minus
    }
    
  }
})



export default counterSlice.reducer
export const {addCount, minusCount}=counterSlice.actions
