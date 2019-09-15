import React, {Component} from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import Posts from './Posts'
import Profile from './Profile'
import Logout from './Logout'

class Home extends Component{
  render(){
    const {path, url} = this.props.match
    return(
      <div>
          <ul>
            <li><Link to={`${url}/posts`}>Posts</Link></li>
            <li><Link to={`${url}/profile`}>Profile</Link></li>
            <li><Link to={`${url}/logout`}>Logout</Link></li>
          </ul>
          <Switch>
            <Route path={`${path}/posts`} component={Posts} />
            <Route path={`${path}/profile`} component={Profile} />
            <Route path={`${path}/logout`} component={Logout} />
          </Switch>
      </div>
    )
  }
}

export default Home
