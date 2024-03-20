import React, { useContext } from 'react'
import './App.scss'
import { MyContext } from '../App'

export default function C() {
	// const {data, x} = useContext(MyContext)
	const data = useContext(MyContext)
	console.log(data);

  return (
	<div className='C'>
		<h1>component C</h1>
		{/* <p>{data[0]} {x}</p> */}
	</div>
  )
}



























// export default function C(props) {
// 	return (
// 		<div className='C'>
// 			<b>C</b>
// 			<br />
// 			<b>{JSON.stringify(props)}</b>
// 			<br />
// 			<b>{props.props.props.title}</b>
// 		</div>
// 	)
// }
// export default function C({title}) {
// 	return (
// 		<div className='C'>
// 			<b>C</b>
// 			<br />
// 			<b>{title}</b>
// 		</div>
// 	)
// }
// export default function C(props, {title}) {
// 	return (
// 		<div className='C'>
// 			<b>C</b>
// 			<br />
// 			<b>{JSON.stringify(props)}</b>
// 			<br />
// 			<b>{title}</b>
// 		</div>
// 	)
// }


//4 փոխանցում սխալ ձևով

// export default function C({ title }) {
// 	return (
// 		<div className='C'>
// 			<b>C</b>
// 			<br />
// 			<b>{title}</b>
// 		</div>
// 	)
// }