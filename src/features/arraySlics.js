import { createSlice, nanoid } from "@reduxjs/toolkit";

const arraySlice = createSlice({
  name: 'array',
  initialState: [{
    id : nanoid(5),
    number : 5
  }],
  reducers: {
    addRandomNumber(state, action) {
      state.push(action.payload.newArr)
      return state
    },
    deleteRandomNumber(state) {
      const num  = Math.floor(Math.random()* state.length)
      return state.filter(elm=>{return elm.id !== state[num].id})
    },
    clearArray(){
      return []
    }

  }
})


export default arraySlice.reducer
export const { addRandomNumber, deleteRandomNumber, clearArray } = arraySlice.actions
