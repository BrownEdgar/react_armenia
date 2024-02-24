import React, { useEffect, useState } from 'react'
import './App.css'
export default function App() {
    const [comment, setComment] = useState({})
    const [secComment, setSecComment]= useState({})
    const [currentIndex, setCurrentIndex] = useState(1)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${currentIndex}`)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [currentIndex])


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${currentIndex +1}`)
            .then(res => res.json())
            .then(data => setSecComment(data))
    }, [currentIndex])


    const prev = () => setCurrentIndex(currentIndex - 2)
    const next = () => setCurrentIndex(currentIndex + 2)

    return (
        <div className='App'>
            <button onClick={prev} disabled={currentIndex === 1}>Prev</button>
            
            <div className="comment">
                <span className='comment__id'>{comment.id}</span>
                <p>user <span>{comment.email}</span></p>
                <h2>{comment.body}</h2>
            </div>
            <div className="comment">
                <span className='comment__id'>{secComment.id}</span>
                <p>user <span>{secComment.email}</span></p>
                <h2>{secComment.body}</h2>
            </div>

            <button onClick={next} disabled={currentIndex === 500}>Next</button>
        </div>
    )
}
