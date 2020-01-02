import React, { Component } from 'react'
import './index.css'

class CurrentCampaignsPage extends Component {
  render () {
    return (
      <div className=' bg-danger vh-100 row'>
        <div className='col '>
          <div className='row heightAdjustment'>
            {/* Page Title */}
            <div className=' bg-dark text-light col ml-3 mr-3'>
              <h1> Current campaigns page</h1>
            </div>
          </div>
          {/* Row 2 that holds current campaign information */}
          <div className='row heightAdjustment1'>
            {/* Most important campaign Chart */}
            <div className='col-8 bg-primary ml-3'>
                current campaign chart
            </div>
            {/* Current campaign statistics  */}
            <div className='col bg-light mr-3'>
                current campaign Stats
            </div>
          </div>
          {/* Row 3 that holds current campaign information */}
          <div className='row heightAdjustment2'>
            {/* Most important campaign Chart */}
            <div className='col-3 bg-dark ml-3 text-light'>
                Suggested campaigns
            </div>
            {/* Current campaign statistics  */}
            <div className='col bg-primary'>
                Past Campaigns
            </div>
            {/* Current campaign statistics  */}
            <div className='col bg-dark mr-3 text-light'>
                Running total of revenue from Campaigns
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default CurrentCampaignsPage
