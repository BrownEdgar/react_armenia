import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts, getAsyncPosts } from './features/postsSlice'

import './App2.scss'
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('1234567890', 6)

export default function App2() {
  const [editablePostId, setEditablePostId] = useState(null)
  const posts = useSelector(getAllPosts);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAsyncPosts())
  }, [])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/posts/1`)
      .then(() => dispatch(getAsyncPosts()))
      .catch(err => console.log(err))
  }

  const handleSubmit = (values, formik) => {
    const data = {
      id: nanoid(),
      ...values
    }
    axios.post('http://localhost:3000/posts/', data)
      .then(() => dispatch(getAsyncPosts()))
      .catch(err => console.log(err))
    formik.resetForm()
  }

  const setEditPostId = (id) => {
    setEditablePostId(id)
  }


  const editableSubmit = (e) => {
    e.preventDefault()
    const { title, number } = e.target;
    const post = {
      title: title.value,
      views: number.value,
    }
    axios.patch(`http://localhost:3000/posts/${editablePostId}`, post)
      .then(() => dispatch(getAsyncPosts()))
      .then(() => setEditablePostId(null))
      .catch(err => console.log(err))
  }
  return (
    <div className='App'>
      <Formik
        initialValues={{
          title: '',
          views: ''
        }}
        onSubmit={handleSubmit}>
        <Form>
          <Field type='text' name='title' placeholder="title" required />
          <Field type='number' name='views' placeholder="views" required min={0} />
          <input type="submit" value={'addPost'} />
        </Form>
      </Formik>
      <div className="App__posts">
        {
          posts.map(elem => {
            return (
              <div key={elem.id}>

                {(editablePostId === elem.id) ? (
                  <form onSubmit={editableSubmit}>
                    <input type="text" name="title" id="title" required />
                    <input type="number" name="number" id="number" required />
                    <button className='cancel' type='button' onClick={() => setEditablePostId(null)}>cancel</button>
                    <button className='save' type='submit'>save</button>
                  </form>
                ) : (
                  <>
                    <button className='delete' onClick={() => handleDelete(elem.id)}>
                      <i className="bi bi-x-lg"></i>
                    </button>
                    <h2>{elem.title}</h2>
                    <p>views: {elem.views}</p>
                    <button className="edit" onClick={() => setEditPostId(elem.id)}>
                      <i className="bi bi-pencil"></i>
                    </button>
                  </>
                )}

              </div>
            )
          })
        }
      </div>
    </div>
  )
}
