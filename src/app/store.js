import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counterSlice'

import todosReducer from '../features/todosSlice/todosSlice'
import userSlice from '../features/usersSlice/userSlice'
import { nanoid } from 'nanoid'
import productsSlice from '../features/ProductsSlice/productsSlice'
import postsSlice from '../features/postsSlice'
import mainMiddleware from '../middlewares/mainMiddleware'


export default configureStore({
  reducer: {
    counter: counterSlice,
    todos: todosReducer,
    users: userSlice,
    products: productsSlice,
    posts: postsSlice
  },
  middleware: mainMiddleware
})