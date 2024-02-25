import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Comments.scss'
export default function Comments() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios({
            baseURL:"https://jsonplaceholder.typicode.com/" ,
            url: "comments",
            
        }).then(res => setTodos(res.data))

    },[] )

    return (
        <div>
            {
                todos.map((elm)=>{
                    return (
                        <div key={elm.id} className='Comments'>
                            <p>email:{elm.email}</p>
                            <p>comment:{elm.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
