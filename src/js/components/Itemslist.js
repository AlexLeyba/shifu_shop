import React from 'react'
import { Link } from 'react-router-dom'
import Itemelement from './Itemelement'

export default function Itemlist(props) {
	let positions = JSON.parse(localStorage.getItem('positions'))
	let elements = props.list.map((element, index) => {
		return (
			<Itemelement key={index} index={index} element={element} /> 
		)
	});

	return (
		<div className='container'>
			<div className='card mx-auto' style={{width: '50%'}}>{ elements }</div>
		</div>
	)
}
