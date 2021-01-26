import React, { Component } from 'react'

import BackClassBtn from '../../../../components/content/BackClassBtn'


export default class CreateClass extends Component {
  render() {
    return (
      <div>
        <div className='class-detail-totabar'>
          {/* 顶部导航 */}
          <div className="contenter-top-nav-bar">
            <div className="route-title">
              <h2 >我的班级</h2>
            </div>
            {/* <button className='creat-class'>创建班级</button> */}
            <BackClassBtn/>
          </div>
        </div>
      </div>
    )
  }
}
