
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

const mainMiddleware = (getDefaultMiddleware) => [...getDefaultMiddleware(), checkTodo, myFirstMiddleware];

export default mainMiddleware;