import React, { Component } from 'react'
import SignOnLogo from '../SignOnLogo'
import EnterLogininfo from '../EnterLogInInfo'
import OurSocialMedia from '../OurSocialMedia'
import './index.css'

class Home extends Component {
  render () {
    return (
      <div className='vh-100 bg-light'>
        <div className='bg-danger row heightAdjustment'>
          <h1 className='bg-dark col text-light pb-0 mb-0'> This is the Log-in page</h1>
        </div>
        <div className='bg-primary row heightAdjustment01'>
          <div className='col' />
          <div className='col' />
          <hr />
          <div className='col' />
          <div className='col' />
        </div>
        <div className='bg-danger row heightAdjustment02 '>
          <div className='col' />
          <div className='col' />
          <SignOnLogo />
          <div className='col' />
          <div className='col' />
        </div>
        <div className='bg-primary row heightAdjustment03'>
          <div className='col' />
          <div className='col' />
          <EnterLogininfo />
          <div className='col' />
          <div className='col' />
        </div>
        <div className='bg-primary row heightAdjustment04'>
          <div className='col' />
          <div className='col' />
          <OurSocialMedia />
          <div className='col' />
          <div className='col' />
        </div>
        <div className='bg-primary row heightAdjustment05'>
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
