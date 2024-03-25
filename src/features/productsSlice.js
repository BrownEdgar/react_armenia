import { createSlice } from '@reduxjs/toolkit'
const productSlice = createSlice({
  name: 'products',
  initialState: [{
    id: 1,
    name: "Samsung TV",
    price: 488_000
  }],
  reducers: {
    addProduct(state, action) {
      return [...state, action.payload]
    },
    deleteProductById(state, action) {
      return state.filter(product => product.id !== action.payload.id)
    }
  }
})

export default productSlice.reducer
export const { addProduct, deleteProductById } = productSlice.actions