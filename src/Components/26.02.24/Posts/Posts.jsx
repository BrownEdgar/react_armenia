import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Posts.scss'

export default function Posts() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios({
            baseURL:"https://jsonplaceholder.typicode.com/" ,
            url: "posts",
        }).then(res => setTodos(res.data))

    },[] )

    return (
        <div>
            {
                todos.map((elm)=>{
                    return (
                        <div className='Posts' key={elm.id}>
                            <p>Title: {elm.title}</p>
                            <p>Post: {elm.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
