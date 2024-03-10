import React, { useReducer, useRef} from 'react'
import './App.scss'
import { ErrorMessage, Field, Formik, Form } from 'formik'
import { date, object, string } from 'yup'
import moment from 'moment'
import reducer, { initialvalue } from './reducer'
import { nanoid } from 'nanoid'
import { ADD_USER, SORTDATE, SORTEMAIL } from './actionTypes'
import classNames from 'classnames'

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
  language: string().oneOf(['javascript',"react","next","html"]).required()
})

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialvalue)
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

  const setAction = (actionType) => {
    dispatch({ type: actionType })
  }

  const handleSubmit = (values) => {
    const user = {
      ...values,
      id: nanoid(7),
      date: moment(values.date).format("MMM DD Y")
    }
    dispatch({ type: ADD_USER, payload: user })
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
                  <ErrorMessage className='error' component='p' name='email' />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <Field type='password' id="password" name="password" />
                  <ErrorMessage className='error' component='p' name='password' />
                </div>
                <div>
                  <label htmlFor="date">Brd</label>
                  <Field type='date' id="date" name="date" />
                  <ErrorMessage className='error' component='p' name='date' />
                </div>
                <div>
                  <Field as='select' name='language'>
                    <option selected disabled hidden value="">Choose your language</option>
                    <option value="javascript">javascript</option>
                    <option value="react">react.js</option>
                    <option value="next">next.js</option>
                    <option value="html">html&css</option>
                  </Field>
                  <ErrorMessage className='error' component='p' name='language' />
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
      <table>
        <caption>Users</caption>
        <thead>
          <tr>
            <th>Email</th>
            <th>Date of birth</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th onClick={() => { setAction(SORTEMAIL) }} className='sorter'><i className={classNames('bx bxs-sort-alt')}></i></th>
            <th onClick={() => { setAction(SORTDATE) }} className='sorter'><i className={classNames('bx bxs-sort-alt')}></i></th>
          </tr>
          {
            state.map((elm) => {
              return (
                <tr 
                key={elm.id}
                className={classNames({
                  [elm.language] : true,
                })
                } 
                >
                  <td>{elm.email}</td>
                  <td>{moment(elm.date).format('ll')}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
