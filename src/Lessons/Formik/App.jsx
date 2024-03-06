import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import './App.scss'
import { initialValues, languages, validationSchema } from '../../constants/constants';

export default function App() {
  const [users, setUsers] = useState([]);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values)
    const user = {
      ...values,
      id: nanoid(7)
    }
    setUsers([...users, user])

    resetForm()
  }
  return (
    <div className='App'>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnBlur={true}
        validateOnChange={false}
      >
        <Form>
          <Field type='text' name='username' />
          <ErrorMessage name='username'  >
            {(mesg) => {
              return (
                <div>
                  <p className='error'>{mesg}</p>
                </div>
              )
            }}
          </ErrorMessage>

          <Field type='email' name='email' />
          <ErrorMessage name='email' component='p' className='error' />

          <Field type='password' name='password' />
          <ErrorMessage name='password' component='p' className='error' />
          <div>
            {languages.map(elem => {
              return (
                <label key={elem.id} htmlFor={elem}>
                  <Field type='checkbox' name='language' value={elem} id={elem} />
                  {elem}
                </label>
              )
            })}
            <ErrorMessage name='language' component='p' className='error' />
          </div>
          <input type="submit" />
        </Form>
      </Formik>

      <table>
        <caption>Our users</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>username</th>
            <th>email</th>
            <th>language</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(elem => {
              return (
                <tr>
                  <td>{elem.id}</td>
                  <td>{elem.username}</td>
                  <td>{elem.email}</td>
                  <td>{elem.language.join(',')}</td>
                </tr>
              )

            })
          }

        </tbody>
      </table>
    </div>
  )
}
