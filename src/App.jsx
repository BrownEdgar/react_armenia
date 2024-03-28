import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRandomNumber } from './features/countSlice'
import { addUser, deleteUser, getAsyncUsers } from './features/usersSlice'
import {Formik,Form,Field} from 'formik'
import { nanoid } from '@reduxjs/toolkit'
import './App.scss'

export default function App() {
 const dispatch = useDispatch()
 const users = useSelector((state)=>state.users.data)

  useEffect(() => {
    dispatch(getAsyncUsers())
  }, [])
  const hendleSubmit= ({message},formik) =>{
    const user = {
      id:nanoid(8),
      message,
    }
    dispatch(addUser(user))
    formik.resetForm()
  }
  const hendleDel = (userID)=>{
    dispatch(deleteUser(userID))
  }
  return (
    <div className='Users'>
      <Formik
      initialValues={{message:''}}
      onSubmit={hendleSubmit}>
        <Form>
          <div>
            <Field className='Users__input' type="text" placeholder={"New user name"} name="message"/>
            <input className='Users__add' type="submit" value={"ADD USER"}/>
          </div>
        </Form>
      </Formik>
      {
        users.map((elm)=>{
          return (
            <div className='Users__name' key={elm.id}>
              <p>{elm.name ||elm.message}</p>
              <button className='Users__del' onClick={()=>hendleDel(elm.id)}>Delete</button>
            </div>
          )
        })
      }
    </div>
  )
}
