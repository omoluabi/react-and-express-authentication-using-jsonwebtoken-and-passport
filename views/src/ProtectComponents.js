import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import {Redirect} from 'react-router-dom'

class ProtectComponents extends Component{
  UNSAFE_componentWillMount(){
    if (this.props.status && this.props.token) {
      localStorage.setItem('token', this.props.token)
      localStorage.setItem('email', this.props.data.email)
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
    }
  }

  render(){
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
    if (!axios.defaults.headers.common['Authorization'] || !localStorage.getItem('token')) {
      localStorage.removeItem('token')
      localStorage.removeItem('email')
      return <Redirect to='/' />
    }
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}
const mapStateToProps =(state)=>{
  return state.login
}
export default withRouter(connect(mapStateToProps)(ProtectComponents))
