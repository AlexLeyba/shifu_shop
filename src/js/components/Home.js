import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Itemslist from './Itemslist'

export default class Home extends Component {
	constructor() {
		super()

		let positions = JSON.parse(localStorage.getItem('positions'))
		this.state = { positions: positions }
	}

	render() {
		return(
			<Itemslist list={this.state.positions} />
		)
	}
}