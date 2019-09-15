import {postState} from '../store'
import {FETCH_POST} from '../action'

const posts = (state=postState, action)=>{
  if (action.type === FETCH_POST) {
    return {...state, posts:action.payload}
  }
  return state
}

export default posts
