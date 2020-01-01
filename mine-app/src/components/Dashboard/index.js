import React, { Component } from 'react'
import DashboardChart from '../DashboardChart'
import './index.css'

class Dashboard extends Component {
  render () {
    return (
      <div className='bg-danger vh-100 '>
        <h1 className='col'> DashBoard </h1>
        <div className='row h-50'>
          {/* Current campaigns (decending BarChart) */}
          <DashboardChart className='' />
          {/* Product percentage of sales breakdown (line chart) */}
          <DashboardChart className='' />
          {/* Current issues */}
          {/* <DashboardChart className='' /> */}
        </div>
        <div className='row '>
          <hr />
        </div>
        <div className='row h-25'>
          {/* Latest reviews */}
          <DashboardChart className='' />
          {/* SEO rank (line chart showing growth) */}
          <DashboardChart className='' />
          {/* Budget Adjuster */}
          <DashboardChart className='' />
        </div>
        <div className='row '>
          <hr />
        </div>
        <div className=' row'>
          {/* Social Media */}
          <DashboardChart className='' />
        </div>
      </div>
    )
  }
}
export default Dashboard
