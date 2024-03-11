import React, { useState } from 'react'
import A from './A'
import { MyContext } from './context/MainiContext';

export default function App() {
  const [data, setData] = useState(["hello world!"]);
  const myFunction = () => {
    console.log('myFunction')
  }
  return (
    <div>
      <h1>Main App</h1>
      <MyContext.Provider value={{ data, x: 45, myFunction }}>
        <A />
      </MyContext.Provider>
    </div>
  )
}
