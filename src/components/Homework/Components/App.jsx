import React from 'react'
import './App.scss'
import Todos from './Todos'
import Comments from './Comments'
import Users from './Users'
import Posts from './Posts'

function App() {
  return (
    <div className='App'>
        <Todos/>
        <Comments/>
        <Users/>
        <Posts/>
    </div>
  )
}

export default App