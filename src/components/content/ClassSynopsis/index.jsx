import React, { Component } from 'react'
import axios from 'axios'
// import { classDetail } from '../../../redux/actions/classSynopsis'
// import store from '../../../redux/store'
// import PubSub from 'pubsub-js'
// import PubSub from 'pubsub-js'
// import ReactDOM from 'react-dom'

import './css/index.css'
export default class ClassSynopsis extends Component {

  state = {
    students: [],
    teachers: [],
    parents: []
  }

  componentDidMount() {
    // console.log(this.props);
    // const { classDetail } = this.props

    const id = this.props.id
    // axios.get(`http://localhost:3001/classes/${id}`, {
    //   // params:{id:id}
    // }).then(res => {
    //   console.log(res.data);
    //   this.setState({})
    // })
    // new Promise((resolve, reject) => {
    //   axios.get(`http://localhost:3001/classes/${id}/students`)
    //   resolve(data)
    // }).then(res => {
    //   console.log(res);
    // })
    axios.get(`http://localhost:3001/classes/${id}/students`).then(res => {
      // console.log(res.data);
      this.setState({ students: res.data })

    })



    // const { classDetail, parents, students, teachers, headmaster } = this.props
    // const data = { parents, students, teachers, headmaster }
    // classDetail(data)
  }
  showClassMenber = () => {
    // console.log(this.props);
    // const { classDetail, parents, students, teachers, headmaster } = this.props
    // const data = { parents, students, teachers, headmaster }
    // classDetail(data)

  }

  render() {
    // console.log(this.props);
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
