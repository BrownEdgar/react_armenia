import { createSlice, nanoid } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'users',
    initialState: [
        { id: nanoid(5), name: 'Saqo'},
        { id: nanoid(5), name: 'Bxdo' },
        { id: nanoid(5), name: 'Gexam' },
        { id: nanoid(5), name: 'Vanik' }
    ],
    reducers: {
        addUser: (state, action) => {
            return [...state, action.payload]
        },
        sortUser: (state, action) => {
            state.sort((a, b) => a.name.localeCompare(b.name));
        }
    }
})

export default userSlice.reducer;
export const { addUser, sortUser } = userSlice.actions