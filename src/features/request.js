import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncRequest = createAsyncThunk(
  "request/reuqestAxios",
  async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/users");
    return response.data;
  }
);

const requestAxios = createSlice({
  name: "request",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    addUser(state,action){
      state.data.push(action.payload)
    },

    dilateUser(state,action){
     state.data = state.data.filter(user => user.id !== action.payload);
     
    }
  },


  extraReducers: (builder) => {
    builder
      .addCase(getAsyncRequest.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAsyncRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getAsyncRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default requestAxios.reducer;
export const {addUser, dilateUser} = requestAxios.actions
