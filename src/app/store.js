import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counterSlice'
import productsSlice from '../features/productsSlice'
import todosReducer from '../features/todosSlice/todosSlice'
import userSlice from '../features/usersSlice/userSlice'
import { nanoid } from 'nanoid'


const myFirstMiddleware = (store) => (next) => (action) => {
  if (action.type === 'todos/addTodo') {
    action.payload.id = nanoid(5)
  }
  next(action)
}

const checkTodo = (store) => (next) => (action) => {
  if (action.type === 'todos/addTodo') {
    const todos = store.getState().todos.data;
    const isExist = todos.some(elem => elem.message === action.payload.message);
    if (isExist) {
      alert('todos exist');
      return;
    }
  }
  next(action)
}


export default configureStore({
  reducer: {
    counter: counterSlice,
    products: productsSlice,
    todos: todosReducer,
    users: userSlice
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), checkTodo, myFirstMiddleware],
})