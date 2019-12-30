import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './index.css'

class SiteNavbar extends Component {
  render () {
    return (
      <Navbar className='bg-light float-left heightTest'>
        <div className='col bg-primary inheritedHeight' >
          {/*  Company Logo Section */}
          <div className='row bg-primary testingsomething'>
            <Navbar.Brand className='col'>
                    Company Name/Logo
            </Navbar.Brand>
          </div>
          {/*  Links Section */}
          <div className='row bg-light testingsomething2'>
            <container className='col m-0 p-0'>
              <container className='row m-auto inheritedHeight2'>
                <Nav.Link className='bg-dark d-block m-auto '>
                  <Link className='' to='/Dashboard'> Dashboard </Link>
                </Nav.Link>
              </container>
              <container className='row m-auto inheritedHeight2'>
                <Nav.Link className='bg-dark m-auto  '>
                  <Link className='' to=''> Deep Data </Link>
                </Nav.Link>
              </container>
              <container className='row  m-auto inheritedHeight2'>
                <Nav.Link className='bg-dark m-auto'>
                  <Link className='' to=''> Your Business </Link>
                </Nav.Link>
              </container>
              <container className='row m-auto inheritedHeight2'>
                <Nav.Link className='bg-dark m-auto'>
                  <Link className='' to=''> Your Team </Link>
                </Nav.Link>
              </container>
              <container className='row m-auto inheritedHeight2'>
                <Nav.Link className='bg-dark m-auto'>
                  <Link className='' to=''> Current Campaigns</Link>
                </Nav.Link>
              </container>
            </container>
          </div>
          {/*  Social Media section */}
          <container className='row d-block testingsomething'>
            <container className='col bg-danger inheritedHeight p-0'>
              <container className='row h-100'>
                <Nav.Link className=' bg-dark mb-0 mt-auto ml-auto mr-auto'>
                  <Link className='' to=''> Social Media</Link>
                </Nav.Link>
              </container>
            </container>
          </container>
        </div>
      </Navbar>
    )
  }
}
export default SiteNavbar
