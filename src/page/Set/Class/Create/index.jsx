import React, { PureComponent } from 'react'
import PubSub from 'pubsub-js'

import {
  addClass,
  deleClass,
} from '../../../../func/toggleClass'
import BackClassBtn from '../../../../components/content/BackClassBtn'
import SingleBox from '../../../../containers/SingleBox'
import DropDowm from '../../../../containers/DropDowm'
import './css/index.css'

export default class CreateClass extends PureComponent {

  state = {
    newClass: { students: 0, headmaster: '田小雨', },
    schoolIstrue: false,//学校inpt框输入内容是否合法
    classIstrue: false,//课程inpt框输入内容是否合法
    display: '',
    width: '',
    height: '',
    hasError: ''
  }

  // ref 容器
  schoolRef = React.createRef()
  schoolChildRef = React.createRef()
  classRef = React.createRef()
  classChildRef = React.createRef()


  //当子组件出现报错时候，会触发getDerivedStateFromError调用，并携带错误信息
  static getDerivedStateFromError(error) {
    return { hasError: error }
  }

  componentDidCatch() {
    console.log('此处统计错误，反馈给服务器，用于通知编码人员进行bug的解决');
  }


  // school onChange的回调
  schoolInptChange = () => {
    const {
      schoolRef,
      schoolRef: { current: { value } },
      schoolChildRef,
      props: { setSchoolValue }

    } = this
    const reg = new RegExp('^[\u4e00-\u9fa5 ]{4,20}$|^[A-z ]{5,50}$', 'g')
    let str = value
    // 去除中间多余的空格
    str = str.replace(/\s{2,}/g, " ")
    // 去除首尾的空格
    str = str.replace(/^\s*|\s*$/g, "")
    // 纠正非法输入
    schoolRef.current.value = str

    const reslt = reg.test(str)
    if (!Boolean(reslt)) {
      // 显示输入错误提示
      deleClass(schoolChildRef.current, 'school-true-tips')
      deleClass(schoolChildRef.current, 'school-tips-hide')
      setSchoolValue({ school: value })//表单验证 错误名称
      // 更改旗帜
      this.setState({ schoolIstrue: false })
    } else {
      // 显示正确图标
      addClass(schoolChildRef.current, 'school-true-tips')

      // 将数据保存在store
      setSchoolValue({ school: value })
      // 更改旗帜
      this.setState({ schoolIstrue: true })

    }
  }
  //class-name onChange的回调
  classInptChange = () => {
    const {
      classRef, classRef: { current: { value } },
      classChildRef,
      props: { setClassValue }
    } = this
    const reg = /^[\u4e00-\u9fa5A-z0-9 ]{5,20}$/g
    let str = value

    // 去除中间多余的空格
    str = str.replace(/\s{2,}/g, " ")
    // 去除首尾的空格
    str = str.replace(/^\s*|\s*$/g, "")
    //去除_和%
    str = str.replace(/[_%]/g, '')
    // 纠正非法输入
    classRef.current.value = str
    const reslt = reg.test(str)
    if (!reslt) {
      // 显示输入错误提示
      deleClass(classChildRef.current, 'course-tips-true')
      deleClass(classChildRef.current, 'course-tips-hide')
      setClassValue({ course: value })//表单验证 错误名称
      this.setState({ classIstrue: false })
    } else {
      // 显示正确图标
      addClass(classChildRef.current, 'course-tips-true')
      setClassValue({ course: value })
      this.setState({ classIstrue: true })
    }
  }

  // 点击保存按钮的回调
  saveData = (e) => {
    // 取消按钮默认点击事件
    e.preventDefault()
    const {
      props: {
        createClass,
        dropDowm,
        dropDowm: { section, grade },
        singleBox, singleBox: { classType, exitPermissions },

      },
      state: { newClass, schoolIstrue, classIstrue },
      schoolRef,
      classRef,
      schoolChildRef,
      classChildRef,

    } = this

    const resl = { ...newClass, ...createClass, ...singleBox, ...dropDowm }
    this.setState({ newClass: resl }, () => {

      // 表单验证
      if (!schoolIstrue) {
        alert(`学校名称不正确,请重新输入`)
      } else if (section === undefined) {
        alert('请选择学段')
      } else if (grade === undefined) {
        alert('请选择年级')
      } else if (!classIstrue) {
        alert(`班级名称不正确,请重新输入`)
      } else if (classType === undefined) {
        alert('请选择班级类型')
      } else if (exitPermissions === undefined) {
        alert('退出权限未设置')
      } else {

        // 发布数据给 class 页面 
        PubSub.publish('createClass', this.state.newClass)

        // 初始化输入框
        schoolRef.current.value = ''
        classRef.current.value = ''

        // 初始化tips
        addClass(classChildRef.current, 'course-tips-hide')
        addClass(schoolChildRef.current, 'school-tips-hide')
        // 显示成功添加弹框
        this.setState({ display: "block" })
        this.setState({ schoolIstrue: false })
        this.setState({ classIstrue: false })
        // 动态设置弹窗位置
        this.timer = setInterval(() => {
          this.setState({ width: e.view.innerWidth })
          this.setState({ height: e.view.innerHeight })
        }, 100);

      }


    })

  }

  // 弹窗返回我的班级回调
  backlCass = (e) => {
    e.preventDefault()
    const { push } = this.props.history
    push('/class')

    // 停止计时器
    clearInterval(this.timer)
  }

  // 弹窗继续添加回调
  continueClick = (e) => {
    // 取消默认行为
    e.preventDefault()
    // 影藏弹窗
    this.setState({ display: 'none' })


    // 停止计时器
    clearInterval(this.timer)

  }

  render() {
    const classType = ['行政班', '教学班']
    const exitPermissions = ['允许退出', '通知班级管理员审核后退出', '禁止退出']
    const grade = ['年级', '一年级', '二年级', '三年级', '四年级']
    const section = ['学段', '小学', '初中', '高中', '大学']
    const { saveData, classInptChange, schoolInptChange, backlCass, continueClick, state: { display, width, height } } = this
    return (
      <div>
        <div className='class-create-totabar'>
          {/* 顶部导航 */}
          <div className="contenter-top-nav-bar">
            <div className="route-title">
              <h2 >我的班级</h2>
            </div>
            {/* <button className='creat-class'>创建班级</button> */}
            <BackClassBtn />
          </div>

          <div className="class-create-bar">
            <p className='create-tip'>尊敬的<span>老师(刘老师)</span>，请填写班级信息：</p>
            <form action="">

              {/* 输入学校 */}
              <div className='school'>
                <i>学校</i><input ref={this.schoolRef} onChange={schoolInptChange} type="text" placeholder='请选择学校' />
                <div ref={this.schoolChildRef} className='school-tips  school-tips-hide '><div></div><p>请输入4-20位的中文或者5-50位的字母</p></div>
              </div>

              {/* 选择选段 */}
              <div className="section">
                <i><span>*</span>学段</i>
                {
                  this.state.hasError ? <h2>当前网络不稳定，稍后再试</h2> : <DropDowm data={section} pubName='sectionValue' liValue='section' />
                }

              </div>

              {/* 选择年级 */}
              <div className="grade">
                <i><span>*</span>年级</i>
                {
                  this.state.hasError ? <h2>当前网络不稳定，稍后再试</h2> : <DropDowm data={grade} pubName='gradeValue' liValue='grade' />
                }

              </div>

              {/* 输入班级名 */}
              <div className='class-name'>
                <i><span>*</span>班级名</i><input onChange={classInptChange} ref={this.classRef} type="text" name="" id="" placeholder='请输入班级名称，限20字符，不支持输入_和%' />
                <div ref={this.classChildRef} className='course-tips  course-tips-hide'><div></div><p>限20字符，不支持输入_和%' </p></div>
              </div>

              {/* 选择类型 */}
              <div className='class-type'>
                <i>类型</i>
                {
                  this.state.hasError ? <h2>当前网络不稳定，稍后再试</h2> : <SingleBox data={classType} singleBoxName='classType' />
                }

              </div>

              {/* 退出权限设置 */}
              <div className='exit-permissions'>
                <i>退出权限设置</i>
                {
                  this.state.hasError ? <h2>当前网络不稳定，稍后再试</h2> : <SingleBox data={exitPermissions} singleBoxName='exitPermissions' />
                }


              </div>
              {/* 保存按钮 */}
              <button onClick={saveData}>保存</button>


            </form>
            <div className="confirm-Window" style={{ display, width, height }}>
              <div className="confirm-body" >
                <div className="confirm-content">添加班级成功！！！</div>
                <div className="btns">
                  <a onClick={backlCass} href="/" className="btn-back" >返回我的班级</a>
                  <a onClick={continueClick} href="/" className="btn-continue"  >继续添加</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
