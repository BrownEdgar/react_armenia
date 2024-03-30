import React from 'react'
import { useSelector } from 'react-redux'

export default function App() {
  const gender = useSelector((state)=>state.gender)
  // console.log(gender);

  return (
    <div>
      
    </div>
  )
}
