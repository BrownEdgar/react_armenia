import React, { useEffect } from 'react'
import './App.css'
import Comments from './Comments/Comments'
import Posts from './Posts/Posts'
import Todos from './Todos/Todos'
import Users from './Users/Users'

export default function App() {
  return (
    <div className='App'>
      <h1 className='App__heading'>Click bellow to see the homework result!</h1>
      <Comments />
      <Posts />
      <Todos />
      <Users />
    </div>
  )
}

