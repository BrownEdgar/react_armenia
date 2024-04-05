import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


const initialStateValue = {
  data: [],
  error: null,
  loading: false
}
export const getAsyncUsers = createAsyncThunk(
  'users/getAsyncUsers',
  () => {
    return axios('https://jsonplaceholder.typicode.com/users')
      .then(res => res.data)
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState: initialStateValue,
  reducers: {
    deleteChoosenOne(state, { payload }) {
      state.data = state.data.filter((user) => user.id !== payload.id);
    },
    addNewUser(state, { payload }) {
      state.data.push(payload)
      return state
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAsyncUsers.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getAsyncUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload
    })
    builder.addCase(getAsyncUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error
    })
  }
})

export default usersSlice.reducer;
export const { deleteChoosenOne, addNewUser } = usersSlice.actions
