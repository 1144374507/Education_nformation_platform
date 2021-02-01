import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import axios from 'axios'


import MessageCar from '../../../../../components/content/MessageCar'

export default class parents extends Component {


  state = {
    parents: []
  }

  componentDidMount() {
    console.log(this);
    const { id } = this.props.match.params
    axios.get(`http://localhost:3001/classes/${id}/parents`).then(res => {
      // console.log(res.data);
      this.setState({ parents: res.data })

    })
  }

  render() {
    const { parents } = this.state
    return (
      <div className='class-detail-message'>
        {
          parents.map((parentsobj) => {
            return <MessageCar key={nanoid()}  {...parentsobj} ></MessageCar>
          })
        }
      </div>
    )
  }
}
