import React, { Component } from 'react'

import {withRouter} from 'react-router-dom'

import './css/index.css'
 class BackClassBtn extends Component {
   
  backlCass = () => {
    const { push } = this.props.history
    push('/class/detail')
  }
  
  render() {
    return (
      <div>
        <button className='back-myclass-btn' onClick={this.backlCass}>放回上一级</button>
      </div>
    )
  }
}

export default withRouter(BackClassBtn)