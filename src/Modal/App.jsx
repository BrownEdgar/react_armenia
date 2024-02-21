
import React, { useState } from 'react'
import Modal from './Modal'
import './App.scss'

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  const openModal = () => setIsOpen(!isOpen);

  console.log(posts)

  // debugger
  const getPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setPosts(data);
        openModal();
      })
  }


  return (
    <div className='App'>
      <button className='App__btns' onClick={openModal} >Open Posts?</button>
      {
        isOpen ? (
          <Modal>
            <h1>Are you sure?</h1>
            <div className='Modal__buttons'>
              <button className='Modal__deny' onClick={openModal}>Cancel</button>
              <button className='Modal__confirm' onClick={getPost}>Continue</button>
            </div>
          </Modal>
        ) : null
      }
      <div>
        {
          posts.map(post => {
            return (
              <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            )
          })}
      </div>
    </div>
  );
}

