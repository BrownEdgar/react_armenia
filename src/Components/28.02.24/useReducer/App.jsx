import React, { useReducer } from 'react'
import reducer, { initialState } from './Reducer'

export default function Reducer() {
    const [state, dispatch] = useReducer(reducer,initialState)

    const hendleClick = (actionType) =>{
        dispatch({
            type:actionType
        })
    }
  return (
    <div>
        <h1>{JSON.stringify(state)}</h1>
        <button onClick={()=>hendleClick('STIR_DATA')}>sad</button>
    </div>
  )
}
