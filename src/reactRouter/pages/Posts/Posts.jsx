import React from 'react'
import GetPosts from './GetPosts';
import './Posts.scss'
import MyLoader from './Loader/Loader';

export default function Posts() {
  const [posts, loading] = GetPosts(import.meta.env.VITE_JSON_POSTS_URL)
  return (
    <div className='Posts'>
      <h1>Posts</h1>
      <>
        {
          !loading
            ?
            <div className='Posts__items'>
              {
                posts.map((elm) => {
                  return(
                  <div className='item' key={elm.id}>
                    <span>{elm.title}</span>
                  </div>
                  )
                })
              }
            </div>
            :
            <MyLoader/>
        }
      </>
    </div>
  )
}
