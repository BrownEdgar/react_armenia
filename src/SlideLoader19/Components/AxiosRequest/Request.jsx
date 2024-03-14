import axios from 'axios'
import React, { Fragment } from 'react'
import { useState, useEffect } from 'react'
import ButtonLeft from '../ButtonIcons/ButtonLeft'
import ButtonRight from '../ButtonIcons/ButtonRight'
import classNames from 'classnames'
// VITE_USERS_URL = 'https://jsonplaceholder.typicode.com/users'


export default function Request() {
   {/*Component 1  */ }

   const [users, setUsers] = useState([])
   const [index, setIndex] = useState(0)
   const [isCopied, setIsCopied] = useState(false)

   const usersRequest = useEffect(() => {
      axios(import.meta.env.VITE_USERS_URL)
         .then(res => setUsers(res.data))
   }, [])

   const copyEmail = (email) => {
      navigator.clipboard.writeText(email)
      setIsCopied(true)
      setTimeout(() => {
         setIsCopied(false)
      }, 2000);

   }

   return (
      <Fragment>
         <h1>Users Request</h1>
         <div className='Request'>
            <ButtonLeft index={index} setIndex={setIndex} />        {/* Component 2  */}


            {
               users.length > 0 ? (
                  <div key={users[0].id} className='Request__section'>
                     <span className='Request__icon' onClick={() => copyEmail(users[index].email)}>
                        <i className={classNames('bi', {
                           "bi-clipboard2": !isCopied,
                           "bi-copy ": isCopied
                        })}></i>
                     </span>
                     <h3>{users[index].name}</h3>
                     <p>{users[index].email}</p>
                  </div>
               ) : null
            }



            <ButtonRight index={index} setIndex={setIndex} users={users} />     {/* Component 3  */}
         </div>
      </Fragment>
   )
}
