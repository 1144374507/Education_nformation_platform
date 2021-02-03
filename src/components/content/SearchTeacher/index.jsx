import React, { PureComponent } from 'react'
import PubSub from 'pubsub-js'

import './css/index.css'

export default class SearchTeacher extends PureComponent {

  chooceCourse = (e) => {
    PubSub.publish('chooceCourse', e.target.innerText)
  }


  render() {
    const { chooceCourse } = this
    return (
      <div>
        {/* 科任老师筛选框 */}
        <div className="detail-message-nav ">
          <span className='headmaster' onClick={chooceCourse}>班主任</span>
          <span onClick={chooceCourse}>生物老师</span>
          <span onClick={chooceCourse}>数学   </span>
          <span onClick={chooceCourse}>信息与技术</span>
          <span onClick={chooceCourse}>数学</span>
          <span onClick={chooceCourse}>体育</span>
          <span onClick={chooceCourse}>英语</span>
          <span onClick={chooceCourse}>物理</span>
          <span onClick={chooceCourse}>信息与技术</span>
          {/* <div className='teachename'><i>{headmaster}</i></div> */}
        </div>
      </div>
    )
  }
}
