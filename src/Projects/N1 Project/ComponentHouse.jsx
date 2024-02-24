import React, { useState } from 'react'
import ComponentBtn from './ComponentBtn'

export default function ComponentHouse() {
    const [house, sethouse] = useState([
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Private Villa',
            desc: 'Lorem ipsum dolor sit amet.Animi debitis qui quos soluta ex repellat'
        },
        {
            id: 2,
            image: 'https://media.istockphoto.com/id/1158234306/photo/craftsman-new-construction-house.jpg?s=1024x1024&w=is&k=20&c=g-Tez6dEAOK7LFzWsQb4vDMUe3tz6GMcgT7jEZjOP9o=',
            title: 'Private Villa',
            desc: 'Lorem ipsum dolor sit amet.Animi debitis qui quos soluta ex repellat'
        },
        {
            id: 3,
            image: 'https://media.istockphoto.com/id/488415134/photo/suburban-house.jpg?s=1024x1024&w=is&k=20&c=XBhQKXQaJ0WWqHNO7nJNs_zmzy9Gk0YKY-gGzDR9JW0=',
            title: 'Private Villa',
            desc: 'Lorem ipsum dolor sit amet.Animi debitis qui quos soluta ex repellat'
        }
    ])

    return (
        <div className="App__conteiner">
            {house.map(elm => {
                return (
                    <div key={elm.id}>
                        <img src={elm.image} alt="image" />
                        <div className='App__content'>
                            <h2>{elm.title}</h2>
                            <p>{elm.desc}</p>
                            <ComponentBtn/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
