import React from 'react'
import './Mainpage.scss'
import {Link} from 'react-router-dom'

export default function Mainpage() {
    const startLearn = ()=>{
        alert("et el mnacac daserin)")
    }
    return (
        <div className='Main'>
            <div className='Header'>
                <Link to="/"><img src="https://smartcode.am/public/image/logo.svg" alt=""/></Link>
                <div className='Header__pages'>
                    <Link to="/lessons" className='dif'>Դասընթացներ</Link>
                    <Link to="/advantages" className='dif'>Առավելություններ</Link>
                    <Link to="/treiders" className='dif'>Թրեյներներ</Link>
                    <Link to="/about" className='dif'>Մեր մասին</Link>
                </div>
                <button onClick={startLearn} className='Header__btn'>Սկսել ուսումը</button>
            </div>
        </div>
    )
}
