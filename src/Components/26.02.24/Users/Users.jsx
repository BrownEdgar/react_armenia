import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Users.scss'

export default function Users() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios({
            baseURL:"https://jsonplaceholder.typicode.com/" ,
            url: "users",
        }).then(res => setTodos(res.data))

    },[] )

    return (
        <div>
            {
                todos.map((elm)=>{
                    return (
                        <div key={elm.id}>
                            <p>{elm.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
