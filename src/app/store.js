import { configureStore } from "@reduxjs/toolkit";
import {nanoid}from 'nanoid'
import useresSlice from "../features/usersSlice/usersSlice";

const genderMiddleWeare = (store) =>(next)=>(action)=>{
  if (action.type=='user/addUser') {
    action.payload.id=nanoid(6)
  }
}
export const store = configureStore({
  reducer: {
    users: useresSlice,
  },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(genderMiddleWeare),
});
export default store;
