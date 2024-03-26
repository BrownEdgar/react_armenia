import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRandomNumber, clearArray, deleteRandomNumber } from '../../features/arraySlics'
import { nanoid } from '@reduxjs/toolkit'
import './Array.scss'

export default function Array() {
  const array = useSelector((state) => state.array)
  const dispatch = useDispatch()

  const addNum = () => {
    const num = Math.round(Math.random() * 10)
    const newArr = {
      id: nanoid(5),
      number: num
    }
    dispatch(addRandomNumber({ newArr }))
  }
  const deleteJustOne = () => {
    dispatch(deleteRandomNumber())
  }

  const clearWholeArray = () => {
    dispatch(clearArray())
  }
  return (
    <>
      <button onClick={addNum}>Add Random Number</button>
      <button onClick={deleteJustOne}>Delete Random Number</button>
      <button onClick={clearWholeArray}>Clear</button>
      <div className='Numbers'>
        {
          array.map(elm => {
            return (
              <span key={elm.id}>{elm.number}</span>
            )
          })
        }
      </div>
    </>
  )
}
