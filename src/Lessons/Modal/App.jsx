import React, { useState } from 'react'
import Modal from './Modal'

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setdata] = useState(['javascript', "React.js", "node.js", "Rust", 'Java', 'Angular'])

  const [currentIndex, setCurrentIndex] = useState(-1);
  const deleteByIndex = () => {
    setdata(data.toSpliced(currentIndex, 1))
  }
  const toggleModal = () => setIsOpen(!isOpen)
  return (
    <div>

      <div className="container">
        {data.map((elem, indx) => {
          return (
            <div key={elem}>
              <h2>{elem}</h2>
              <button onClick={() => {
                toggleModal();
                setCurrentIndex(indx)
              }}>Delete</button>
            </div>
          )
        })}
      </div>

      {
        isOpen ? (
          <Modal toggleModal={toggleModal}>
            <h1>Are you sure?</h1>
            <button onClick={toggleModal}>cancel</button>
            <button onClick={() => {
              toggleModal();
              deleteByIndex()
            }}>Delete</button>
          </Modal>
        ) : null
      }

    </div>
  )
}
