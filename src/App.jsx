
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { shuffleArray } from './features/shuffleSlice';
import './App.scss'
import { addUser } from './features/useresSlice';
import { addDigit } from './features/threedigitSlice';

export default function App() {
  const shuffle = useSelector((state) => state.shuffle);
  const users=useSelector((state)=>state.users);
  const digit=useSelector((state)=>state.digit);
  const dispatch = useDispatch();

  const handleShuffle = () => {
    dispatch(shuffleArray())
  };
  
  return (
    <div className='App'>
      <h1>Shuffle:{JSON.stringify(shuffle)}</h1>
      <button onClick={handleShuffle}>Shuffle array</button>
      <h1>Users:{JSON.stringify(users)}</h1>
      <button onClick={()=>{
        dispatch(addUser('Vardanik',))
      }}>Add user</button>
      <h1>Add three digit :{JSON.stringify(digit)}</h1>
      <button onClick={()=>{
        dispatch(addDigit( Math.floor(Math.random()*900)+100))
      }}>Add three digit</button>
    </div>
  );
}

