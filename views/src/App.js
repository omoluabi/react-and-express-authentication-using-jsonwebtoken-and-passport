import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import ProtectComponents from './ProtectComponents'
import Home from './Home'
import Login from './Login'

class App extends Component{
  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' component={Login} />
          <ProtectComponents>
            <Route path='/home' component={Home} />
          </ProtectComponents>
        </Switch>
      </div>
    )
  }
}

export default App
