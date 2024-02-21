import React, { useState, useEffect } from 'react'
import './App.css'
export default function App() {
  const [comment, setComment] = useState({})
  const [currentIndex, setCurrentIndex] = useState(1)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${currentIndex}`)
      .then(res => res.json())
      .then(data => setComment(data))
  }, [currentIndex])


  const prev = () => setCurrentIndex(currentIndex - 1)
  const next = () => setCurrentIndex(currentIndex + 1)

  return (
    <div className='App'>
      <button onClick={prev} disabled={currentIndex === 1}>prev</button>
      <div className="comment">
        <span className='comment__id'>{comment.id}</span>
        <p>user:<span>{comment.email}</span></p>
        <h2>{comment.body}</h2>
      </div>
      <button onClick={next}>next</button>
    </div>
  )
}
