import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import ClassSynopsis from '../../../components/content/ClassSynopsis'
import Detail from './Detail'
import Create from './Create'


import './css/index.css'

export default class MyClass extends Component {


  state = {
    classes: [
      { id: '001', session: '高中-2013级', classes: '三年二班', headmaster: '田小雨', studCount: 31 },
      { id: '002', session: '高中-2014级', classes: '三年二班', headmaster: '田小雨', studCount: 33 },
      { id: '003', session: '高中-2015级', classes: '三年二班', headmaster: '田小雨', studCount: 34 },
      { id: '004', session: '高中-2016级', classes: '三年二班', headmaster: '田小雨', studCount: 35 },
    ]
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
          <Link to='/class/create' ><button  className='creat-class'>创建班级</button></Link>
          {/* <button className='join-class'>加入班级</button> */}
        </div>
        <div className="class-totall-bar">
          <h3>行政班是为学生管理和教学管理而建设的班级</h3>


          <div className="class-bar">
            {
              classes.map((classesObj) => {
                return (
                  <Link to={`/class/detail/${classesObj.id}`} key={classesObj.id}  >
                    < ClassSynopsis  {...classesObj} />
                  </Link>
                )
              })

            }
          </div>

          <h3>教学班是根据教学要求而设置的班级</h3>
          <div className="class-bar">
            {
              classes.map((classesObj) => {
                return (
                  <Link to={`/class/detail/${classesObj.id}`} key={classesObj.id}  >
                    < ClassSynopsis  {...classesObj} />
                  </Link>
                )
              })

            }

          </div>
        </div>
        <Switch>
          <Route path='/class/create' component={Create}></Route>
          <Route path={`/class/detail/:id`} component={Detail}></Route>
        </Switch>
      </div>
    )
  }
}
