import React, { PureComponent } from 'react'
import { nanoid } from 'nanoid'
import PubSub from 'pubsub-js'


import MessageCar from '../../../../../components/content/MessageCar'

export default class parents extends PureComponent {

  state = {
    parents: [],
    hasError: ''
  }

  //当子组件出现报错时候，会触发getDerivedStateFromError调用，并携带错误信息
  static getDerivedStateFromError(error) {
    return { hasError: error }
  }

  componentDidCatch() {
    console.log('此处统计错误，反馈给服务器，用于通知编码人员进行bug的解决');
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
          parents.map(parentsobj =>
            this.state.hasError ? <h2>当前网络不稳定，稍后再试</h2> : <MessageCar key={nanoid()}  {...parentsobj} ></MessageCar>
          )
        }
      </div>
    )
  }
}
