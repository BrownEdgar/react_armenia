import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    name: 'Varduhi',
    gender: 'female',
    email : 'varduhidanielyan1988@email.ru',
    id : nanoid(5)
  },
  {
    name: 'Matilda',
    gender: 'female',
    email : 'Matilda@email.ru',
    id : nanoid(5)
  },
  {
    name: 'Gayane',
    gender: 'female',
    email : 'gay.ghazaryan004@email.ru',
    id : nanoid(5)
  },
  {
    name: 'Arsen',
    gender: 'male',
    email : 'arsenshahbazyan@email.ru',
    id : nanoid(5)
  },
  {
    name: 'Narek',
    gender: 'male',
    email : 'n.manukyan.h@email.ru',
    id : nanoid(5)
  },
  {
    name: 'Manana',
    gender: 'female',
    email : 'meliqsetyan.m@email.ru',
    id : nanoid(5)
  },
  {
    name: 'Murad',
    gender: 'male',
    email : 'hakobyan@email.ru',
    id : nanoid(5)
  },
  {
    name: 'Mane',
    gender: 'female',
    email : 'm.aneeh@email.ru',
    id : nanoid(5)
  },
  {
    name: 'Hayk',
    gender: 'male',
    email : 'gasparyanhayk@email.ru',
    id : nanoid(5)
  },
  {
    name: 'Roman',
    gender: 'male',
    email : 'romannnn@email.ru',
    id : nanoid(5)
  },
]

const gendersSlice = createSlice({
  name: 'gender',
  initialState: initialState,
  reducers: {
    
  },
  selectors : {
    getAllGenders : (state)=>state,
    getMaleGanders : (state)=>{
      return state.filter(elm=>elm.gender === 'male')
    },
    getFemaleGanders : (state)=>state.filter(elm=>elm.gender === 'female')
  }

})

export default gendersSlice.reducer
export const {getAllGenders, getMaleGanders, getFemaleGanders} = gendersSlice.selectors


