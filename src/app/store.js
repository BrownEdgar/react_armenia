import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../feuture/userSlice'
import getUserSlise from '../feuture/getUserSlise/getUserSlise'

export default configureStore({
  reducer: {
    user : userSlice,
    getUser : getUserSlise
  },
})