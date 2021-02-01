import React, { Component } from 'react'

// import store from '../../../redux/store'
// import {singleBoxFocusValue} from '../../../redux/actions/singleBox'
import './css/index.css'

export default class SingbieBox extends Component {

  // 单选框点击回调
  // 判断元素是否被点击，是则改变classnanme
  singleBoxFocus = (index, arr) => {
    const { deleClass, addClass,props:{singleBoxName,singleBoxFocusValue} } = this
    // console.log(singleBoxName);
    return () => {
      arr.map((value, index1) => {
        // index1 === index ? toggleClass(this[index1], 'single-box-foucs') :
        //   deleClass(this[index1], 'single-box-foucs')
        if (index1 === index) {
          // console.log(value);
          const data = { [singleBoxName]: value }
          console.log(data);
        singleBoxFocusValue(data)



          return addClass(this[index1], 'single-box-foucs')
        } else {
          return deleClass(this[index1], 'single-box-foucs')
        }
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
    const date = this.props.data
      // console.log(this.props);
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
