import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../feuture/userSlice'
import getUserSlise from '../feuture/getUserSlise/getUserSlise'
import mainMiddleware from '../middlewaries/mainMiddleware'

export default configureStore({
  reducer: {
    user: userSlice,
    getUser: getUserSlise
  },
  middleware: mainMiddleware
})