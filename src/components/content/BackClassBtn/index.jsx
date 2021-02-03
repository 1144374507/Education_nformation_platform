import React, { PureComponent } from 'react'

import {withRouter} from 'react-router-dom'

import './css/index.css'
 class BackClassBtn extends PureComponent {
   
  backlCass = () => {
    const { push } = this.props.history
    push('/class')
  }
  
  render() {
    return (
      <div>
        <button className='back-myclass-btn' onClick={this.backlCass}>返回上一级</button>
      </div>
    )
  }
}

export default withRouter(BackClassBtn)