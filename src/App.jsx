import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAsyncUsers, sortCategory} from './features/usersSlice'
import {nanoid} from '@reduxjs/toolkit'
import './App.scss'

export default function App() {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users.data)
    const [categorys, setCategorys] = useState(users)
console.log(categorys);
    useEffect(() => {
        dispatch(getAsyncUsers())
    }, [])
    
    const hendleSort =(category)=>{
      const res = users.filter((clothes)=>clothes.category!==category)
      setCategorys(res)
    }
    return (
        <div className='Users'>
            <button onClick={()=>hendleSort("men's clothing")}> man's</button>
            <button onClick={()=>hendleSort("women's clothing")}> woman's</button>
            {categorys.map((elm) => {
                return (
                    <div className='Users__name' key={elm.id}>
                        <img className='Users__img' src={elm.image} alt=""/>
                        <div className='Users__product'>
                            <p>{elm.title}</p>
                            <p>${elm.price}</p>
                            <p>category:{elm.category}</p>
                        </div>
                    </div>
                )
            })
}
        </div>
    )
}
