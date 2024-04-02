
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
 export const getAsyncProduct=createAsyncThunk(
    'product/getProduct',
    async ()=>{
        const response=await axios('http://localhost:3000/posts')
        return response.data
    }
)

 const productSlice=createSlice(
{
    name:'product',
    initialState:{
        data:[],
        loading:false
    },
    reducers:{},
    selectors:{
        getAllProduct:(state)=>state.data
    },
    extraReducers:(builder)=>{
        builder.addCase(getAsyncProduct.fulfilled,(state,{payload})=>{
            state.data=payload
        })
    }
}
)
export default productSlice.reducer

export const {getAllProduct}= productSlice.selectors


