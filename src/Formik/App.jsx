
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from 'formik'
import { object, string } from 'yup';
import { nanoid } from 'nanoid';
import './App.scss';

const initialValues = {
  email: '',
  password: '',
  submit:'Sign up',
  register:'Register'
}
const regex =/^[a-zA-Z].*\d/;

const validationSchema = object({
  email: string().email().required(),
  password: string().matches(regex,'It most contain digits').required()
});

export default function App() {
  const [users, setUsers] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);

  const handleSubmit = (values) => {
    console.log(values)
    const newUser = {
      ...values,
      id: nanoid(5)
    }
    setUsers([...users, newUser]);
    resetForm();
  }

  const handleDelete = (id) => {
    const result = users.filter(user => user.id !== id)
    setUsers(result)
  }

  const showPassword = (id) => {
    setCurrentUserId(id);
  }


  return (
    <div className='App'>
      <Formik initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <h1>Entrance</h1>
          <Field type='email' name='email' placeholder='Enter your Email' />
          <ErrorMessage name='email' component='p' />
          <Field type='password' name='password' placeholder='Enter your password' />
          <ErrorMessage name='password' component='p' />
          <span>Forget password?</span>
 
          {/* <div className='btn'> */}
            {/* <button className='btn__signUp' type="submit">Sign up</button> */}
            {/* <button disabled>Register</button> */}
            {/* Էստեղ disabled եմ դրել որովհետև  երկուսի համար էլ 
            աշխատում ա submit-ը */}
          {/* </div> */}
          <div className='btn'>
              <Field type='submit' name='submit' className='submit' />
              <Field type='reset' name='register' className='register' />
          </div>
        </Form>
      </Formik>

     
      {
        users.map(elm => {
          return (
            <div key={elm.id} className='Content'>
              <h3> {elm.email}</h3>
              <span className='psw'>
                <span>Password: {currentUserId === elm.id ? elm.password : '*'.repeat(8)}</span>
                {
                  (currentUserId === elm.id)
                    ? <i className="bi bi-eye-slash" onClick={() => showPassword(null)}></i>
                    : <i className="bi bi-eye-fill" onClick={() => showPassword(elm.id)}></i>
                }
              </span>
              <button className='del' onClick={() => handleDelete(elm.id)}>X</button>
            </div>
          )
        })
      }
    </div>
  )
}

