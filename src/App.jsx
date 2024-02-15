import React, { useState } from 'react'
import './App.css'


export default function App() {
const [colorName, setColorName]=useState('blue')

function changeName(newName) {
  setColorName(newName)
}



  return (
    <div className='App__container'>
      <h1>background is <span>{colorName}</span></h1>
      <div className={`App__item $ ${colorName}`}>
        <h2><span>React events</span>(change background)</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque voluptas quia exercitationem ex ea aut dolorem, ullam iusto harum adipisci natus quos, sunt voluptates fuga!</p>
        <button onClick={()=>changeName('black')} className='App__black'>black</button>
        <button onClick={()=>changeName('blue')} className='App__blue'>blue</button>
        <button onClick={()=>changeName('yellow')} className='App__yellow'>yellow</button>
      </div>







    </div>
  )
}
