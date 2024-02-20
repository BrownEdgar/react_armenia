
import React, {  useState } from 'react'
import Modal from './Modal'
import './App.scss'

export default function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [posts, setPosts] = useState([]);

    const openModal = () => setIsOpen(!isOpen);

    
    
    // debugger
    const openPost = () => {
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
        <button   className='App__btns'  onClick={openPost} >Open Posts?</button>
    {
            isOpen? (
                <Modal openModal={openModal} >
                    <h1>Are you sure?</h1>
                <div>

                {
                    posts.map(posts=>{
                     <div key={posts.id}>
                         <h2>{posts.title}</h2>
                         <p>{posts.body}</p>
                     </div>
                     
                 })}
                </div>
                </Modal>
            ) :null
        }

        
    </div>
  );
}

