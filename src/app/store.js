import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counterSlice'
import usersSlice from '../features/usersSlice'
import productsSlice from '../features/productsSlice'
import todosReducer from '../features/todosSlice/todosSlice'
import userSlice from '../features/usersSlice/userSlice'


export default configureStore({
  reducer: {
    counter: counterSlice,
    products: productsSlice,
    todos: todosReducer,
    users: userSlice
  },
})