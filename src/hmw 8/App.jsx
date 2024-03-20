import React, { useState } from 'react'
import Modal from './Modal';
import './App.scss'

export default function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [post, setPost] = useState([]);

    const openModal = () => setIsOpen(!isOpen);





    const getPost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {

                setPost(data)
                openModal();
            })
    }


    return (
        <div className='App'>
            <button className='App__btns' onClick={openModal}>Open Posts?</button>
            {
                isOpen ? (
                    <Modal openModal={openModal} getPost={getPost}>
                        <h1>Are you sure?</h1>

                    </Modal>
                ) : null

            }
            <div>

                {
                    post.map((elm) => {
                        return (
                            <div key={elm.id}>
                                <h2>{elm.title}</h2>
                                <h2>{elm.body}</h2>
                            </div>
                        )
                    })
                }
            </div>

        </div>
        
    )

}
