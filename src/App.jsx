
import React, { Component } from 'react'

import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Content from './components/Content/Content'


import './app.css'
export default class App extends Component {





  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className='left-nav-bar'>
          <NavBar></NavBar>
          <Content></Content>
        </div>
      </div>
    );
  }
}

