import React, { useEffect } from 'react'
import axios from 'axios'
import instance from './axios'

export default function App() {


  useEffect(() => {


    // axios({
    //   baseURL: import.meta.env.VITE_DB_URL,
    //   url: 'users'
    // })
    // axios({
    //   url: 'https://jsonplaceholder.typicode.com/users',
    //   params: {
    //     _limit: 4
    //   }
    // })
    // instance('todos/1')
    //   .then(res => console.log(res))
    // axios('https://jsonplaceholder.typicode.com/posts')
    //   .then(res => console.log(res.data))
  }, [])

  return (
    <div>App</div>
  )
}
