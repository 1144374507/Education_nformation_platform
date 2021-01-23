import React, { Component } from 'react'
import {  withRouter, Link } from 'react-router-dom'

import Button from '../commom/Button/Button'
class NavBar extends Component {
  render() {
    return (
      <div>
        <Link to='/home'><Button  >Home</Button> </Link>
        <Link to='/about'><Button  >About</Button> </Link>
        
      </div>
    )
  }
}
export default withRouter(NavBar)
