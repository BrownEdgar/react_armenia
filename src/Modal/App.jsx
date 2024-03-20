import React, { useState } from 'react'
import Modal from './Modal'

export default function App() {
    const [isOpen, setIsopen] = useState(false)
    const [data, setData]=useState(['javaScript', 'React.js', 'node.js', 'Rust', 'Java', 'Angular'])
    
    const [currentIndex, setCurrentIndex]=useState(-1)
    const deleteByIndex=()=>{
        setData(data.toSpliced(currentIndex, 1))
    }

    const toggleModal = () => setIsopen(!isOpen)
    return (
        <div>


            {/* <button onClick={toggleModal}>Open Modal</button> */}
            <div className="container">
                {data.map((elm, ind)=>{
                   return (
                    <div key={elm}>
                        <h2>{elm}</h2>
                        {/* <button onClick={toggleModal}>Open Modal</button> */}
                        <button onClick={()=>{
                            toggleModal(), 
                            setCurrentIndex(ind)
                            }}>Delete</button>
                    </div>
                   ) 
                })}
            </div>

            {
                isOpen ? (<Modal toggleModal={toggleModal}>
                    <h1>Are you sure?</h1>
                    <button onClick={toggleModal}>Cancel</button>
                    <button onClick={()=>{
                        toggleModal();
                        deleteByIndex()
                    }}>Delete</button>
                </Modal>) : null
            }

        </div>
    )
}
