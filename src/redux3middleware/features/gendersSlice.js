import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    name: 'Varduhi',
    gender: 'female',
    id: nanoid(5),
    age: 14
  },
  {
    name: 'Matilda',
    gender: 'female',
    id: nanoid(5),
    age: 56
  },
  {
    name: 'Gayane',
    gender: 'female',
    id: nanoid(5),
    age: 62
  },
  {
    name: 'Arsen',
    gender: 'male',
    id: nanoid(5),
    age: 43
  },
  {
    name: 'Narek',
    gender: 'male',
    id: nanoid(5),
    age: 25
  },
  {
    name: 'Manana',
    gender: 'female',
    id: nanoid(5),
    age: 31
  },
  {
    name: 'Murad',
    gender: 'male',
    id: nanoid(5),
    age: 78
  },
  {
    name: 'Hakob',
    gender: 'male',
    id: nanoid(5),
    age: 63
  },
  {
    name: 'Mane',
    gender: 'female',
    id: nanoid(5),
    age: 22
  },
  {
    name: 'Hayk',
    gender: 'male',
    id: nanoid(5),
    age: 75
  },
  {
    name: 'Roman',
    gender: 'male',
    id: nanoid(5),
    age: 15
  },
]

// createAsyncThunk

const gendersSlice = createSlice({
  name: 'gender',
  initialState: initialState,
  reducers: {
    preferMale: (state, action) => {

    }
  },
  // extraReducers: (builder)=>{

  // }
})


export default gendersSlice.reducer

// export const {} = gendersSlice.actions



