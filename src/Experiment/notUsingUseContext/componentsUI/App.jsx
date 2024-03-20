import React, { useState } from 'react'
import A from './A/A'
// import B from './B/B'
import './App.scss'

// export const MyContext = React.createContext()
export const MyContext = React.createContext('default value')


export default function App() {
  const [data, setdata] = useState(['hello world']);
  return (
    <div className='App'>
      <h1>App</h1>
      {/* <MyContext.Provider value={{data, x: 45}}> */}
        <A />
        {/* <B/> */}
      {/* </MyContext.Provider> */}
    </div>
  )
}
































// export default function App() {
//   const title = 'Gago'
//   return (
//     <div className='App'>
//       <b>App</b>
//       <br />
//       <b>{JSON.stringify(title)}</b>
//       <A title={title} />
//     </div>
//   )
// }

//2/3
// export default function App() {
//   const title = 'Gago'
//   return (
//     <div className='App'>
//       <b>App</b>
//       <br />
//       <b>{title}</b>
//       <A title={title} />
//     </div>
//   )
// }


//4 փոխանցում սխալ ձևով
// export default function App() {
//   const title = 'Gago'
//   return (
//     <div className='App'>
//       <b>App</b>
//       <br />
//       {/* <b>{title}</b> */}
//       <A title={title} />
//     </div>
//   )
// }


