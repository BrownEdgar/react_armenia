import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRandomNumber } from './features/countSlice'
import { addUser } from './features/usersSlice'


export default function App() {
 const dispatch = useDispatch()
 const count = useSelector((state)=>state.count)
 const users = useSelector((state)=>state.users)
 const hendleConut = ()=>{
  dispatch(addRandomNumber())
 }
 const hendleUser=()=>{
  dispatch(addUser("valod"))
 }
 console.log(users);
  return (
    <div>
      count:{count}
      <button onClick={hendleConut}>add random  number</button>
      users:{JSON.stringify(users)}
      <button onClick={hendleUser}>add valod</button>
    </div>
  )
}
