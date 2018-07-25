import axios from 'axios';

export function addUser(user) {
  return {
    type: 'ADD_USER',
    payload: user
  }
}

export function loginUser(user) {
  return dispatch => {
    axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyATo2V5Yns6JdE2KPtsY2S3rL85KKjz-1w`,{
        email: user.email,
        password: user.password,
        returnSecureToken: true
      })
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        dispatch(addUser(data));
      })
      
  }
}