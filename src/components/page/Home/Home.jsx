import React, { Component } from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'

import Button from '../../commom/Button/Button'
import Message from './Message/Message'
import News from './News/News'

import './home.css'

export default class Home extends Component {

  goFor = () => {
    console.log(this);
    const { goForward } = this.props.history
    goForward()
  }
  goBack = () => {
    console.log(this);
    const { goBack } = this.props.history
    goBack()
  }
  render() {
    return (
      <div className='content-home'>
        <h2 className='about-h2'>Home组件内容</h2>

        <hr />

        <div className='clear'>
          <Link className='home-item-route' to='/home/news'><Button>news</Button></Link>
          <Link className='home-item-route' to='/home/message'><Button>message</Button></Link>
        </div>

        <hr />
        <Switch>
          <Route path='/home/news' component={News}></Route>
          <Route path='/home/message' component={Message}></Route>
          <Redirect to='/home/news' />
        </Switch>

        <hr />
        <button onClick={this.goFor}>前进</button>
        <button onClick={this.goBack}>后退</button>
      </div>
    )
  }
}
