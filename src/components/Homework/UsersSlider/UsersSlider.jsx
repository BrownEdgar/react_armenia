import React, { useEffect, useState } from 'react'
import './UsersSlider.scss'
import axios from 'axios';
import Button from '../../../UA/Buttons/Button';
import classNames from 'classnames';
import MyLoader from './LoaderSlider/LoaderSlider';

function UsersSlider() {
    const [user, setUser] = useState(null);
    const [userCount, setUserCount] = useState(0)
    const [copy, setCopy] = useState(false)
    const [loader, setLoader] = useState(true)

    useEffect(()=>{
        setLoader(true)
        axios(import.meta.env.VITE_DB_URL2)
        .then(res => setUser(res.data))
        .finally(()=>setLoader(false))
    },[])
    
    const prev = () => {
        setUserCount(userCount - 1)
    }
    const next = () =>{
        setUserCount(userCount + 1)
    }   
    const handleCopy = (email)=>{
        navigator.clipboard.writeText(email)
        setCopy(true)
        setTimeout(()=>{
            setCopy(false)
        }, 300)
    } 
  return (
    <div className='UsersSlider'>
        <h1>Users Slider</h1>
        <div className="UsersSlider__Content">
           <div className="UsersSlider__Content-Button"  > 
              <Button 
                 title={''}
                 icon="bi bi-arrow-left-square-fill" 
                 onclick={prev} 
                 disabled={userCount===0}
               />
           </div>
           {
               !loader ? (
                   
                   <div key={user[userCount].id} className="UsersSlider__Content-Item">
                       <h2>
                           {user[userCount].name}
                       </h2>
                       <p>
                           {user[userCount].email} 
                       </p>
                       <span className='icons'>
                            <Button 
                                title={''} 
                                variant={"dark"} 
                                size={'sm'} 
                                onclick={()=>handleCopy(user[userCount].email)} 
                                icon={classNames("bi", {
                                   "bi-clipboard-check-fill" : copy,
                                   "bi-clipboard-fill" : !copy
                                })}
                            />
                        </span>
                   </div>
               ) : <div className="UsersSlider__Content-Item">
                        <MyLoader/>
                   </div>
           }
           <div className="UsersSlider__Button">
              <Button
                 title={''} 
                 icon="bi bi-arrow-right-square-fill" 
                 onclick={next} 
                 disabled={userCount >= user?.length -1}
              />
           </div>
        </div>
    </div>
  )
}

export default UsersSlider