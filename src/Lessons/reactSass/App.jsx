import React from 'react'
import './App.scss'


export default function App() {
  return (
    <div className='App'>
      <div className='App__item App__item-white'>
        <h2>Lorem, ipsum dolor.</h2>
        <img className="App__image" src="https://images.unsplash.com/photo-1708006252090-e5db494aa373?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

      </div>
      <div className='App__item App__item-black'>
        <h2>Lorem, ipsum dolor.</h2>
        <p className='App__desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ea beatae incidunt veniam provident, esse repudiandae sunt voluptate accusamus? Quasi.
        </p>
      </div>
      <div>
        <h2>Lorem ipsum dolor sit amet.</h2>
      </div>
    </div>
  )
}
