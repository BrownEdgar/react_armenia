import { configureStore, nanoid } from "@reduxjs/toolkit";
import gendersSlice from "../features/gendersSlice";

export default configureStore({
  reducer: {
  gender : gendersSlice
  }
})










