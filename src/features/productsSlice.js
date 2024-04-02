import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
const initialValues = {
  data: [],
  status: "idle",
  error: null,
};
export const getAsyncproducts = createAsyncThunk(
    "products/getAsyncproducts", async() => {
    const res = await axios("http://localhost:3000/products");
    return res.data;
});
const productsSlice = createSlice({
  name: "products",
  initialState: initialValues,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncproducts.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getAsyncproducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "fulfilled";
      })
      .addCase(getAsyncproducts.rejected, (state, action) => {
        state.status = "failure";
        state.error = action.error;
      });
  },
});

export default productsSlice.reducer;
export const {} = productsSlice.actions;
