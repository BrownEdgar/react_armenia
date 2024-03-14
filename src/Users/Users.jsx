
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Users.scss';
import classNames from 'classnames';
import MyLoader from './Loader/UsersLoader';

export default function Users() {
    const [users, setUsers] = useState([]);
    const [currentIndex,setCurrentIndex]=useState(0)
    const [isCopied,setIsCopied]=useState(false)
    const [loadin,setLoading]=useState(false)
    useEffect(() => {
        setLoading(true)
        axios("https://jsonplaceholder.typicode.com/users")
            .then(res => setUsers(res.data))
            .finally(()=> setLoading(false))
    }, []);

const handleCopy=(email)=>{
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => {
        setIsCopied(false)
    }, 1000);
}


const next=()=>{
setCurrentIndex(currentIndex +1 )
}  



const prev=()=>{
    setCurrentIndex(currentIndex -1 )
}                             
    return (
        <div>
            <h1>Our users</h1>
            <div className='Users'>
                <div className='Slide'>
                    <button className='prev' onClick={prev} disabled={currentIndex===0}>
                        <i className="bi bi-arrow-bar-left"></i>
                    </button>
                </div>
               
        {
            users.length>0 ?
            <div key={users[currentIndex].id} className='Users__elm'>
                        <h2>{users[currentIndex].name}</h2>                      
                         <span className='Copy' onClick={()=>handleCopy(users[currentIndex].email)}>
                         <i className={classNames("bi",{
                            ' bi-clipboard-check':isCopied,
                            'bi bi-clipboard':!isCopied
                         })}></i>
                        </span>
                        <h3>{users[currentIndex].email}</h3>
                 </div> : <div  className='Users__elm'> 
                            <MyLoader/>
                 </div>
        }
                   <div className='Slide'>
                    <button className='next' onClick={next} disabled={currentIndex===users.length-1}>
                        <i className="bi bi-arrow-bar-right"></i>
                    </button>
                </div>
                
            </div>
        </div>
    );
}




















