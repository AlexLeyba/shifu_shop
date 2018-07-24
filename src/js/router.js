import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import Home from './components/Home'

export default function Rout() {
	return (
	<Router>
		<div>
			<div className='p-3 px-md-4 mb-3 border-bottom box-shadow'>
				<nav>
					<Link className='p-2 text-dark' to="/">Home</Link>
				</nav>
			</div>
		
			<Switch>
				<Route exact path="/" component={Home} />
				<Redirect to='/'/>
			</Switch>
		</div>
	</Router>
	)
}

/*
import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import ElementAdd from './components/adminpage/ElementAdd'
import Admin from './components/adminpage/Admin'
import Home from './components/Home'

function Rout() {
	return (
	<Router>
		<div>
			<div className='p-3 px-md-4 mb-3 border-bottom box-shadow'>
				<nav>
					<Link className='p-2 text-dark' to="/">Home</Link>
					<Link className='p-2 text-dark' to="/admin">Admin</Link>
				</nav>
			</div>
		
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/admin" component={Admin} />
				<Route path="/admin/add" component={ElementAdd} />
				<Redirect to='/'/>
			</Switch>
		</div>
	</Router>
	)
};

export default Rout
*/