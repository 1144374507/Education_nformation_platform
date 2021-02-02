import React, { Component } from 'react'

import {
  addClass,
  deleClass,
} from '../../../func/toggleClass'
import './css/index.css'

export default class SingbieBox extends Component {

  // 单选框点击回调
  // 判断元素是否被点击，是则改变classnanme
  singleBoxFocus = (index, arr) => {
    const { props: { singleBoxName, singleBoxFocusValue } } = this
    return () => {
      arr.map((value, index1) => {

        if (index1 === index) {
          const data = { [singleBoxName]: value }
          singleBoxFocusValue(data)
          return addClass(this[index1], 'single-box-foucs')
        } else {
          return deleClass(this[index1], 'single-box-foucs')
        }
      })
    }
  }

  render() {
    const date = this.props.data
    return (
      <div className="single-box">
        {
          date.map((value, index, arr) => {
            return <div onClick={this.singleBoxFocus(index, arr)} ref={e => this[index] = e} key={index}  ><span></span><a onClick={event => event.preventDefault()} href='/#'>{value}</a></div>
          })
        }

      </div>
    )
  }
}
