import React, { Component } from 'react'
// import qs from 'query-string'
import './messagedilt.css'

export default class MessageDilt extends Component {

  state = {
    message: [
      { id: 1, tittle: 'message1', message: '你好呀，中国' },
      { id: 2, tittle: 'message2', message: '你好呀，蔡徐坤' },
      { id: 3, tittle: 'message3', message: '你好呀，罗志祥' },
    ]
  }

  render() {
		// 接收params参数
    // const { id } = this.props.match.params

		// 接收search参数
    // const { search } = this.props.location
    // const { id } = qs.parse(search)

		// 接收state参数
    const { id } = this.props.location.state||{}




    const { message } = this.state

    const newMessage = message.find((messageObj) => {
      return messageObj.id === Number(id)
    })||{}
    return (
      <div>
        <hr />
        <ul className='show-message'>
          <li>id:{newMessage.id}</li>
          <li>tittle:{newMessage.tittle}</li>
          <li>message:{newMessage.message}</li>
        </ul>
      </div>
    )
  }
}
