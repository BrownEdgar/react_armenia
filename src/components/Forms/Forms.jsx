import React from 'react'
import './Forms.scss'
// import PropTypes from 'prop-types'

function Forms({users, handleSubmit, userId, showPassword}) {
  return (
    <div className='Forms'>
        <div className='Forms__Content'>
        <form onSubmit={handleSubmit}>
            
            <input type="email"
             name='userEmail'
             placeholder='Enter Your Email'
            />
            <input type="text"
            name='userName'
            placeholder='Enter your Name'
            />
            <input type="password"
            name='userPassword'
            placeholder='Enter your Password'
            />
            <input type="submit" value='register'/>
        </form>
        </div>
        <hr />
        <div className="Forms__Item">
                {
                    users.map((elem) => {
                        return(
                        
                             <div className='Forms__Item-item' key={elem.userId}>
                                <h1><span>Name</span> {elem.userName}</h1>
                                <h2><span>Email</span> {elem.userEmail}</h2>
                                <h3>
                                    <span>Password</span>
                                    {userId === elem.userId ? elem.userPassword :"*".repeat(8)}
                                    {
                                        (userId === elem.userId)
                                        ? <i className="bi bi-eye-fill" onClick={()=> showPassword(null)}></i>
                                        : <i className="bi bi-eye-slash-fill" onClick={()=> showPassword(elem.userId)}></i>
                                    }
                                    </h3>
                             </div>
                            
                        )
                    })
                }
        </div>

    </div>
  )
}

export default Forms


// Forms.propTypes = {
//     users : PropTypes.arrayOf(PropTypes.string)
// }