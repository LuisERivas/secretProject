import React, { Component } from 'react'
import DashboardChart from '../DashboardChart'

class Dashboard extends Component {
  render () {
    return (
      <div className='bg-danger'>
        <h1> DashBoard </h1>
        <DashboardChart className='col' />
        <DashboardChart className='col' />
        <DashboardChart className='col' />
      </div>
    )
  }
}
export default Dashboard
