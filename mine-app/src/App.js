import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import SiteNavbar from './components/SiteNavbar'
import Dashboard from './components/Dashboard'
import Workspace from './components/Workspace'
import CurrentCampaignsPage from './components/CurrentCampaignsPage'

function App () {
  return (
    <div className='App'>
      <Router>
        <SiteNavbar className='' />
        <Workspace className=''>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route exact path='/Dashboard' component={Dashboard} />
            <Route exact path='/CurrentCampaignsPage' component={CurrentCampaignsPage} />
          </Switch>
        </Workspace>

      </Router>
    </div>
  )
}

export default App
