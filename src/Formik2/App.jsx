import React, { useReducer, useRef } from 'react'
import './App.scss'
import { ErrorMessage, Field, Formik, Form } from 'formik'
import {  date, object, string } from 'yup'
import moment from 'moment'
import reducer, { initialvalue } from './reducer'
import {nanoid} from 'nanoid'

const initialValues = {
  email: '',
  password: '',
  date: '',
  language: '',
}

const validationSchema = object({
  email: string().email().required(),
  password: string().min(8).max(20).matches(/^[A-Z]/, 'Password must start with an uppercase letter').required(),
  date: date().max(moment("2014-01-01")).required(),
  language: string().oneOf(['javascript', 'react.js', 'next.js', 'html&css']).required()
})

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialvalue)
  const formRef = useRef(null)

  const login = (values) => {
    const user = state.find(user => {
      return (user.email === values.email) && (user.password === values.password)
    })
    if (user) {
      alert(`Welcome user with '${user.email}' email`)
    } else {
      alert('User not found, please check your data')
    }
  }

  const handleSubmit = (values) => {
    const user = {
      ...values,
      id: nanoid(7),
      date: moment(values.date).format("MMM DD YYYY")
    }
    dispatch({ type: "ADD_USER", payload: user })
  }




  const handleSort = () => {
  const sortedState = [...state].sort((a, b) => {
    if (a.email < b.email) {
      return -1;
    } else {
      return 1
    }
    
  });
  dispatch({ type: "SORT_BY_EMAIL", payload: sortedState });
}

  return (
    <div className='App'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={false}
        onSubmit={handleSubmit}
      >
        {(formik) => {
          return (
            <Form className='App__form'>
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
                <label htmlFor="date">Birth Date</label>
                <Field type='date' id="date" name="date" />
                <ErrorMessage component='p' name='date' />
              </div>
              <div>
                <Field as='select' name='language'>
                  <option value="javascript">JavaScript</option>
                  <option value="react.js">React.js</option>
                  <option value="next.js">Next.js</option>
                  <option value="html&css">HTML & CSS</option>
                </Field>
                <ErrorMessage component='p' name='language' />
              </div>
              <div className='buttons'>
                <button
                  type="button"
                  onClick={() => login(formik.values)}
                  disabled={!formik.isValid}
                >
                  Login
                </button>
                <button type="submit">Register</button>
              </div>
            </Form>
          )
        }}
      </Formik>

    <aside>
  {state.map(elem => {
    const  resultClassName = 'Result';
    switch (elem.language) {
      case 'javascript':
        resultClassName += ' JavaScript';
        break;
      case 'react.js':
        resultClassName += ' React';
        break;
      case 'next.js':
        resultClassName += ' Next';
        break;
      case 'html&css':
        resultClassName += ' HtmlCss';
        break;
      default:
        break;
    }

    return (
      <div key={elem.id} className={resultClassName}>
        <span>{elem.email}</span>
        <span>{moment(elem.date).format('ll')}</span>
      </div>
    )
  })}
</aside>


      <div >
        <button onClick={handleSort} className='sort'>Sort by Email</button>
       
      </div>
    </div>
  )
}






