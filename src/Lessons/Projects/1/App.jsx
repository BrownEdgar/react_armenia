import React, { useState } from 'react'

import './App.scss'

export default function App() {
  const [houses, setHouses] = useState([
    {
      id: 1,
      image: 'https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Private Villa',
      desc: `Some quick example text to build on the card title and make up the bulk of the cards content.`
    },
    {
      id: 2,
      image: 'https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Private Villa',
      desc: `Some quick example text to build on the card title and make up the bulk of the cards content.`
    },
    {
      id: 3,
      image: 'https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Private Villa',
      desc: `Some quick example text to build on the card title and make up the bulk of the cards content.`
    },
  ])

  return (
    <div className='App'>
      <h1>Our Story</h1>
      <p>Rerum morbi wisi purus illum, dolor consectetuer nulla, iusto eveniet? Fuga rem inventore scelerisque, wisi, hac illo wisi iste platea natus ante anim augue convallis. Lacinia laoreet mus quisque repellat, libero fusce, ullamco molestie taciti dolorema Iste quae possimus recusandae curae</p>
      <div className="App__container">
        {houses.map(elem => {
          return (
            <div key={elem.id}>
              <img src={elem.image} />
              <div className='content'>
                <h2>{elem.title}</h2>
                <p>{elem.desc}</p>
                <button>Go somewhere</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
