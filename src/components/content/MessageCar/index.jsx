import React, { Component } from 'react'

import teacheravatar from "./img/teacher_avatar.png"

import './css/index.css'
export default class MessgeCar extends Component {
  render() {
    const { name } = this.props
    return (
      <div>
        {/* 科任老师 */}
        <div className="detail-message">
          <img src={teacheravatar} alt="" />
          <div className='teachename'><i>{name}</i></div>
          <div className='subjects-node'  >

            {
              this.props.adm ? <div className='admi'><i>管理员</i></div> : []
            }
            {
              this.props.subject === undefined ? [] : <div className='subjects'><i>{this.props.subject}</i></div>
            }

          </div>
          <div className='personal-profile' >{name}个人简介</div>
        </div>
      </div>
    )
  }
}
