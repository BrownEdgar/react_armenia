import {configureStore} from "@reduxjs/toolkit"
import countSlice from "../features/countSlice"
import usersSlice from "../features/usersSlice"

export default configureStore({
    reducer:{
        count:countSlice,
        users:usersSlice
    }
})