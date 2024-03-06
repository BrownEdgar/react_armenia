import React from 'react'
import  './users.scss'
function Users({users}) {
  return (
    <div>
        <table>
            <caption>Our Users</caption>
            <thead>
                <th>#</th>
                <th>Email</th>
                <th>Password</th>
            </thead>
            <tbody>
                {
                    users.map((elem)=>{
                        return (
                            <tr key={elem.id}>
                                <td>{elem.id}</td>
                                <td>{elem.email}</td>
                                <td>{elem.password}</td>

                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        
    </div>
  )
}

export default Users