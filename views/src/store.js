import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import posts from './reducers/post'
import profile from './reducers/profile'
import login from './reducers/login'

export const postState = {
  posts:[]
}
export const loginState = {
  login:[]
}

export const profileState = {
  profile:[]
}

const reducers = combineReducers({posts, login, profile})
const store = createStore(reducers, applyMiddleware(thunk))

export default store
