import React, { Component } from 'react'

import { nanoid } from 'nanoid'
import axios from 'axios'

// import store from '../../../../../redux/store'
// import PubSub from 'pubsub-js'
// import PubSub from 'pubsub-js'

import SearchTeacher from '../../../../../components/content/SearchTeacher'
import MessageCar from '../../../../../components/content/MessageCar'

// import './css/index.css'

export default class Teachers extends Component {

  state = {
    teachers: [],
    classes: []
  }

  componentDidMount() {
    // console.log(this);
    const { id } = this.props.match.params
    axios.get(`http://localhost:3001/classes/${id}/teachers`).then(res => {
      // console.log(res.data);
      this.setState({ teachers: res.data })
      axios.get(`http://localhost:3001/classes/${id}`).then(res => {
        // console.log(res.data);
        this.setState({ classes: res.data })

      })
    })
  }

  // componentWillUnmount() {
  //   // console.log('dasdsadsa');
  //   // PubSub.unsubscribe(this.token11)
  // }


  render() {
    // console.log(store.getState());
    // console.log(this.props);
    const { classes: { headmaster }, teachers } = this.state
    return (
      <div>
        {/* 班级信息 */}
        <div className='class-detail-message' >

          {/* 科任老师筛选组件 */}
          <SearchTeacher headmaster={headmaster} ></SearchTeacher>

          {/* 科任老师 */}
          {
            teachers.map((teacherobj) => {
              return <MessageCar key={nanoid()}  {...teacherobj} ></MessageCar>
            })
          }



        </div>

      </div>
    )
  }
}
