import React, { useState, useEffect } from 'react';

const randomizer = (count) => {
  return new Array(count).fill().map(() => Math.round(Math.random() * 1e5))
}
export default function App() {
  const [count, setCount] = useState(2)
  const [data, setdata] = useState(randomizer(count))

  useEffect(() => {
    setdata(randomizer(count))
  }, [count])
  const handleClick = () => setCount(count + 1)

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>add count</button>
    </div>
  )
}
