import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Home from './components/Home'
import SiteNavbar from './components/SiteNavbar'
import Dashboard from './components/Dashboard'

function App () {
  return (
    <div className='App'>
      <Router>
        <SiteNavbar />
        <Switch>

          <Route path='/' exact component={Home} />
          <Route exact path='/Dashboard' component={Dashboard} />

        </Switch>
      </Router>
    </div>
  )
}

export default App
