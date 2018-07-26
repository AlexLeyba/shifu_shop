import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/index'
import Rout from './router'

const store = createStore(rootReducer)

localStorage.setItem('positions', JSON.stringify([
	{"id": "qwerty", "name": "debug tweet1", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim eros, hendrerit ut congue id, sollicitudin ut odio. Nullam quis ex ac quam consequat suscipit eget ut orci."},
	{"id": "qwertyu", "name": "debug tweet2", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim eros, hendrerit ut congue id, sollicitudin ut odio. Nullam quis ex ac quam consequat suscipit eget ut orci.2"},
	{"id": "qwertyui", "name": "debug tweet3", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim eros, hendrerit ut congue id, sollicitudin ut odio. Nullam quis ex ac quam consequat suscipit eget ut orci.3"},
	{"id": "qwertyi", "name": "debug tweet4", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin enim eros, hendrerit ut congue id, sollicitudin ut odio. Nullam quis ex ac quam consequat suscipit eget ut orci.4"}
]))

render (
	<Provider store={store}>
		<Rout />
	</Provider>,
	document.getElementById('root')
)
