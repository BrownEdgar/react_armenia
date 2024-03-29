const checkUserBeforeSave = (store) => (next) => (action) => {
  if (action.type == 'users/addUser') {
    const users = store.getState().getUser.data;
    const x = users.some(user => user.name === action.payload.name);
    if (x) {
      alert("user exist");
      return;
    }
  }
  next(action)
}

const mainMiddleware = (defaultmiddleware) => {
  return [...defaultmiddleware(), checkUserBeforeSave]
}
export default mainMiddleware