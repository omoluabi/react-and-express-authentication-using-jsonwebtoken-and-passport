import axios from 'axios'
export const FETCH_POST  = 'FETCH_POST'
export const LOGIN  = 'LOGIN'
export const LOGOUT  = 'LOGOUT'
export const FETCH_PROFILE  = 'FETCH_PROFILE'

export const fetchPosts = ()=>dispatch=>{
  axios.get('/api/posts')
  .then((data) =>dispatch({
    type:FETCH_POST,
    payload:data.data
  }))
  .catch((err) =>console.log(err))
}
export const logout = ()=> dispatch =>dispatch({
    type:LOGOUT,
    payload:{status:false,token:false,email:false}
})
export const fetchProfile = (email)=>dispatch=>{
  axios.get(`/api/profile/${email}`)
  .then((data) =>dispatch({
    type:FETCH_PROFILE,
    payload:data.data
  }))
  .catch((err) =>console.log(err))
}

export const loginUser = (data)=>dispatch=>{
  axios.post('api/login', data)
  .then((data) =>dispatch({
    type:LOGIN,
    payload:data.data
  }))
  .catch((err) =>console.log(err))
}

export default null
