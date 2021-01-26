import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

import './css/index.css'
export default class ClassSynopsis extends Component {
  
  showClassMenber=()=>{
    
    // console.log(this.props);
    // console.log(document.getElementsByClassName('class-bar'));
    // ReactDOM.unmountComponentAtNode(document.getElementsByClassName('class-bar')[0])

  }
  
  render() {

    const {session,classes,headmaster,studCount}=this.props
    return (
        <div onClick={this.showClassMenber} className="class-details">
          <div className='course-logo'></div>
          <div className="class-detail">
            <p>{session}</p>
            <p><i>年级：</i><span>{classes}</span></p>
            <p><i>班主任：</i><span style={{ fontWeight: 'bold' }}>{headmaster}</span></p>
            <p><i>学生：</i><span>{studCount}人</span></p>
          </div>
          <button className='class-details-btn'>行政班</button>
        </div>
    ) 
  }
}
