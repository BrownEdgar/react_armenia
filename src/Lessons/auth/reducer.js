export const initialvalue = []

function reducer(state = initialvalue, action) {
  switch (action.type) {
    case 'ADD_USER': return [...state, action.payload]
    default: return state;
  }
}

export default reducer