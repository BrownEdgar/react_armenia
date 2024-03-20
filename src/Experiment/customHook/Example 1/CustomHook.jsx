import React, { useState } from 'react'

export default function CustomHook(
    initalValue,
     min,
      max,
      step
      ) {
    const [count, setCount] = useState(initalValue);

    const plus = () => { setCount(count + step <= max ? count + step : max) }
    const minus = () => { setCount(count - step >= min ? count - step : min) }
    const reset = () => { setCount(initalValue) }

    return [count, setCount, { plus, minus, reset }]
}
