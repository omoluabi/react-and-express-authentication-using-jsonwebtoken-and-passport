import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchProfile} from './action'

class Profile extends Component{
  UNSAFE_componentWillMount(){
    this.props.fetchProfile(localStorage.getItem('email'))
  }
  render(){
    return(
      <div>
        <h2>PROFILE</h2>
        {this.props.profile.map(({email,status}, key)=>(
          <ul key={key}>
            <li>Email: {email}</li>
            <li>Status: {status}</li>
          </ul>
        ))}
      </div>
    )
  }
}

const mapStateToProps =(state)=>{
  return state.profile
}

export default connect(mapStateToProps, {fetchProfile})(Profile)
