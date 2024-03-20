import React from 'react'
import './App.scss'
import CustomHook from './CustomHook'


export default function App() {
    const [count, setCount, {plus, minus, reset}] = CustomHook(0, 0, 15, 2)
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={minus}>minus</button>
        <button onClick={plus}>plus</button>
        <button onClick={reset}>reset</button>
        <button onClick={()=>setCount(8)}>set 8</button>
    </div>
  )
}