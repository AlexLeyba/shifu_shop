import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import Home from './components/Home'
import Itempage from './components/Itempage'

export default function Rout() {
	return (
	<Router>
		<div>
			<div className='d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow'>
					<h5 className='my-1 mr-md-auto font-weight-normal'>Shifu-shop</h5>
					<div className='my-2 my-md-0 mr-md-3'>
						<Link to='/' className='p-2 text-dark'>Home</Link>
					</div>
				</div>

			<Switch>
				<Route exact path='/' component={ Home } />
				<Route path='/item/0' component={ Itempage } /> //тест роута
				<Redirect to='/'/>
			</Switch>
		</div>
	</Router>
	)
}
