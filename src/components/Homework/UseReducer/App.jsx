import React, { useReducer } from 'react'
import reducer,  {initialState} from './reducer';
import { SHUFFLE_ARRAY, ADD_RANDOM_NUMBER, CHANGE_USER_NAME, SORT_ARRAY, CALCULATE_SUM } from './actionTypes';
import './App.scss'
function App() {
    const [state, dispatch] = useReducer(reducer, initialState);


    const setAction = (actionType) => {
        dispatch({ type: actionType });
        dispatch({ type: 'INCREMENT_ACTIONS' });
      };

      return (
        <div className='App'>
            <div className="App__content">
          <h1>UseReducer Example</h1>
          <h2>{state.user.name}</h2>
          <p>Actions: {state.actions}</p>
          <p>{state.arr.join(', ')}</p>
          <button onClick={() => {setAction(SHUFFLE_ARRAY)}}>Shuffle</button>
          <button onClick={() => {setAction(ADD_RANDOM_NUMBER)}}>Add Random Number</button>
          <button onClick={() => {setAction(CHANGE_USER_NAME)}}>Change User Name</button>
          <button onClick={() => {setAction(SORT_ARRAY)}}>Sort Array</button>
          <button onClick={() => {setAction(CALCULATE_SUM)}}>Calculate Sum</button>
            </div>
        </div>
      );
}

export default App