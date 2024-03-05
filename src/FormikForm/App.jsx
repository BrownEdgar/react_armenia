import { ErrorMessage, Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { object, string, array, number } from 'yup';
import React from 'react'
import './App.scss'



const initialValues = {
   username: '',
   password: ''
}

const validationSchema = object({
   username: string()
      .min(3, 'Minimum must be 3 letter')
      .matches(/^[a-zA-Z\s]+$/, 'Write only letter')
      .required('You must write name'),
   password: string()  //Number?
      .min(5, 'Minimum must be 5 numbers')
      .matches(/^[0-9]+$/, 'Password must contain only numbers')
      .required('You must write password')
})



export default function App() {
   const [users, setUser] = useState([])

   const handleSubmit = (values, { resetForm }) => {
      const newUser = {
         ...values,
         id: nanoid(4)
      }
      resetForm()
      setUser([...users, newUser])
   }

   return (
      <div>
         <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            validateOnChange={false}
         >
            <Form className='App__form'>
               <h2 className='App__form-title'>Вход</h2>
               <div className='App__form-section'>
                  <Field type="text" name='username' placeholder='Имя пользователя или Email' className='App__form-inp'></Field>
                  <ErrorMessage name='username' component='span' className='App__error'></ErrorMessage>
                  <Field type='password' name='password' placeholder='Пароль' className='App__form-inp'></Field>
                  <ErrorMessage name='password' component='span' className='App__error'></ErrorMessage>
                  <p>Забыли пароль?</p>
               </div>
               <div className='App__form-btns'>
                  <button type='sumbit' name='enter'>Воите</button>
                  <button type='button' name='signIn' >Регистрация
                  </button>
               </div>

               <div className='App__users'>
                  <h3>Наши Юзеры </h3>
                  <section className='App__users-frs-section'>
                     <p>User Id</p>
                     <p>Username</p>
                     <p>Password</p>
                  </section>
                  <section className='App__users-scn-section'>
                     {
                        users.map(elm => {
                           return (
                              <div key={elm.id} >
                                 <p>{elm.id}</p>
                                 <p>{elm.username}</p>
                                 <p>{elm.password}</p>
                              </div>
                           )
                        })
                     }
                  </section>
               </div>
            </Form>
         </Formik>

      </div>
   )
}

