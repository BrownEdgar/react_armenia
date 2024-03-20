import { ADD_USER, SORTDATE, SORTEMAIL } from "./actionTypes";
import moment from 'moment'



export const initialvalue = []

function reducer(state = initialvalue, action) {
  switch (action.type) {
    case ADD_USER: return [...state, action.payload];
    
    case SORTEMAIL: return state.toSorted((a, b)=>{ return (a.email > b.email) ? 1 : -1});

    case SORTDATE: return state.toSorted((a, b)=>{ return (moment(a.date) > moment(b.date)) ? 1 : -1});

    default: return state;
  }
}

export default reducer