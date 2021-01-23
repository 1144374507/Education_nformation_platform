import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import MessageDilt from './MessageDilt/MessageDilt'

export default class Message extends Component {
  state = {
    message: [
      { id: 1, tittle: 'message1', message: '你好呀，中国' },
      { id: 2, tittle: 'message2', message: '你好呀，蔡徐坤' },
      { id: 3, tittle: 'message3', message: '你好呀，罗志祥' },
    ]
  }
  render() {
    const { message } = this.state
    return (
      <div>
        <ul className='home-item-list'>
          {
            message.map((messageObj) => {
              return (
                <li key={messageObj.id} >
                  {/* 向路由组件传递params参数 */}
                  {/* <Link replace={true} to={`/home/message/messagedilt/${messageObj.id}`}> {messageObj.tittle}</Link> */}

                  {/* 向路由组件传递search参数 */}
                  {/* <Link replace to={`/home/message/messagedilt/?id=${messageObj.id}&tittle=${messageObj.tittle}`}> {messageObj.tittle}</Link> */}

                  {/* 向路由组件传递state参数 */}
                  <Link replace to={{ pathname: '/home/message/messagedilt', state: { id: messageObj.id, tittle: messageObj.tittle } }} > {messageObj.tittle}</Link>
                </li>
              )
            })
          }
        </ul>

        {/* 声明接收params参数 */}
        {/* <Route path={`/home/message/messagedilt/:id`} component={MessageDilt} ></Route> */}

        <Switch>

          {/* search参数无需声明接收，正常注册路由即可 */}
          {/* state参数无需声明接收，正常注册路由即可 */}
          <Route path='/home/message/messagedilt' component={MessageDilt} ></Route>
        </Switch>
      </div>
    )
  }
}
