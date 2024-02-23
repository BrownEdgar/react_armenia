import React, { useEffect, useState } from 'react'
import './App.css'
export default function App() {
  const [posts, setposts] = useState({});
  const [curentIndex, setCurentIndex] = useState(1)
  const [nextPost, setNextPost] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${curentIndex}`)
      .then(res => res.json())
      .then(data => setposts(data))
  }, [curentIndex])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${curentIndex + 1}`)
      .then(res => res.json())
      .then(data => setNextPost(data))
  }, [curentIndex])

  const next = () => setCurentIndex(curentIndex + 2);

  const prev = () => {
    if (curentIndex > 1) {
      setCurentIndex(curentIndex - 2);
    }
  };
  //    const next=()=>setCurentIndex(curentIndex+1)
  //    const prev=()=>setCurentIndex(curentIndex -1)
  return (
    <div className='App'>
      <button onClick={prev} disabled={curentIndex === 1} >&#x2190;</button>
      <div className='App__content'>
        <span>{posts.id}</span>
        <h2>{posts.title}</h2>
        <p>{posts.body}</p>
      </div>
      <div className='App__content'>
        <span>{nextPost.id}</span>
        <h2>{nextPost.title}</h2>
        <p>{nextPost.body}</p>
      </div>
      <button onClick={next}>&#x2192;</button>
    </div>
  )
}
