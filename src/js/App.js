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
	{"id": "qwerty", "name": "debug tweet1", "content": "content1"},
	{"id": "qwertyu", "name": "debug tweet2", "content": "content2"}
]))

render (
	<Provider store={store}>
		<Rout />
	</Provider>,
	document.getElementById('root')
)