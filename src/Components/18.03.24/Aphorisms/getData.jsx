import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Aphorisms.scss'
import PropTypes from 'prop-types'



export default function GetData() {
    const [datas, setDatas] = useState([])
    const [likedIndices, setLikedIndices] = useState([]);
    useEffect(() => {
     axios.get("https://dummyjson.com/quotes")
     .then(res=>setDatas(res.data.quotes))
    }, [])

    const handleLike = (index) => {
        if (likedIndices.includes(index)) {
            setLikedIndices(likedIndices.filter(i => i !== index));
        } else {
            setLikedIndices([...likedIndices, index]);
        }
    };
  return (
    <div>
        {
            datas.map((elm,index)=>{
                return (
                    <div key={elm.id} className='Quotes'>
                        <p>{elm.quote} </p>
                        <button onClick={()=>handleLike(index)} className = {`${likedIndices.includes(index)?"liked":"notliked"}`}>Like</button>
                    </div>
                )
            })
        }
    </div>
  )
}
GetData.propTypes = {
    quote: PropTypes.string.isRequired,
}