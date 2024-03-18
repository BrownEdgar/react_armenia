import React, { useEffect, useState } from 'react'

export default function CustomHook() {
    const [name, setName] = useState([])
    useEffect(() => {
        localStorage.setItem("number",JSON.stringify(name))
    }, [name])
    
  return (
    <div></div>
  )
}
