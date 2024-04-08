import { createSlice } from '@reduxjs/toolkit';
import { x } from '../postsSlice';

const productSlice = createSlice({
  name: "products",
  initialState: [{
    id: 1,
    name: "Product 1",
    country: "Armenia"
  },
  {
    id: 2,
    name: "Product 2",
    country: "Russia"
  }
  ],
  reducers: {

  },
  selectors: {
    getAll: (state) => {
      return state
    },
    getAllArmenians: (state) => {
      console.log(state)
      return state.filter(elm => elm.country == "Armenia")
    }
  },
  extraReducers: (builder) => {
    builder.addCase(x, (state, action) => {
      state.push({
        id: 2,
        name: "Samsung TV 2",
        price: 300_000
      })
    })
  }

})
export const { getAll, getAllArmenians } = productSlice.selectors
export default productSlice.reducer
