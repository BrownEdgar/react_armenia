import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function List({quantity, target}) {
    const [todo,
        setTodo] = useState([])
    useEffect(() => {
        axios({
            baseURL: import.meta.env.VITE__DB__URL,
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
