import React, { Component } from 'react'
import { request } from '../../../network/request'
import './css/index.css'
export default class ClassSynopsis extends Component {

  state = {
    students: [],
    teachers: [],
    parents: []
  }

  componentDidMount() {

    const id = this.props.id
    request({
      method: 'GET',
      url: `/classes/${id}/students`,
    }).then(res => {
      this.setState({ students: res })
    })
  }

  render() {
    const { students } = this.state
    const { section, grade, headmaster, classType } = this.props
    return (
      <div onClick={this.showClassMenber} className="class-details">
        <div className='course-logo'></div>
        <div className="class-detail">
          <p>{section}</p>
          <p><i>年级：</i><span>{grade}</span></p>
          <p><i>班主任：</i><span style={{ fontWeight: 'bold' }}>{headmaster}</span></p>
          <p><i>学生：</i><span>{students.length || 0}人</span></p>
        </div>
        <button className='class-details-btn'>{classType}</button>

      </div>
    )
  }
}
