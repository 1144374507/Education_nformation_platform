import React, { PureComponent, lazy, Suspense } from 'react'
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'
import PubSub from 'pubsub-js'

import { request } from '../../../../network/request'

import BackClassBtn from '../../../../components/content/BackClassBtn'
import './css/index.css'

// 路由懒加载
import Loading from '../../../Loading'
const Teachers = lazy(() => import('../../../../containers/Detail/Teachers'))
const Studens = lazy(() => import('../../../../page/Set/Class/Detail/Studens'))
const Parents = lazy(() => import('../../../../page/Set/Class/Detail/Parents'))
export default class ClassDetail extends PureComponent {

  state = {
    students: [],
    teachers: [],
    parents: []
  }

  componentDidMount() {
    const {
      props: { match: { params: { id } }, putClassMember },
    } = this

    // axios异步数据请求
    request({
      method: 'GET',
      url: `/classes/${id}/students`
    }).then(res => {
      this.setState({ students: res })
      putClassMember({ students: res })
      request({
        method: 'GET',
        url: `/classes/${id}/teachers`
      }).then(res => {
        this.setState({ teachers: res })
        putClassMember({ teachers: res })
        request({
          method: 'GET',
          url: `/classes/${id}/parents`
        }).then(res => {
          putClassMember({ parents: res })
          this.setState({ parents: res }, () => {
            this.putMessageClick()
          })
        })
      })
    }).catch(err => { console.log(err) })
  }


  // 模糊搜索的回调
  putMessageClick = () => {
    const {
      state: {
        parents,
        students,
        teachers
      }
    } = this

    setTimeout(() => {
      PubSub.publish('pubParents', parents)
      PubSub.publish('pubStudents', students)
      PubSub.publish('pubTeachers', teachers)
    }, 100);

  }

  // 搜索按钮点击回调
  searchBtnClick = () => {
    const {
      props: {
        classMember: { students, parents, teachers }
      },
      fuzzysearch
    } = this

    fuzzysearch("pubTeachers", teachers, 'teachers')
    fuzzysearch("pubStudents", students, 'students')
    fuzzysearch("pubParents", parents, 'parents')
  }

  // 模糊搜索、全拼和首写函数
  fuzzysearch = (putStr, array, arrayStr) => {
    const Arr = array.filter(obj => JSON.stringify(obj).indexOf(this.serachInpt.value) > -1) ||
      array.filter((obj) => {
        const reg = new RegExp(`[${this.serachInpt.value}]`, 'g')
        return reg.test(JSON.stringify(obj))
      })
    this.setState({ [arrayStr]: Arr })
    PubSub.publish(putStr, Arr)
  }

  // 点击enter松开回调
  enterKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.searchBtnClick()
    }
  }

  render() {
    //解构赋值 
    const { state: { parents, teachers, students }, searchBtnClick, enterKeyUp } = this
    const { id } = this.props.match.params
    return (
      <div className='class-detail-totabar'>
        {/* 顶部导航 */}
        <div className="contenter-top-nav-bar">
          <div className="route-title">
            <h2 >我的班级</h2>
          </div>
          {/* 返回上一级按钮 */}
          <BackClassBtn></BackClassBtn>

        </div>
        {/* 班级信息搜索框 */}
        <div className="class-metail-search-bar">
          <h3>兴趣折纸班</h3>
          <div className='class-metail-search'>
            <input ref={e => this.serachInpt = e} onKeyUp={enterKeyUp} type="text" placeholder='快捷查找' /><button onClick={searchBtnClick} ></button>
          </div>
        </div>
        {/* 班级详细信息容器 */}
        <div className="class-detail-bar">
          {/* 班级详细信息导航栏 */}
          {/* activeClassName="class-detail-li-active" */}
          <ul className="class-detail-nav-bar">
            <NavLink to={`/class/${id}/teacher`} activeClassName="class-detail-li-active"><li onClick={this.putMessageClick} >所有老师 ({teachers.length} )</li></NavLink>
            <NavLink to={`/class/${id}/studens`} activeClassName="class-detail-li-active"><li onClick={this.putMessageClick}>所有学生 ({students.length} )</li></NavLink>
            <NavLink to={`/class/${id}/parents`} activeClassName="class-detail-li-active"><li onClick={this.putMessageClick}>所有家长 ( {parents.length} )</li></NavLink>
          </ul>
          {/* 路由懒加载 */}
          <Suspense fallback={<Loading></Loading>}>
            <Switch>
              <Route path={`/class/:id/teacher`} component={Teachers} ></Route>
              <Route path={`/class/:id/studens`} component={Studens}></Route>
              <Route path={`/class/:id/parents`} component={Parents}></Route>
              <Redirect to={`/class/${id}/teacher`} />
            </Switch>
          </Suspense>

        </div>
      </div>
    )
  }
}
