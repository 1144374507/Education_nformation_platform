import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import PubSub from 'pubsub-js'
// import axios from 'axios'

import { request } from '../../../network/request'
import ClassSynopsis from '../../../components/content/ClassSynopsis'
import Detail from '../../../page/Set/Class/Detail'
import Create from '../../../containers/Create'


import './css/index.css'

export default class MyClass extends Component {


  state = {
    classes: []
  }
  // 组件加载完成
  componentDidMount() {

    // 订阅创建班级表单提交
    this.createClassToken = PubSub.subscribe('createClass', (a, data) => {

      const { section, grade, headmaster, classType } = data

      // 向数据库添加一条数据
      request({
        method: 'POST',
        url: '/classes',
        data: {
          section,
          grade,
          headmaster,
          classType
        }
      }).then(res => {
        console.log(res);
        // 获取新的数据 刷新页面
        this.getClassse()
      }).catch(err => console.log(err))

    })

    // 获取classes数据
    this.getClassse()

  }

  // 组件将要卸载
  componentWillUnmount() {
    // 取消订阅
    PubSub.unsubscribe(this.createClassToken)
  }

  // 二次封装axios
  getClassse = () => {
    request({
      method: 'GET',
      url: '/classes'
    }).then(res => {
      // console.log(res);
      this.setState({ classes: res })
    }).catch(err => { console.log(err); })
  }



  render() {
    // console.log(this);

    const { classes } = this.state

    return (
      <div>
        {/* 顶部导航 */}
        <div className="contenter-top-nav-bar">
          <div className="route-title">
            <h2 >我的班级</h2>
          </div>
          <Link to='/class/create' ><button className='creat-class'>创建班级</button></Link>
          {/* <button className='join-class'>加入班级</button> */}
        </div>
        <div className="class-totall-bar">
          <h3>行政班是为学生管理和教学管理而建设的班级</h3>


          <div className="class-bar">
            {

              classes.map((classesObj) => {
                if (classesObj.classType === '行政班') {
                  return (<Link to={`/class/${classesObj.id}`} key={classesObj.id}  >
                    < ClassSynopsis  {...classesObj} />
                  </Link>)
                } else {
                  return []
                }


              })

            }
          </div>

          <h3>教学班是根据教学要求而设置的班级</h3>
          <div className="class-bar">
            {
              classes.map((classesObj) => {
                if (classesObj.classType === '教学班') {
                  // console.log(classesObj.id);
                  return (<Link to={`/class/${classesObj.id}`} key={classesObj.id}  >
                    < ClassSynopsis  {...classesObj} />
                  </Link>)
                } else {
                  return []
                }
              })

            }

          </div>
        </div>
        <Switch>
          <Route path='/class/create' component={Create}></Route>
          <Route path={`/class/:id`} component={Detail}></Route>
        </Switch>
      </div>
    )
  }
}
