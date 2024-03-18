import React from 'react'
import useArr from './useArr'

export default function Appp() {
    const arr = useArr({quantity:20})
    console.log(arr);
  return (
    <div>App</div>
  )
}
