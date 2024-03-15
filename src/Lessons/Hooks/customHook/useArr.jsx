import { useState } from 'react'

export default function useArr({ quantity, min = 1, max = 10, type }) {
  const randomizer = () => {
    return (type === 'number')
      ? Math.round(Math.random() * (max - min) + min)
      : String.fromCharCode(Math.round(Math.random() * (122 - 97) + 97))
  }

  const [arr, setarr] = useState(() => {
    return new Array(quantity)
      .fill()
      .map(randomizer)
  })

  const getMax = () => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max
  }
  return [arr, { getMax }];
}
