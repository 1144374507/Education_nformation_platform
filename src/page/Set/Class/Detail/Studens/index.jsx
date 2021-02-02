import React, { Component } from 'react'
import { nanoid } from 'nanoid'

import PubSub from 'pubsub-js'

import MessageCar from '../../../../../components/content/MessageCar'


export default class Studens extends Component {

  state = {
    students: []
  }

  componentDidMount() {
    this.token = PubSub.subscribe('pubStudents', (_, data) => {
      this.setState({ students: data })
    })
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

  render() {
    const { students } = this.state
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
