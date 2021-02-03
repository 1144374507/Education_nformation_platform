import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'

import {
  addClass,
  deleClass,
  toggleClass
} from '../../../func/toggleClass'

import './css/index.css'

export default class DropDowm extends PureComponent {

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
    const data = this.props.data 
    this.setState({ title: `请选择${data[0]}` })
  }

  // 点击 p 标签 展示 ul 下拉框
  showDRopDowmList = (event) => {
    const data = this.props.data 
    const { childNodes } = event.target
    const { dropDowmList, state: { lisHeightCount } } = this
    toggleClass(dropDowmList, 'dropdown-ul-active')
    toggleClass(childNodes[1], 'dropdown-icon-active')
    if (lisHeightCount === 0) {
      this.setState({ lisHeightCount: 34 * (data.length - 1) })
    } else {
      this.setState({ lisHeightCount: 0 })

    }
  }

  // 鼠标移入ul事件回调
  onMouseEnterUl = () => {
    const { dropDowmInpt: { childNodes }, timer } = this
    clearTimeout(timer)
    addClass(childNodes[1], 'dropdown-icon-active')

  }
  // 鼠标移出ul事件回调
  mouseleaveUL = () => {
    const { dropDowmInpt: { childNodes }, } = this

    deleClass(childNodes[1], 'dropdown-icon-active')
    this.setState({ lisHeightCount: 0 })

  }
  // 鼠标移出p事件回调
  mouseleaveP = () => {
    const { dropDowmInpt: { childNodes }, } = this

    this.timer = setTimeout(() => {

      deleClass(childNodes[1], 'dropdown-icon-active')
      this.setState({ lisHeightCount: 0 })

    }, 300);
  }

  // 点击li选定内容回调
  showDRopDowmLi = (index) => {
    const { props: { pubName, liValue, setDropDowmValue }, } = this
    return () => {
      const { dropDowmInpt: { childNodes }, } = this
      const data = this.props.data
      toggleClass(childNodes[1], 'dropdown-icon-active')
      data.map((value, index1) => {
        if (index1 === index) {
          this.setState({ title: value }, () => {

            if (!(pubName === undefined)) {
              // 发布事件的名字由父元素传入
              PubSub.publish(pubName, value)
            }
          })
          this.setState({ lisHeightCount: 0 })
          // 判断是否使用react-redux
          if (!(liValue === undefined)) {

            const resl = { [liValue]: value }
            setDropDowmValue(resl)
          }

        }
        return []
      })
    }
  }

  render() {
    const data = this.props.data 
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
