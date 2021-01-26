import React, { Component } from 'react'
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'


import Class from '../../../page/Set/Class'
import Hello from '../../../page/Set/Hello'
// import Detail from '../../../page/Set/Class/'


import './css/contenter.css'

export default class Container extends Component {
  render() {
    return (
      <div>
        <div className="contenter-bar">
          {/* 左部导航栏 */}
          <div className="contenter-left-nav-bar">
            <div className="personal-center-bar">
              {/* 返回按钮 */}
              <button className="back"></button>
              <span className="personal-center">个人中心</span>
              <div className="personal-center-right"></div>
            </div>
            {/* 导航列表 */}
            <ul className='nav-ul' >
              <NavLink to='/hello1' > <li className='nav-list'><i className='home-bg-img'></i>其他内容</li> </NavLink>
              <NavLink to='/hello2' > <li className='nav-list'><i className='others-bg-img'></i>其他内容</li> </NavLink>
              <NavLink to='/class' > <li className='nav-list'><i className='class-bg-img'></i>我的班级</li> </NavLink>
              <NavLink to='/hello3' > <li className='nav-list'><i className='time-bg-img'></i>其他内容</li> </NavLink>
            </ul>
          </div>

          <div className="contenter-right-bar">
            <Switch>
              <Route path='/hello1' component={Hello} ></Route>
              <Route path='/hello2' component={Hello}></Route>
              <Route path='/class' component={Class}></Route>
              <Route path='/hello3' component={Hello}></Route>
              {/* <Route path='/class/detail/001' component={Detail}></Route> */}

              <Redirect to='/class'></Redirect>
            </Switch>

          </div>
        </div>
      </div>
    )
  }
}
