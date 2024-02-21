import React, { useState } from 'react'
import Modal from './Modal/Modal'
import './App.scss'

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([])

  const toggleModal = () => setIsOpen(!isOpen);

  const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }

  const deletPostById = (id) => {
    setPosts((prevPosts) => {
      return prevPosts.filter(elem => elem.id !== id)
    })
  }

  return (
    <div className='App'>
      {
        posts.length === 0
          ? <button onClick={toggleModal}>get posts</button>
          : null
      }
      <Modal isOpen={isOpen}>
        <h2>Get posts?</h2>
        <button onClick={toggleModal}>cancel</button>
        <button onClick={() => {
          getPosts()
          toggleModal()
        }}>ok</button>
      </Modal>
      <div className="Posts">
        {posts.map(elem => {
          return (
            <div key={elem.id}>
              <button onClick={() => deletPostById(elem.id)}>X</button>
              <h2>{elem.title}</h2>
              <p>{elem.body}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
