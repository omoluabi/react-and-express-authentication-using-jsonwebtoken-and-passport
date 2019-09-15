import {profileState} from '../store'
import {FETCH_PROFILE} from '../action'

const profile = (state=profileState, action)=>{
  if (action.type === FETCH_PROFILE) {
    return {...state, profile:action.payload}
  }
  return state
}

export default profile
