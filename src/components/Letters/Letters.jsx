import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addLetter, deleteLetter } from '../../features/lettersSlice'
import './Letters.scss'


export default function Letters() {
  const letters = useSelector((state) => state.letters)
  const dispatch = useDispatch()
  const addRandom = () => {
    const num = Math.round(Math.random() * (122 - 97)) + 97
    const newLetter = {
      id: nanoid(),
      name: String.fromCharCode(num)
    }
    dispatch(addLetter({ randomLetter: newLetter }))
  }
  const handleDelete = (id) => {
    dispatch(deleteLetter({id }))
  }
  return (
    <div>
      <h1>Letters : </h1>
        <button onClick={addRandom}>Add Random Letter</button>
      <div className='Letters'>
      {letters.map(elm => {
        return (
          <div className="Letters__items" key={elm.id}>
            <button className='Letters__delete' onClick={() => handleDelete(elm.id)}><i className="bi bi-x-lg"></i></button>
            <h2>{elm.name}</h2>
          </div>
        )
      })}
      </div>
    </div>
  )
}
