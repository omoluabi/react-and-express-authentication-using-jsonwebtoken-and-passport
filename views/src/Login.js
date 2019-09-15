import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginUser} from './action'

class Login extends Component{
  constructor(){
    super()
    this.state = {email:null, password:null}
  }
  handleChange = e =>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  handleSubmit = e =>{
    e.preventDefault()
    this.props.loginUser(this.state)
  }
  render(){
    if (this.props.status && this.props.token) {
      return <Redirect to='/home' />
    }
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          Email:<input type='email' id='email' onChange={this.handleChange} />
          Password:<input type='password' id='password' onChange={this.handleChange} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps =(state)=>{
  return state.login
}

export default connect(mapStateToProps, {loginUser})(Login)
