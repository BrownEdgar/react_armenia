import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addUser, sortUser } from './feuture/userSlice'
import { nanoid } from '@reduxjs/toolkit';
import Button from './UA/Buttons/Button';
import  './App.scss'



export default function App() {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleSorted=()=>{
    dispatch(sortUser())
  }
  return (
    <div className='App'>
      {
        user.map((elem) => {
          return (
            <div className='App__content' key={elem.id}>
              <h1>{elem.name}</h1>
            </div>
          )
        })
      }
      <Button title='Add users' onclick = {()=> dispatch(addUser({id: nanoid(5), name: 'Arshavir'}))}/>
      <Button title='Sort Users' onclick={handleSorted}/>
    </div>
  )
}
