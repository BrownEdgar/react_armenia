import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function List({quantity, target}) {
    const [todo,
        setTodo] = useState([])
    useEffect(() => {
        axios({
            baseURL:"https://jsonplaceholder.typicode.com/" ,
            url: target,
            params: {
                _limit: quantity
            }
        }).then(res => console.log(res.data))

    }, [quantity, target])

    return (
        <div></div>
    )
}
