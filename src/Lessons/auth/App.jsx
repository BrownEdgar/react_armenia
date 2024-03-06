import React, { useReducer, useRef } from 'react'
import './App.scss'
import { ErrorMessage, Field, Formik, Form } from 'formik'
import { array, date, object, string } from 'yup'
import moment from 'moment'
import reducer, { initialvalue } from './reducer'
import { nanoid } from 'nanoid'


const initialValues = {
  email: '',
  password: '',
  date: '',
  language: '',
}

const validationSchema = object({
  email: string().email().required(),
  password: string().min(8).max(20).matches(/^[A-Z]/, 'Password must be start with Uppercase').required(),
  date: date().max(moment("1/1/2014")).required(),
  language: string().oneOf([]).required()
})

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialvalue)
  const formRef = useRef(null)
  const login = (values) => {
    const user = state.find(user => {
      return (user.email === values.email) && (user.password === values.password)
    })
    if (user) {
      alert(`welcome user with '${user.email}' email`)
    } else {
      alert('user not found please check your data')
    }
  }


  const handleSubmit = (values) => {
    const user = {
      ...values,
      id: nanoid(7),
      date: moment(values.date).format("MMM DD Y")
    }
    dispatch({ type: "ADD_USER", payload: user })
  }

  return (
    <div className='App'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={false}
        onSubmit={handleSubmit}
      >
        {
          (formik) => {
            return (
              <Form >
                <div>
                  <label htmlFor="email">Email</label>
                  <Field type='email' id="email" name="email" />
                  <ErrorMessage component='p' name='email' />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <Field type='password' id="password" name="password" />
                  <ErrorMessage component='p' name='password' />
                </div>
                <div>
                  <label htmlFor="date">Brd</label>
                  <Field type='date' id="date" name="date" />
                  <ErrorMessage component='p' name='date' />
                </div>
                <div>
                  <Field as='select' name='language'>
                    <option value="javascript">javascript</option>
                    <option value="react.js">react.js</option>
                    <option value="next.js">next.js</option>
                    <option value="html&css">html&css</option>
                  </Field>
                </div>
                <div className='buttons'>
                  <Field
                    type="button"
                    value="login"
                    onClick={() => login(formik.values)}
                    disabled={!formik.isValid}
                  />
                  <Field type="submit" value="Register" />
                </div>
              </Form>
            )
          }
        }
      </Formik>

      <ul>
        {state.map(elem => {
          return (
            <li key={elem.id}>
              <span>{elem.email}</span>
              <span>{moment(elem.date).format('ll')}</span>
            </li>
          )
        })}
      </ul>

    </div>
  )
}
