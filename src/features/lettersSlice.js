import { createSlice, nanoid } from "@reduxjs/toolkit";

const lettersSlice = createSlice({
  name: 'letters',
  initialState: [{
    id: nanoid(),
    name: 'j'
  }],
  reducers: {
    addLetter(state, action) {
      state.push(action.payload.randomLetter)
      return state
    },
    deleteLetter(state, action) {
      
      return state.filter(elm => elm.id !== action.payload.id)
    }
  }
})


export default lettersSlice.reducer

export const { addLetter, deleteLetter } = lettersSlice.actions


