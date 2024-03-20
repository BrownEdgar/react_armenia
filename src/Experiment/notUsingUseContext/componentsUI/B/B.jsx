import React, { useContext } from 'react'
import C from '../C/C'
import './App.scss'
// import { MyContext } from '../App'


export default function B() {
  // const data = useContext(MyContext)
	// console.log(data);
  return (
    <div className='B'>
      <h1>component B</h1>
      <C />
    </div>
  )
}

// export default function B(props) {
//   return (
//     <div className='B'>
//       <b>B</b>
//       <br />
//       <b>{JSON.stringify(props)}</b>
//       <br />
//       <b>{props.props.title}</b>
//       <C props={props} />
//     </div>
//   )
// }
// export default function B({title}) {
//   return (
//     <div className='B'>
//       <b>B</b>
//       <br />
//       <b>{title}</b>
//       <C title={title}/>
//     </div>
//   )
// }
// export default function B(props, {title}) {
//   return (
//     <div className='B'>
//       <b>B</b>
//       <br />
//       <b>{JSON.stringify(props)}</b>
//       <br />
//       <b>{title}</b>
//       <C title={title}/>
//     </div>
//   )
// }

//4 փոխանցում սխալ ձևով

// export default function B({title}) {
//   return (
//     <div className='B'>
//       <b>B</b>
//       <br />
//       {/* <b>{title}</b> */}
//       <C title={title}/>
//     </div>
//   )
// }