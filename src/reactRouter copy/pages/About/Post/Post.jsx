import React from 'react'
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom'
import ROUTES from '../../../routes'
import axios from 'axios'

export default function Post() {
  const { id } = useParams()
  const post = useLoaderData()

  // const navigate = useNavigate()
// const goBack=()=>{
//   // navigate(-1)
//   // navigate({pathname : ROUTES.ABOUT, search : 5})
//   // navigate(ROUTES.ABOUT)
// }


  return (
    <div className='Post'>
      <h2>Welcome to the special post page N {id}</h2>
      {post ? (
        <div className="Post__block">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : <h2>Post N {id} is not defined</h2>}
      <Link to={ROUTES.ABOUT} className='Link'>all posts</Link>
      {/* <button to={ROUTES.ABOUT} onClick={goBack} className='Link'>all posts</button> */}
    </div>
  )
}

export const getSpecialPost = async ({ params }) => {
  const response = await axios(`https://jsonplaceholder.typicode.com/todos?_limit=5/${params.id}`)
  console.log(response.data);
  return response.data
}
