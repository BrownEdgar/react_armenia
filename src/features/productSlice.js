import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialStateSlice = {
  data:[],
  loading:false,
  error:null
}

export const getAsyncProduct = createAsyncThunk(
  'product/getAsyncProduct',
  async ()=>{
    try {
       const response = await axios('http://localhost:3000/posts')
    return response.data
    } catch (error) {
        throw error;
    }
  }
)

const productSlice = createSlice({
  name: "product",
  initialState: initialStateSlice,
  reducers: {},

  extraReducers: (builder) => {
    builder
    .addCase(getAsyncProduct.pending,((state)=>{
      state.loading = true
    }))
    .addCase(getAsyncProduct.fulfilled,((state,action)=>{
      state.loading = false
      state.data = action.payload
    }))
    .addCase(getAsyncProduct.rejected,((state,action)=>{
      state.loading = false
      state.error = action.error
    }))
  },
});


export default productSlice.reducer