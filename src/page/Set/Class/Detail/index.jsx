import React, { Component } from 'react'
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'

import BackClassBtn from '../../../../components/content/BackClassBtn'
// import ClassSynopsis from '../../../../components/content/ClassSynopsis'
import Teachers from '../../../../page/Set/Class/Detail/Teachers'
import Studens from '../../../../page/Set/Class/Detail/Studens'
import Parents from '../../../../page/Set/Class/Detail/Parents'

// import store from '../../../../redux/store'
// import { putClassMember } from '../../../../redux/actions/classSynopsis'

import './css/index.css'
export default class ClassDetail extends Component {

  state = {
    students: [],
    teachers: [],
    parents: []
  }

  componentDidMount() {

    // console.log(this.props.putClassMember);

    const { id } = this.props.match.params
    axios.get(`http://localhost:3001/classes/${id}/students`).then(res => {
      // console.log(res.data);
      this.setState({ students: res.data })
      axios.get(`http://localhost:3001/classes/${id}/teachers`).then(res => {
        // console.log(res.data);
        this.setState({ teachers: res.data })
        axios.get(`http://localhost:3001/classes/${id}/parents`).then(res => {
          // console.log(res.data);
          this.setState({ parents: res.data })

        })
      })
    })
  }

  render() {

    // console.log(this.props);
    const { parents, teachers, students } = this.state
    const { id } = this.props.match.params
    // console.log(id);
    // console.log(this.props.match);
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
            <NavLink to={`/class/${id}/teacher`} activeClassName="class-detail-li-active"> <li>所有老师 ({teachers.length} )</li></NavLink>
            <NavLink to={`/class/${id}/studens`} activeClassName="class-detail-li-active"><li>所有学生 ({students.length} )</li></NavLink>
            <NavLink to={`/class/${id}/parents`} activeClassName="class-detail-li-active"> <li>所有家长 ( {parents.length} )</li></NavLink>

          </ul>
          <Switch>
            <Route path={`/class/:id/teacher`} component={Teachers} ></Route>
            <Route path={`/class/:id/studens`} component={Studens}></Route>
            <Route path={`/class/:id/parents`} component={Parents}></Route>
            <Redirect to={`/class/${id}/teacher`} />
          </Switch>
        </div>
      </div>
    )
  }
}
