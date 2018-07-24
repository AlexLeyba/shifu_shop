let initialState = { authorized: false }

export default function usersReducer(state=initialState, action) {
	switch(action.type) {
		case 'ADD_USER': {
			let user = action.payload
			state = {...state, ...user, authorized: true}
		break
		}
		case 'SIGNOUT': {
			state = { authorized: false }
		break
		}
	}
return state
}
