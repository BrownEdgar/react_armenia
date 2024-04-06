import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { object, string } from 'yup';
import { nanoid } from '@reduxjs/toolkit'
import './Request.scss'

import React from 'react'
import { addUser, dilateUser,getAsyncRequest, handleSort } from '../features/requestSlice';


export default function Request() {

  const dispatch = useDispatch()
  const { data, error, loading } = useSelector((state) => state.request)

  useEffect(() => {
    dispatch(getAsyncRequest())
  }, [])

  const handleSubmit = (values, formik) => {
    const user = {
      ...values,
      id: nanoid()
    }
    console.log(user);
    dispatch(addUser(user))
    formik.resetForm()
  }

  const hanldeDilate = (id) => {
    dispatch(dilateUser(id))
  }

  const initialValues = {
    usersMessage: ""
  }
  const validationSchema = object({
    usersMessage: string().min(5, 'Min 5 Word').required()
  })

  const handleSortClick =()=>{
    dispatch(handleSort())
  }

  return (
    <>
    <div className='App__form'>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        <Form>
          <Field type='text' placeholder='Enter Your Name' name='usersMessage'></Field>
          <ErrorMessage name='usersMessage' component='p'  />  
          <Field type='submit' value='Add User'></Field>
        </Form>
      </Formik>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {
        data.map(elm => {
          return (
            <div className='li__div' key={elm.id}>
              <span onClick={() => hanldeDilate(elm.id)}>Delate</span>
              <li  >{elm.name}</li>
              <li className='lili'>{elm.usersMessage}</li>
            </div>
          )
        })
      }

    </div>
    <button onClick={handleSortClick}>Sort</button>
    </>
  )
}
