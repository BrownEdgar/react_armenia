import React, { useState } from 'react'

export default function useArr({quantity}) {
    const [arr, setArr] = useState(()=>{
        return new Array(quantity).fill().map((_,index)=>index+1)
    })
    return arr
}
