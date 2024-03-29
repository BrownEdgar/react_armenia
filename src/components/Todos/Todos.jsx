import React, { useEffect } from 'react'
import './Todos.scss'
import { Field, Form, Formik } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'
import { addTodo, addTodos, getAsyncTodos } from '../../features/todosSlice/todosSlice'

import { getAllusers, getAsyncUsers } from '../../features/usersSlice/userSlice'

export default function Todos() {
  const { data, error, loading } = useSelector((state) => state.todos)
  const users = useSelector(getAllusers())
  console.log(loading)
  const dispatch = useDispatch()
  const handleSubmit = ({ message }, formik) => {
    const todo = {
      id: nanoid(8),
      message,
    }
    dispatch(addTodo(todo))
    formik.resetForm()
  }

  useEffect(() => {

    dispatch(getAsyncUsers())
  }, [])



  return (
    <div className='Todos'>
      <Formik
        initialValues={{ message: '' }}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <Field type='text' placeholder={'enter your todo...'} name="message" />
            <input type="submit" value={'add'} />
          </div>
        </Form>
      </Formik>
      <div className='Todos__list'>
        <ul>
          {
            data.map(elem => {
              return (
                <li key={elem.id}>
                  {elem.message || elem.title}
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}
