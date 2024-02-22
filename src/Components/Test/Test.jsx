import React, {useEffect, useState} from 'react'
import './Test.css'

export default function Test() {
    const [comment,
        setComment] = useState({})
        const [currentIndex, setCurrentIndex] = useState(1)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?_limit=2&_start=${currentIndex}`)
            .then(res => res.json())
            .then(data => setComment(data))

    }, [currentIndex])
    const hendleClickNext = ()=> setCurrentIndex(currentIndex + 2)
    const hendleClickPrev = ()=>setCurrentIndex(currentIndex - 2)
    return (
        <div className='Test'>
            <button onClick={hendleClickPrev} disabled={currentIndex==1}>prev</button>
            <div className='Test__comments'>
                <p>{comment[0].email}</p>
                <h2>{comment[0].body}</h2>
                <p>{comment[0].id}</p>
            </div>
            <div className='Test__comments'>
                <p>{comment[1].email}</p>
                <h2>{comment[1].body}</h2>
                <p>{comment[1].id}</p>
            </div>
            <button onClick={hendleClickNext} disabled={currentIndex==45}>next</button>

        </div>
    )
}
