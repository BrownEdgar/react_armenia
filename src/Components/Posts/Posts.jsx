import React, { useEffect, useState } from 'react'
import Modal from './Modal'

export default function Posts() {
    const [isOpen, setisOpen] = useState(false)
    const [albums, setAlbums] = useState([])
    const toggleModal = ()=>{setisOpen(!isOpen)}
    useEffect(() => {
  
      
    }, [])
    const  getData = async ()=>{
        const data = await fetch("https://jsonplaceholder.typicode.com/albums")
        const datas = await data.json()
        setAlbums(datas)
    }
            console.log(albums);

 return (
    <div>
      <button onClick={toggleModal}> opeen</button>
      {
        isOpen ? (
            <Modal>
                <h1>Are you sure?</h1>
                <button onClick={toggleModal}>Cancle</button>
                <button onClick={getData}>OK</button>
            </Modal>
        ) : null
      }
    </div>
  )
}
