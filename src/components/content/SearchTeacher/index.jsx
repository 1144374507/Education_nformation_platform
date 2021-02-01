import React, { Component } from 'react'


import './css/index.css'

export default class SearchTeacher extends Component {
  render() {
    // console.log(this.props);
    const {props:{headmaster}} = this
    return (
      <div>
        {/* 科任老师筛选框 */}
        <div className="detail-message-nav ">
          <span className='headmaster'>班主任</span>
          <span>生物老师</span>
          <span>语文</span>
          <span>信息与技术</span>
          <span>班主</span>
          <span>班主</span>
          <span>班主</span>
          <span>语文</span>
          <span>信息与技术</span>
          <div className='teachename'><i>{headmaster}</i></div>
        </div>
      </div>
    )
  }
}
