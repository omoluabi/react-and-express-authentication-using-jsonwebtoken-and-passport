import React, {Component} from 'react'
import {logout} from './action'
import {connect} from 'react-redux'

class Logout extends Component{
  UNSAFE_componentWillMount(){
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    this.props.logout()
  }
  render(){
    return(
      <div>
        <h3>Logging out</h3>

      </div>
    )
  }
}

export default connect(null, {logout})(Logout)
