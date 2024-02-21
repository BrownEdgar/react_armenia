import React, {useEffect, useState} from 'react'
import Modal from './Modal'

export default function Posts() {
    const [isOpen,
        setIsOpen] = useState(false)
    const [albums,
        setAlbums] = useState([])
    const toggleModal = () => {
        setIsOpen(!isOpen)
    }
    const getData = async() => {
        const data = await fetch("https://jsonplaceholder.typicode.com/albums")
        const datas = await data.json()
        setAlbums(datas)
    }

    return (
        <div className='Posts'>
            {albums.length === 0
                ? <button onClick={toggleModal}>
                        get Posts</button>
                : null
}

            {isOpen
                ? (
                    <Modal isOpen={isOpen}>
                        <h1>Are you sure?</h1>
                        <button onClick={toggleModal}>Cancle</button>
                        <button
                            onClick={() => {
                            getData(),
                            toggleModal()
                        }}>OK</button>
                    </Modal>
                )
                : null
}
            {albums.map((elm) => {
                return (
                    <div key={elm.id}>
                        <p>{elm.title}</p>
                    </div>
                )
            })
}
        </div>
    )
}
