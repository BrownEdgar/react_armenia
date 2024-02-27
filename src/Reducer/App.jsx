
import React , {useReducer} from 'react'
import reducer from './reducer'
import './App.scss'


const initialState = {
  actions: 0,
  user: {
    id: 1,
    name: 'Armen',
  },
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9],
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setAction = (actionType) => {
    dispatch({ type: actionType });
  };
  return (
    <div>
       <div className='App'>
       <p>Actions: {state.actions}</p>
       <p>User ID: {state.user.id}</p>
       <p>User Name: {state.user.name}</p>
      <p>Total Sum: {state.sum}</p>
     <p>Array: {state.arr.join(', ')}</p>
     <button onClick={()=>setAction('sort_array')}>Sort Array</button>
     <button onClick={()=>setAction('shuffle_array')}>Shuffle Array</button>
     <button onClick={()=>setAction('random_number')}>Random number</button>
     <button onClick={()=>setAction('total_sum')}>Total Sum</button>
     <button onClick={()=>setAction('change_name')}>Change name</button>
     
   </div>
    
    </div>
  )
}
