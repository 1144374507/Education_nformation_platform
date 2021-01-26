import React, { Component } from 'react'
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'

import BackClassBtn from '../../../../components/content/BackClassBtn'
// import ClassSynopsis from '../../../../components/content/ClassSynopsis'
import Teachers from './Teachers'
import Studens from './Studens'
import Parents from './Parents'

import './css/index.css'
export default class ClassDetail extends Component {
  
  
  
  
  
  
  render() {
    // console.log(this);
    return (
      <div className='class-detail-totabar'>
        {/* 顶部导航 */}
        <div className="contenter-top-nav-bar">
          <div className="route-title">
            <h2 >我的班级</h2>
          </div>
          
          <BackClassBtn></BackClassBtn>

        </div>
        {/* 班级信息搜索框 */}
        <div className="class-metail-search-bar">
          <h3>兴趣折纸班</h3>
          <div className='class-metail-search'>
            <input type="text" name="" id="" placeholder='快捷查找' /><button></button>
          </div>
        </div>
        {/* 班级详细信息容器 */}
        <div className="class-detail-bar">
          {/* 班级详细信息导航栏 */}
          {/* activeClassName="class-detail-li-active" */}
          <ul className="class-detail-nav-bar">
            <NavLink to={`/class/detail/${this.props.match.params.id}/teacher`} activeClassName="class-detail-li-active"> <li>所有老师 ( 12 )</li></NavLink>
            <NavLink to={`/class/detail/${this.props.match.params.id}/studens`} activeClassName="class-detail-li-active"><li>所有学生 ( 10 )</li></NavLink>
            <NavLink to={`/class/detail/${this.props.match.params.id}/parents`} activeClassName="class-detail-li-active"> <li>所有家长 ( 10 )</li></NavLink>

          </ul>
          <Switch>
            <Route path={`/class/detail/:id/teacher`} component={Teachers}></Route>
            <Route path={`/class/detail/:id/studens`} component={Studens}></Route>
            <Route path={`/class/detail/:id/parents`} component={Parents}></Route>
            <Redirect to={`/class/detail/${this.props.match.params.id}/teacher`} />
          </Switch>
        </div>
      </div>
    )
  }
}
