import React from 'react'
import B from '../B/B'
import './App.scss'


export default function A() {
  return (
	<div className='A'>
		<h1>component A</h1>
		<B/>
	</div>
  )
}


// export default function A(props) {
// 	return (
// 		<div className='A'>
// 			<b>A</b>
// 			<br />
// 			<b>{JSON.stringify(props)}</b>
// 			<br />
// 			<b>{props.title}</b>
// 			<B props={props} />
// 		</div>
// 	)
// }
// export default function A({title}) {
// 	return (
// 		<div className='A'>
// 			<b>A</b>
// 			<br />
// 			<b>{title}</b>
// 			<B title={title}/>
// 		</div>
// 	)
// }
// export default function A(props, {title}) {
// 	return (
// 		<div className='A'>
// 			<b>A</b>
// 			<br />
// 			<b>{JSON.stringify(props)}</b>
// 			<br />
// 			<b>{title}</b>
// 			<B title={title}/>
// 		</div>
// 	)
// }

//4 փոխանցում սխալ ձևով

// export default function A({title}) {
// 	return (
// 		<div className='A'>
// 			<b>A</b>
// 			<br />
// 			{/* <b>{title}</b> */}
// 			<B title={title}/>
// 		</div>
// 	)
// }
