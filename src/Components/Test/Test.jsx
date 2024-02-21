import React, {useEffect, useState} from 'react'
import './Test.css'

export default function Test() {
    const [comment,
        setComment] = useState({})
        const [currentIndex, setCurrentIndex] = useState(1)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments/${currentIndex}`)
            .then(res => res.json())
            .then(data => setComment(data))

    }, [currentIndex])

    const hendleClickNext = ()=> setCurrentIndex(currentIndex + 1)
    const hendleClickPrev = ()=>setCurrentIndex(currentIndex - 1)
    return (
        <div className='Test'>
            <button onClick={hendleClickPrev} disabled={currentIndex==1}>prev</button>
            <div className='Test__comments'>
                <p>{comment.email}</p>
                <h2>{comment.body}</h2>
            </div>
            <button onClick={hendleClickNext} disabled={currentIndex==45}>next</button>

        </div>
    )
}
