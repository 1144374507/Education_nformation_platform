import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import PubSub from 'pubsub-js'


import MessageCar from '../../../../../components/content/MessageCar'

export default class parents extends Component {

  state = {
    parents: []
  }
  //订阅 
  componentDidMount() {
    this.token = PubSub.subscribe('pubParents', (_, data) => {
      this.setState({ parents: data })
    })
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token)//取消订阅
  }

  render() {
    const { parents } = this.state
    return (
      <div className='class-detail-message'>
        {
          parents.map((parentsobj) => {
            return <MessageCar key={nanoid()}  {...parentsobj} ></MessageCar>
          })
        }
      </div>
    )
  }
}
