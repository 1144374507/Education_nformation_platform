import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'

import {
  addClass,
  deleClass,
} from '../../../func/toggleClass'
import './css/index.css'

export default class SingbieBox extends PureComponent {


  static propTypes = {
    singleBoxName: PropTypes.string,//作为react-redux action 的 key
    data: PropTypes.array,//单选框的选项

  }
  static defaultProps = {//设置prop的默认值
    data: ['选项1', '选项2', '选项3', '选项4']
  }

  componentDidMount() {
    // 订阅创建班级表单提交成功事件
   this.token = PubSub.subscribe('initVuale', () => {
      const date = this.props.data
      date.map((value, index) => deleClass(this[index], 'single-box-foucs'))
    })
  }

  componentWillUnmount(){
    // 取消订阅
    PubSub.unsubscribe(this.token)
  }
  // 单选框点击回调
  // 判断元素是否被点击，是则改变classnanme
  singleBoxFocus = (index, arr) => {
    const { props: { singleBoxName, singleBoxFocusValue } } = this
    return () => {
      arr.map((value, index1) => {
        if (index1 === index) {
          const data = { [singleBoxName]: value }
          singleBoxFocusValue(data)
          return addClass(this[index1], 'single-box-foucs')
        } else {
          return deleClass(this[index1], 'single-box-foucs')
        }
      })
    }
  }

  render() {
    const date = this.props.data
    return (
      <div className="single-box">
        {
          date.map((value, index, arr) => {
            return <div onClick={this.singleBoxFocus(index, arr)} ref={e => this[index] = e} key={index}  ><span></span><a onClick={event => event.preventDefault()} href='/#'>{value}</a></div>
          })
        }

      </div>
    )
  }
}
