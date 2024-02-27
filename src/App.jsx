import React, { useReducer } from 'react'
import './App.css'
import reducer, { initialState } from './reducer';
import { ADD_RANDOM_THREEDIGITS, CHANGE_NAME_PROPETY, COUNT_IN_TOTAL, SHUFFLE_ARRAY, SORT } from './actionTypes';


export default function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleClick = (actionType) => {
		dispatch({ type: actionType })
	}


	return (
		<div className='App'>
			<h1>State</h1>
			<div className="datas">
				<h2>actions : {state.actions}</h2>
				<h2>name : {state.user.name}</h2>
				<h2>arr : {JSON.stringify(state.arr)}</h2>
				<h2>total : {state.total}</h2></div>
			<button onClick={() => handleClick(SHUFFLE_ARRAY)}>shuffle</button>
			<button onClick={() => handleClick(ADD_RANDOM_THREEDIGITS)}>add random three digits</button>
			<button onClick={() => handleClick(CHANGE_NAME_PROPETY)}>change name</button>
			<button onClick={() => handleClick(SORT)}>sort</button>
			<button onClick={() => handleClick(COUNT_IN_TOTAL)}>quantity</button>
		</div>
	)
}