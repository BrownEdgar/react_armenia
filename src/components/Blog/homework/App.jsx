import React, { useState } from 'react'

const arr = ['One', "Two", "Three"]

export default function App() {
  const [message, setMessage] = useState('');
  const handleClick = (n) => {
    setMessage(n)
  }
  return (
    <div>
      <h1>message:{message}</h1>
      {
        arr.map(elem => {
          return <button onClick={() => handleClick(elem)} key={elem}>{elem}</button>
        })
      }
    </div>
  )
}
