import moment from 'moment'
import React, { useState } from 'react'
import './Clock.scss'

export default function Clock() {
    const [isDate, SetIsDate] = useState()
    setInterval(() => {
        SetIsDate(Date.now)
    }, 1000)
    return (

        <div className='Clock'>
            <p className='Clcok__p1'>{moment().format('MMMM Do YYYY')}</p>
            <p className='Clcok__p2'>{moment().format('HH:mm:ss')} </p>
            <p>{moment().format("[Today is] dddd")}</p>
        </div>
    )
}