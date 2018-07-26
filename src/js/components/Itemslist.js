import React from 'react'
import Itemelement from './Itemelement'

export default function Itemlist(props) {
	let elements = props.list.map((element, index) => {
		return (
			<Itemelement key={index} index={index} element={element} />
		)
	});

	return (
		<div className='container-fluid'>
			<div className='row'>
				{ elements }
			</div>
		</div>
	)
}
