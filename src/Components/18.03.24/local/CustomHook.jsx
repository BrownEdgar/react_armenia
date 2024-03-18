import React, { useEffect, useState } from 'react'

export default function CustomHook(key) {
  const [name] = useState(() => {
    return JSON.parse(localStorage.getItem(key))
  })

  const saveToStorage = (key, value) => {
    if (typeof value === 'number' || typeof value === 'string') {
      localStorage.setItem(key, value)
    } else {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }

  return [name, saveToStorage]
}
