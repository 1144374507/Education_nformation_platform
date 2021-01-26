import React, { Component } from 'react'

import './css/header.css'
import logo from './img/logo.png'
import userAvatar from './img/avatar/avatar_normal.png'

export default class Header extends Component {
  
  render() {
    return (
      // 头部导航条
      <div className="header-bar">
        {/* logo */}
        <div className="logo">
          <img src={logo} alt="Education" />
          <div className='title'>
          </div>
        </div>
        {/* 路由链接容器 */}
        <div className="route-link-bar">
          {/* 网教通按钮 */}
          <div className='wjt-link'>
            <a className="route-link" href="/#">网教通</a>
          </div>
          {/* 路由按钮 */}
          <div className="route-link-div" >
            <a className="route-link" href="/#">首页</a>
            <a className="route-link" href="/#" style={{color:'#3ba8f0'}}>教学管理</a>
            <a className="route-link" href="/#">学习</a>
            <a className="route-link" href="/#">资源超市</a>
            <a className="route-link" href="/#">教育应用</a>
            <a className="route-link" href="/#">新闻</a>
            <a className="route-link" href="/#">名师名校</a>
          </div>
          {/* 搜索按钮 */}
          <div className='header-serch-bar'>
            <a className="new-bg" href="/#">新功能</a>
            <a className='header-serch' href="/#"> </a>
          </div>
        </div>
        {/* 用户登录 */}
        <div className="user-bar">
            <div className='user-avatar'>
              <img src={userAvatar} alt="userAvatar" />
            </div> 
            <span className='user-name'>Coco</span>
        </div>
      
      </div>
      
    
    )
  }
}
