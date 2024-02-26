import { DELETE_POST_BY_ID, GET_POSTS, SET_COUNT } from './actionTypes';


export const initialStateValue = {
  data: [],
  status: 'idle',
  error: null,
  count: 0
}


export default function reducer(state = initialStateValue, action) {
  console.log(action)
  switch (action.type) {
    case SET_COUNT: return {
      ...state,
      count: state.count + 7
    };
    case GET_POSTS: return {
      ...state,
      data: action.payload
    };
    case DELETE_POST_BY_ID: return deletePost(state, action.payload)


    default: return state;
  }
}


function deletePost(state, id) {
  const result = state.data.filter(elem => elem.id !== id)
  return {
    ...state,
    data: result,
    count: state.count + 1
  }
}
