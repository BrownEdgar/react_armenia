import React, { useEffect, useReducer } from 'react'
import reducer, { initialStateValue } from './reducer'
import { DELETE_POST_BY_ID, GET_POSTS, SET_COUNT } from './actionTypes'
import axios from 'axios'
import './App.scss'


export default function App() {
  const [state, dispatch] = useReducer(reducer, initialStateValue)


  const setAtion = (actionType, postid) => {
    dispatch({ type: actionType, payload: postid })
  }

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/posts').then(res => dispatch({
      type: GET_POSTS,
      payload: res.data
    }))
  }, [])


  return (
    <div>

      <div className="Posts">
        {
          state.data.map(elem => {
            return <div key={elem.id}>
              <span onClick={() => setAtion(DELETE_POST_BY_ID, elem.id)}>X</span>
              <h2>{elem.title}</h2>
              <p>{elem.body}</p>
            </div>
          })
        }
      </div>


    </div>
  )
}
