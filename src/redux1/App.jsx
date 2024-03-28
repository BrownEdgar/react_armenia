import React, { useState } from 'react'
import './App.scss'
import { useSelector, useDispatch } from 'react-redux'
import { addCount, minusCount } from './features/counterSlice'
import { addUser, sortUsers } from './features/usersSlice'
import Letters from './components/Letters/Letters'
import Array from './components/Array/Array'
export default function App() {
  const count = useSelector((state) => state.counter)
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const handlePlus = () => {
    dispatch(addCount({ plus: 1 }))
  }
  const handleMinus = () => {
    dispatch(minusCount({ minus: 1 }))
  }
  return (
    <div className='App'>
      <h1>Count : {count}</h1>
      <button onClick={handleMinus}>Minus count</button>
      <button onClick={handlePlus}>Add count</button>
      <h1>Users : {
        users.map(elm => { return <div className='each-user'>{elm}</div>})
      }
      </h1>
      <button onClick={() => dispatch(addUser({ userName: 'Anush' }))}>Add user</button>
      <button onClick={() => dispatch(sortUsers())}>Sort users</button>
      <Letters />
      <Array />
    </div>
  )

}



