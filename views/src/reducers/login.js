import {loginState} from '../store'
import {LOGIN} from '../action'
import {LOGOUT} from '../action'

const login = (state=loginState, action)=>{
  if (action.type === LOGIN) {
    return action.payload
  }
  if (action.type === LOGOUT) {
    return action.payload
  }
  return state
}

export default login
