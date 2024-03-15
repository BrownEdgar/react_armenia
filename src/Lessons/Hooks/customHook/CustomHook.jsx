import React, { useState } from 'react'

export default function CustomHook({ initialValue, min, max, step }) {
  const [count, setCount] = useState(initialValue);

  const plus = () => setCount(count + step < max ? count + step : max)
  const minus = () => setCount(count - step > min ? count - step : min)
  const reset = () => setCount(initialValue)
  return [count, setCount, { plus, minus, reset }]
}
