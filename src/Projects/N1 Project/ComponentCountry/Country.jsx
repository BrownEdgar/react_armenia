import React, { useState } from 'react'

export default function Country() {
    const [country, setcountry] = useState(
        [
            {
                id: 1,
                title: 'New York City',
                loaction: 'New York is a state in North-Eastern USA',
                year: 2024,
                image: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            },
            {
                id: 2,
                title: 'Texas Dalas',
                loaction: 'Texas Dalas is a state in South-Eastern USA',
                year: 2023,
                image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            },
            {
                id: 3,
                title: 'San Francisco',
                loaction: 'San Francisco is a state in West-Eastern USA',
                year: 2020,
                image: "https://images.unsplash.com/photo-1520880446380-51410f244831?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
        ])

    return (
        <div className='App__main-section'>
            {
                country.map(elm => {
                    return (
                        <div key={elm.id}>
                            <h3>{elm.title}<span>{elm.year}</span></h3>
                            <h4>{elm.loaction}</h4>
                            <img src={elm.image} alt="alt" />
                        </div>
                    )
                })
            }
        </div>
    )
}
