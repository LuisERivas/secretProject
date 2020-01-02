import React, { Component } from 'react'
import './index.css'
import Dashboard from '../Dashboard'
import {
  Switch,
  Route
} from 'react-router-dom'
import Home from '../Home'
import CurrentCampaignsPage from '../CurrentCampaignsPage'

class Workspace extends Component {
  render () {
    return (
      <div className='container-fluid bg-primary heightTest p-0'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route exact path='/Dashboard' component={Dashboard} />
          <Route exact path='/CurrentCampaignsPage' component={CurrentCampaignsPage} />
        </Switch>
      </div>
    )
  }
}

export default Workspace
