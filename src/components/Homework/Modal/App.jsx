import './App.scss'
import { useEffect, useState } from 'react'
import Modal from './Modal'

function App() {
    const [isOpen, setIsOpen] = useState(false)
    const [post, setPost] = useState([])
    const [count, setCount] = useState(1)
    const [seePosts, setSeePosts] = useState(false)
    const toggleIsOpen = () => setIsOpen(!isOpen)

    const deletePost = (id) => {
        setPost(prev =>{
            return prev.filter(elem => elem.id !== id)
        })
    }
    const next = () => setCount(count + 1)
    const prev = () => setCount(count - 1)

    const getPost = () => {
        
        fetch(`https://jsonplaceholder.typicode.com/comments/?_page=${count}&_limit=2`)
        .then(res => res.json())
        .then(data => setPost(data))
        setSeePosts(true)
    }

    useEffect(()=>{
        if (seePosts) {
            getPost()
        }
    }, [count])

  return (
    <div className='App'>
            {
              post.length === 0
              ? <button onClick={toggleIsOpen}>Get Posts</button>
              :  null
            }

   
           <Modal isOpen={isOpen}>
               <h1>Are You Sure</h1>
               <button onClick={toggleIsOpen}>Cancel</button>
               <button onClick={()=>{
                   getPost()
                   toggleIsOpen()
               }}>OK</button>
            </Modal>

        <div className="App__posts">
            <div className="App__posts-btn">
               {
                post.length > 0
                ? <button onClick={prev}>Previus</button>
                : null
               }
           </div>
        <div className='App__posts-content'>
            {
                post.map((elem) =>{
                    return(
                        <div 
                        className='App__posts-elem'
                        key={elem.id}
                        >
                            <button onClick={()=>{
                                deletePost(elem.id)
                            }}>X</button>
                            <p>{elem.id}</p>
                            <h1>{elem.name}</h1>
                            <h2>email : <span>{elem.email}</span></h2>
                            <p>{elem.body}</p>
                        </div>
                    )
                })
            }
            
        </div>
        <div className="App__posts-btn">
               {
                post.length > 0
                ? <button onClick={next}>Next</button>
                : null
               }
        </div>
        </div>
    </div>
  )
}

export default App