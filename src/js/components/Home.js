import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Itemslist from './Itemslist'
import Itempage from './Itempage'

export default class Home extends Component {
	constructor() {
		super()

		let positions = JSON.parse(localStorage.getItem('positions'))
		this.state = { positions: positions }
	}

	render() {
		return(
			<Switch>
				<Itemslist list={this.state.positions} />
				<Route path='/home/item/:index' render={() => (<Itempage /> )}/> //поправить роут
			</Switch>
		)
	}
}
