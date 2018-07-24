import { combineReducers } from 'redux'
import Usersreducer from './Usersreducer'

let reducer = combineReducers({
	user: Usersreducer
})

export default reducer
