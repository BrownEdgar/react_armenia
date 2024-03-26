import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: 'users',
  initialState: ['Bagrat', 'Ani', 'Soghomon', 'Elijah', 'Malena', 'Matilda'],
  reducers: {
    addUser(state, action) {
      state.push(action.payload.userName)
      return state
    },
    sortUsers(state){
      state.sort((a, b)=>a > b ? 1 : -1)
      return state
    }
  }
})


export default usersSlice.reducer
export const { addUser, sortUsers} = usersSlice.actions




