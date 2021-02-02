import React, { Component } from 'react'

import { nanoid } from 'nanoid'
// import axios from 'axios'

// import store from '../../../../../redux/store'
import PubSub from 'pubsub-js'
// import PubSub from 'pubsub-js'

import SearchTeacher from '../../../../../components/content/SearchTeacher'
import MessageCar from '../../../../../components/content/MessageCar'

// import './css/index.css'

export default class Teachers extends Component {

  state = {
    teachers: [],
    classes: []
  }

  componentDidMount() {
    this.token = PubSub.subscribe('pubTeachers', (_, data) => {
      this.setState({ teachers: data })
    })
    this.token2 = PubSub.subscribe('chooceCourse', (_, data) => {
      const teachersARR = this.props.classMember.teachers.filter(array => JSON.stringify(array).indexOf(data) > -1)
      this.setState({ teachers: teachersARR })
    })

  }

  componentWillUnmount() {
    // console.log('dasdsadsa');
    PubSub.unsubscribe(this.token)
    PubSub.unsubscribe(this.token2)
  }

  render() {

    const { classes: { headmaster }, teachers } = this.state
    return (
      <div>
        {/* 班级信息 */}
        <div className='class-detail-message' >

          {/* 科任老师筛选组件 */}
          <SearchTeacher headmaster={headmaster} ></SearchTeacher>

          {/* 科任老师 */}
          {
            teachers.map((teacherobj) => {
              return <MessageCar key={nanoid()}  {...teacherobj} ></MessageCar>
            })
          }
        </div>
      </div>
    )
  }
}
