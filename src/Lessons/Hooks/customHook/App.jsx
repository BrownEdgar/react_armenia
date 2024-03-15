import React from 'react'
import CustomHook from './CustomHook'
import './App.scss'
import Button from '../../UI/Button/Button'

export default function App() {
  const [count, setCount, { plus, minus, reset }] = CustomHook({
    initialValue: 12,
    min: 1,
    max: 16,
    step: 3
  })
  return (
    <div>
      <h1>Count : {count}</h1>
      <Button onclick={minus} title='minus' variant='warning' />
      <Button onclick={plus} title='plus' />
      <Button onclick={reset} title='reset' />
      <Button onclick={() => setCount(8)} title='set 8' />
    </div>
  )
}
