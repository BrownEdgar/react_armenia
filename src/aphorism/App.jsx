import React from 'react'
import useFetch from './useFetch/useFetch';
import './App.scss'
import classNames from 'classnames'
import Aphorisms from './Aphorisms';

export default function App() {
  const [aphorism, setAphorism, loading] = useFetch(import.meta.env.VITE_APHORISM_URL)
  const handleLike = (id) => {
    const result = aphorism.map(elm => {
      if (elm.id === id) {
        elm.like = !elm.like
      }
      return elm
    })
    setAphorism(result)
  }
  return (
    <div>
      {
        !loading ?
          <Aphorisms aphorism={aphorism} handleLike={handleLike}/>
          :
          <p>Loading...</p>
      }
    </div>
  )
}