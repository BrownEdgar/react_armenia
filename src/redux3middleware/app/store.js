import { configureStore } from "@reduxjs/toolkit";
import gendersSlice from "../features/gendersSlice";
import postsSlice from '../features/postsSlice';

export default configureStore({
  reducer: {
    gender: gendersSlice,
    posts: postsSlice
  }
})










