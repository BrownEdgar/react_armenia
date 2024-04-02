import {configureStore} from "@reduxjs/toolkit"
import countSlice from "../features/countSlice"
import usersSlice from "../features/usersSlice"
import productsSlice from "../features/productsSlice";

export default configureStore({
  reducer: {
    count: countSlice,
    users: usersSlice,
    products: productsSlice
  },
});