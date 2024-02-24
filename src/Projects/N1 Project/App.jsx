import React, { useState } from 'react'
import ComponentHouse from './ComponentHouse'
import './App.scss'



export default function App() {
    return (
        <div className='App'>
            <div className='App__title'>
                <h1>Our Story</h1>
                <p>
                    Lorem ipsum dolor sit amet consected deserunt tempora e sciunt libero rerum. Corrupti aliquam voluptas nesciunt consectetur
                    sequi aliquid deserunt tempora exent tempora e sciunt libero rerum. Cori aliquam voluptas nesc
                </p>
            </div>
            <ComponentHouse />
        </div>

    )

}
