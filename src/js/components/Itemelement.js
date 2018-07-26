import React from 'react'
import { Link } from 'react-router-dom'

export default function Itemelement(props) {
	return (
		<div className='md-flex flex-md-equal w-100 my-md-3 pl-md-3 col-sm-4'>
			<Link id='link-normalize' to={`item/${props.index}`}>
				<div className='bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden'>
						<div>
							<h2 className='display-5'>{ props.element.name }</h2>
							<p className='lead'>{ props.element.content }</p>
						</div>
					<div id='images' className='bg-dark shadow-sm mx-auto'></div>
				</div>
			</Link>
		</div>
	)
}
