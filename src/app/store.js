import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counterSlice'
import usersSlice from '../features/usersSlice'
import productsSlice from '../features/productsSlice'


export default configureStore({
  reducer: {
    counter: counterSlice,
    users: usersSlice,
    products: productsSlice
  },
})