import { configureStore } from '@reduxjs/toolkit'
import requestSlice from '../features/requestSlice'


export default configureStore({
  reducer: {
    request:requestSlice
  },
})