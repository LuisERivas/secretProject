import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './index.css'

class SiteNavbar extends Component {
  render () {
    return (
      <Navbar className='bg-danger float-left heightTest'>
        <container className='col bg-primary d-block inheritedHeight' >
          {/*  Company Logo Section */}
          <container className='row bg-primary d-block testingsomething'>
            <Navbar.Brand className='col'>
                    Company Name/Logo
            </Navbar.Brand>
          </container>
          {/*  Links Section */}
          <container className='row bg-light d-block testingsomething2'>
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
          </container>
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
        </container>
      </Navbar>
    )
  }
}
export default SiteNavbar
