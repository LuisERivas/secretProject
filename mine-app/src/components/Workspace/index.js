import React, { Component } from 'react'
import './index.css'
import Dashboard from '../Dashboard'
import {
  Switch,
  Route
} from 'react-router-dom'
import Home from '../Home'

class Workspace extends Component {
  render () {
    return (
      <div className='container-fluid bg-primary heightTest'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route exact path='/Dashboard' component={Dashboard} />
        </Switch>
      </div>
    )
  }
}

export default Workspace
