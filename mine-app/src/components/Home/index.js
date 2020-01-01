import React, { Component } from 'react'
import SignOnLogo from '../SignOnLogo'
import EnterLogininfo from '../EnterLogInInfo'
import OurSocialMedia from '../OurSocialMedia'
import CopyRightHolder from '../CopyRightHolder'
import './index.css'

class Home extends Component {
  render () {
    return (
      <div className='vh-100 bg-light'>
        <div className='bg-danger row heightAdjustment'>
          <h1 className='bg-dark col text-light pb-0 mb-0'> This is the Log-in page</h1>
        </div>
        <div className='bg-primary row heightAdjustment1'>
          <div className='col' />
          <div className='col' />
          <hr />
          <div className='col' />
          <div className='col' />
        </div>
        <div className='bg-danger row heightAdjustment2 '>
          <div className='col' />
          <div className='col' />
          <SignOnLogo />
          <div className='col' />
          <div className='col' />
        </div>
        <div className='bg-primary row heightAdjustment3'>
          <div className='col' />
          <div className='col' />
          <EnterLogininfo />
          <div className='col' />
          <div className='col' />
        </div>
        <div className='bg-primary row heightAdjustment4'>
          <div className='col' />
          <div className='col' />
          <OurSocialMedia />
          <div className='col' />
          <div className='col' />
        </div>
        <div className='bg-primary row heightAdjustment5'>
          <div className='col' />
          <div className='col' />
          <hr />
          <div className='col' />
          <div className='col' />
        </div>
      </div>
    )
  }
}
export default Home
