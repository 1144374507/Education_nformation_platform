import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import axios from 'axios'

import MessageCar from '../../../../../components/content/MessageCar'


export default class Studens extends Component {

  state = {
    students: []
  }

  componentDidMount() {
    console.log(this);
    const { id } = this.props.match.params
    axios.get(`http://localhost:3001/classes/${id}/students`).then(res => {
      // console.log(res.data);
      this.setState({ students: res.data })

    })
  }

  render() {
    const { students } = this.state
    // const { students } = this.props.classDetail
    // console.log(this.props);
    return (
      <div className='class-detail-message'>
        {
          students.map((studentsobj) => {
            return <MessageCar key={nanoid()}  {...studentsobj} ></MessageCar>
          })
        }

      </div>
    )
  }
}
