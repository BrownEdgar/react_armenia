import React, { useState } from 'react'
import ComponentHouse from './ComponentHouse/ComponentHouse'
import Country from './ComponentCountry/country'
import Creater from './ComponentFounder/Creater'
import './App.scss'



export default function App() {
    return (
        <div className='App'>
            <div className='App__title'>
                <h1>Our Register Campany</h1>
                <p>
                    Lorem ipsum dolor sit amet consected deserunt tempora e sciunt libero rerum. Corrupti aliquam voluptas nesciunt consectetur
                    sequi aliquid deserunt tempora exent tempora e sciunt libero rerum. Cori aliquam voluptas nesc
                </p>
            </div>
            <ComponentHouse />
            <div className='App__main'>
                <h2>Which country do you want to live?</h2>
                <h4>Top three cities</h4>
                <Country/>
            </div>
            <Creater/>
        </div>

    )

}
