import React, { Component } from 'react'

import SearchTeacher from '../../../../../components/content/SearchTeacher'
import MessageCar from '../../../../../components/content/MessageCar'

// import './css/index.css'

export default class Teachers extends Component {
  render() {
    return (
      <div>
        {/* 班级信息 */}
        <div className='class-detail-message' >

          {/* 科任老师筛选组件 */}
          <SearchTeacher></SearchTeacher>

          {/* 科任老师 */}
          <MessageCar></MessageCar>
          <MessageCar></MessageCar>
          <MessageCar></MessageCar>
          <MessageCar></MessageCar>
          <MessageCar></MessageCar>
          <MessageCar></MessageCar>
          <MessageCar></MessageCar>
          
        </div>

      </div>
    )
  }
}
