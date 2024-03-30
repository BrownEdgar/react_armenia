import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewUser, deleteChoosenOne, getAsyncUsers } from './features/usersSlice';
import './App.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { nanoid } from '@reduxjs/toolkit';
import { object, string } from 'yup'

export default function App() {
  const { data } = useSelector((state) => state.users)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getAsyncUsers())
  }, []);

  function handleSubmit({ newUserName }, formik) {
    dispatch(addNewUser({ name: newUserName, id: nanoid(5) }))
    formik.resetForm()
  }
  const validationSchema = object({
    newUserName: string().required('you should fill in the field!')
  })
  return (
    <div className='Users'>
      <h1>Users</h1>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ newUserName: '' }}
        onSubmit={handleSubmit}
      >
        <Form className='addPart'>
          <Field name='newUserName' type="text" placeholder='New user name' />
          <input value={'Add User'} className='addUserBtn' type='submit' />
          <ErrorMessage className='error' name='newUserName' component={'span'} />
        </Form>
      </Formik>
      {
        data.map(elm => {
          return (
            <div key={elm.id} className='Users__each'>
              <span>{elm.name}</span>
              <button onClick={() => dispatch(deleteChoosenOne({ id: elm.id }))}>Delete</button>
            </div>
          )
        })
      }
    </div >
  )
}
