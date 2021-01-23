import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'
import './button.css'
class Button extends Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <button className='my-btn'>{children}</button>
      </div>
    )
  }
}
export default Button