import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Todos.scss'

export default function List() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios({
            baseURL:"https://jsonplaceholder.typicode.com/" ,
            url: "todos",
        }).then(res => setTodos(res.data))

    },[] )

    return (
        <div>
            {
                todos.map((elm)=>{
                    return (
                        <div key={elm.id}>
                            <p className={`${elm.completed === true ? "green" :"red"}`}>{elm.title}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
