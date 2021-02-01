import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'

// import store from '../../../redux/store'
// import {setDropDowmValue} from '../../../redux/actions/dropDowm'

import './css/index.css'

export default class DropDowm extends Component {

  static propTypes = {
    pubName: PropTypes.string,//pubsub 订阅-发布 的事件名
    liValue: PropTypes.string,//作为react-redux action 的 key
    data: PropTypes.array,//下拉列表，列表项的值，数组第一个为下拉列表的默认值

  }
  static defaultProps = {//设置prop的默认值
    data: ['  &&选中的内容&&', '请传入', '一个数组', '作为', '列表项', '数组的第一个值为选中的内容']
  }
  state = {
    title: '请选择年级',
    lisHeightCount: 0
  }

  //生命周期函数 初始化 title
  componentDidMount() {
    const data = this.props.data || this.props.data1
    this.setState({ title: `请选择${data[0]}` })

  }

  // 点击 p 标签 展示 ul 下拉框
  showDRopDowmList = (event) => {
    const data = this.props.data || this.props.data1
    const { childNodes } = event.target
    const { dropDowmList, state: { lisHeightCount } } = this
    this.toggleClass(dropDowmList, 'dropdown-ul-active')
    this.toggleClass(childNodes[1], 'dropdown-icon-active')
    if (lisHeightCount === 0) {
      this.setState({ lisHeightCount: 34 * (data.length - 1) })
    } else {
      this.setState({ lisHeightCount: 0 })

    }
    // childNodes[1]
  }

  // 鼠标移入ul事件回调
  onMouseEnterUl = () => {
    const { addClass, dropDowmInpt: { childNodes }, timer } = this
    clearTimeout(timer)
    addClass(childNodes[1], 'dropdown-icon-active')

  }
  // 鼠标移出ul事件回调
  mouseleaveUL = () => {
    const { deleClass, dropDowmInpt: { childNodes }, } = this

    deleClass(childNodes[1], 'dropdown-icon-active')
    this.setState({ lisHeightCount: 0 })

  }
  // 鼠标移出p事件回调
  mouseleaveP = () => {
    const { deleClass, dropDowmInpt: { childNodes }, } = this

    this.timer = setTimeout(() => {

      deleClass(childNodes[1], 'dropdown-icon-active')
      this.setState({ lisHeightCount: 0 })

    }, 300);
  }

  // 点击li选定内容回调
  showDRopDowmLi = (index) => {
    const { props: { pubName, liValue, setDropDowmValue }, } = this
    // console.log(this.props);
    return () => {
      const { toggleClass, dropDowmInpt: { childNodes }, } = this
      const data = this.props.data
      toggleClass(childNodes[1], 'dropdown-icon-active')
      data.map((value, index1) => {
        if (index1 === index) {
          this.setState({ title: value }, () => {

            // 判断是否使用PubSub
            if (!(pubName === undefined)) {
              // 发布事件的名字由父元素传入
              // console.log(pubName);
              // console.log(value);
              // console.log('1111');
              PubSub.publish(pubName, value)
            }
          })
          this.setState({ lisHeightCount: 0 })
          // console.log(liValue);
          // console.log(liValue === undefined);
          // 判断是否使用react-redux
          if (!(liValue === undefined)) {

            const resl = { [liValue]: value }
            // console.log(resl);
            setDropDowmValue(resl)
          }

        }
        return []
      })
    }
  }



  // 添加class
  addClass = (obj, cn) => {
    // 检查是否有cn
    if (!this.hasClass(obj, cn)) {
      obj.className += " " + cn
    }
  }
  // 检查是否有cn
  hasClass = (obj, cn) => {
    const reg = new RegExp("\\b" + cn + "\\b")
    return reg.test(obj.className);
  }
  // 删除class
  deleClass = (obj, cn) => {
    // 查找是否存在
    const reg1 = new RegExp("\\b" + cn + "\\b", "ig");
    // console.log(reg1);
    //删除class
    obj.className = obj.className.replace(reg1, "");
  }
  /*
   * toggleClass 可以用来切换一个类
   * 	如果元素中具有该类，则删除
   * 	如果元素中没有该类，则添加
   */
  toggleClass = (obj, cn) => {
    //判断obj中是否含有cn
    if (this.hasClass(obj, cn)) {
      //有，则删除
      this.deleClass(obj, cn);
    } else {
      //没有，则添加
      this.addClass(obj, cn);
    }
  }
  render() {
    const data = this.props.data || this.props.data1
    const { showDRopDowmLi, showDRopDowmList, state: { title, lisHeightCount }, mouseleaveUL, onMouseEnterUl, mouseleaveP } = this
    return (
      <div className="dropdown">
        <p onMouseLeave={mouseleaveP} ref={e => this.dropDowmInpt = e} onClick={showDRopDowmList}>{title}<span className='dropdown-icon'></span></p>
        <ul onMouseEnter={onMouseEnterUl}
          onMouseLeave={mouseleaveUL}
          className='dropdown-ul'
          ref={e => this.dropDowmList = e}
          style={{ height: lisHeightCount }}
        >
          {
            data.map((value, index) => {

              return index !== 0 ? < li onClick={showDRopDowmLi(index)} key={index} > {value}</li> : ''
            })
          }

        </ul>
      </div >
    )
  }
}
