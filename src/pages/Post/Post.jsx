import React from 'react'
import { useParams, Link, useLoaderData, useNavigate } from 'react-router-dom'
import ROUTES from '../../routes'
import axios from 'axios'

export default function Post() {
  const { id } = useParams()
  const post = useLoaderData()
  const navigate = useNavigate()
  const goBack = () => {
    navigate({ pathname: ROUTES.ABOUT })
  }

  return (
    <div className='Post'>
      <h2>Welcome to the Special post page N {id}</h2>
      {post ? (
        <div className="Post__block">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : <h2>Post N {id} not found</h2>}
      <button className="Link" onClick={goBack}>all posts</button>
    </div>
  )
}


export const getSpecialPost = async ({ params }) => {

  const response = await axios(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  return response.data
}