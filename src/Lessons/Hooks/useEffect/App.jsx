import React, { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  const [post, setPost] = useState([])

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      setPost(data)
    }
    getData()
  }, [])

  const changeTheme = () => {
    document.body.classList.toggle('dark')
  }

  return (
    <div className='Post'>
      <button onClick={changeTheme}>dark theme</button>
      {post.map(elem => {
        return (
          <article key={elem.id} className='Post__item'>
            <h2>{elem.title}</h2>
            <p>{elem.body}</p>
          </article>
        )
      })}
    </div>
  )
}
