import { createSlice } from "@reduxjs/toolkit";



const countSlice = createSlice({
    name:"count",
    initialState:0,
    reducers:{
        addRandomNumber(state,action){
            return state = Math.round(Math.random()*1000)
        }
    }
})

export default countSlice.reducer
export const {addRandomNumber} = countSlice.actions