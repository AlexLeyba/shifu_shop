import React from 'react'
import { Link } from 'react-router-dom'

export default function Itemelement(props) {
	return (
		<div>
			<div className='card-header'>
				<h2>{ props.element.name }</h2>
			</div>
			<div className='card-body'>
				<p>{ props.element.content }</p>
			</div>
		</div>
	)
}