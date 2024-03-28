import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewUser, deleteChoosenOne, getAsyncUsers } from './features/usersSlice';
import './App.scss'
import { Formik, Form, Field } from 'formik'


export default function App() {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getAsyncUsers())
  }, []);

  function handleSubmit({newUserName}, formik){
dispatch(addNewUser({name : newUserName}))
formik.resetForm()
  }

  const { data } = users
  return (
    <div className='Users'>
      <h1>Users</h1>
        <Formik
          initialValues={{ newUserName : ''}}
        onSubmit={handleSubmit}
        >
        <Form className='addPart'>
          <Field name='newUserName' type="text" placeholder='New user name' />
         <button className='addUserBtn' type='submit'>Add user</button>
        </Form>
      </Formik>
      {
    data.map(elm => {
      return (
        <div key={elm.id || elm.name} className='Users__each'>
          <span>{elm.name}</span>
          <button onClick={() => dispatch(deleteChoosenOne({ users: { data }, id: elm.id }))}>Delete</button>
        </div>
      )
    })
  }
    </div >
  )
}
