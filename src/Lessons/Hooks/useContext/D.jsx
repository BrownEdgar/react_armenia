import React, { useContext } from 'react'
import { MyContext } from './context/MainiContext';



export default function D() {
  const data = useContext(MyContext);
  console.log(data)
  return (
    <div>
      <h1>conmponent D</h1>
      {/* <p>{data[0]} {x}</p>
      <button onClick={myFunction}>click</button> */}
      {/* <MyContext.Consumer>
        {(value) => {
          return (
            <div>
              {JSON.stringify(value)}
            </div>
          )
        }}
      </MyContext.Consumer> */}
    </div>
  )
}
