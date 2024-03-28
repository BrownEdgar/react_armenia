import { configureStore } from '@reduxjs/toolkit'
import useresSlice from '../features/usersSlice/usersSlice'


export const store = configureStore({
  reducer: {

    users:useresSlice
  },
})
 export default store


