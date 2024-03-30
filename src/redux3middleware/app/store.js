import { configureStore } from "@reduxjs/toolkit";
import gendersSlice from "../features/gendersSlice";

const myFirstMiddleware = (store) => (next) => (action) => {
  console.log({
    store, 
    action, 
    next
  });
  next(action)
}
export default configureStore({
  reducer: {
  gender : gendersSlice
  },
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware().concat(myFirstMiddleware),
})

