import { configureStore } from '@reduxjs/toolkit'
import requestAxios from '../features/request'

export default configureStore({
  reducer: {
    request:requestAxios
  },
})