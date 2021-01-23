import React, { Component } from 'react'
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'

import Home from '../page/Home/Home'
import About from '../page/About/About'

import './content.css'

class Content extends Component {
  render() {
    return (
      <div className='content'>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Redirect to='/home' />
        </Switch>

      </div>
    )
  }
}
export default withRouter(Content)