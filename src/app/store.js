import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../feuture/userSlice'

export default configureStore({
  reducer: {
    user : userSlice
  },
})