import { useState } from 'react'
import './App.css'

function App() {
 const arr=['black','green','yellow']
  const [message,setMessage]=useState('')
  const handleMessage=(elm)=>{
    setMessage(elm)
  }
  return (
    <div className={`App ${message}`} >
      <h1>Background is {message} </h1>
      <div className='App__item'>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Praesentium quam optio sunt inventore? Recusandae porro 
         maiores numquam, fugiat alias expedita odit in dolorem vel,
          voluptates eum qui nulla consectetur ratione?</p>
      {
        arr.map(elm=>{
          return <button onClick={()=>handleMessage(elm)} 
          className={`color__button ${elm}`}
          key={elm}>{elm}</button>
        })
      }
    </div>
    </div>
  )
}
export default App
