import React from 'react'
import { INCREMENT_ACTIONS, SHUFFLE_ARRAY, ADD_RANDOM_NUMBER, CHANGE_USER_NAME, SORT_ARRAY, CALCULATE_SUM } from './actionTypes';

export const initialState = {
    actions: 0,
    user: {
        id: 1,
        name: "Armen"
    },
    arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
};

export default function reducer(state, action) {
    switch (action.type) {
        case INCREMENT_ACTIONS:
            return { ...state, actions: state.actions + 1 };
        case SHUFFLE_ARRAY:
            const shuffledArr = [...state.arr].sort(() => Math.random() - 0.5);
            return { ...state, arr: shuffledArr };
        case ADD_RANDOM_NUMBER:
            const randomNumber = Math.floor(Math.random() * 1000);
            const newArr = [...state.arr, randomNumber];
            return { ...state, arr: newArr };
        case CHANGE_USER_NAME:
            return { ...state, user: { ...state.user, name: "Գեղամ" } };
        case SORT_ARRAY:
            const sortedArr = [...state.arr].sort((a, b) => a - b);
            return { ...state, arr: sortedArr };
        case CALCULATE_SUM:
            const sum = state.arr.reduce((acc, car) => acc + car, 0);
            console.log("Sum of Array:", sum);
            return state;
        default:
            return state;
    }
}

