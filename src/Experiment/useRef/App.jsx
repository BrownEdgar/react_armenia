import React, { useRef } from 'react'

export default function App() {
    const buttonRef=useRef(null)
    const handleClick=()=>{
        console.log(buttonRef);
    }

  return (
    <div className='App'>
        <button ref={buttonRef} onClick={handleClick} >Gago</button>
    </div>
  )
}
