import React, { Component } from 'react'

import teacheravatar from "./img/teacher_avatar.png"

import './css/index.css'
export default class MessgeCar extends Component {
  render() {
    return (
      <div>
        {/* 科任老师 */}
        <div className="detail-message">
          <img src={teacheravatar} alt="" />
          <div className='teachename'><i>柳云</i></div>
          <div className='subjects-node'  >
            <div className='admi'><i>管理员</i></div>
            <div className='subjects'><i>英语老师</i></div>
          </div>
        </div>
      </div>
    )
  }
}
