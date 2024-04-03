import React, { useEffect } from 'react'
import './Posts.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts, getAsyncPosts } from '../../features/postsSlice'
import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
import axios from 'axios';

const initialValues = {
  title: '',
  body: '',
  poster: '',
}

export default function Posts() {
  const posts = useSelector(getAllPosts);
  const dispatch = useDispatch();
  console.log(posts)
  const handleSubmit = (values, formik) => {

    const post = {
      id: nanoid(5),
      title: values.title,
      body: values.body,
      poster: `./images/${values.file}`
    }
    axios({
      baseURL: 'http://localhost:3000/',
      url: 'posts',
      method: 'POST',
      data: post
    })
      .then(() => dispatch(getAsyncPosts()))
    formik.resetForm()
  }

  useEffect(() => {
    dispatch(getAsyncPosts())
  }, [])


  return (
    <div className='Posts'>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {
          (formik) => {

            return (
              <Form>
                <div>
                  <Field type="text" name='title' />
                </div>
                <div>
                  <Field type="body" name='body' as='textarea' />
                </div>
                <div>
                  <Field type="file" name='poster' onChange={(e) => {
                    formik.setFieldValue('file', e.currentTarget.files[0].name)
                  }} />
                </div>
                <div>
                  <input type="submit" value='save post' />
                </div>
              </Form>
            )
          }
        }
      </Formik>
      <hr />
      <div className="wrapper">
        {
          posts.map(elem => {
            return (
              <div key={elem.id}>
                <img src={elem.poster} alt="" />
                <div className="Blog__content">
                  <h2>{elem.title}</h2>
                  <p>{elem.body}</p>

                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
