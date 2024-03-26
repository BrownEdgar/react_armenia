import { createSlice } from '@reduxjs/toolkit';
const digitSlice=createSlice({
    name:'digit',
    initialState:[50,45,2,36,9,8],
    reducers:{
        addDigit(state,action){
            state.push(action.payload)
            return state
        }
    }
})
export default digitSlice.reducer;
export const {addDigit}=digitSlice.actions


