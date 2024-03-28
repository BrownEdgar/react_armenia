import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counterSlice'
import usersSlice from '../features/usersSlice'
import lettersSlice from '../features/lettersSlice'
import arraySlics from '../features/arraySlics'

export default configureStore({
  reducer: {
    counter : counterSlice,
    users : usersSlice,
    letters : lettersSlice,
    array : arraySlics
  },
})