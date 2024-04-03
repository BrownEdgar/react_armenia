import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeFilter, getUsersByGanders } from './features/gendersSlice'
import './App.scss'

export default function App() {

  const currentUsers = useSelector(getUsersByGanders)
  const dispatch = useDispatch();

  return (
    <div className='Gender'>
      <div className='chooseGender'>
        <button onClick={() => dispatch(changeFilter("all"))}>All Genders</button>
        <button onClick={() => dispatch(changeFilter("male"))}>Only Male</button>
        <button onClick={() => dispatch(changeFilter("female"))}>Only Female</button>
      </div>
      <div className='showGenders'>
        <div className='headers'>
          <div><h1>Name</h1></div>
          <div><h1>Email</h1></div>
        </div>
        <div>
          {currentUsers.map(elem => {
            return <p key={elem.id}> {elem.name} |{elem.email}</p>
          })}
        </div>
      </div>

    </div>
  )
}