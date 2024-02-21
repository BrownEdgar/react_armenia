import React from 'react'
import Modal from './Modal'
import { useState } from 'react'

function App() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleModal = () => setIsOpen(!isOpen)
  return (
    <div>
        <button onClick={toggleModal}>Open Post</button>
        {
          isOpen ? (
            <Modal toggleModal= {toggleModal}>
                <h1>Are you sure</h1>
                
            </Modal>
          ) : null
        } 
        
    </div>
  )
}

export default App