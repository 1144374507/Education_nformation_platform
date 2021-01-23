import React, { Component } from 'react'
import './news.css'
export default class News extends Component {

    componentDidMount() {

        setTimeout(() => {
            const { push } = this.props.history
            push('/home/message')
        }, 2000);

    }
    

    componentWillUnmount() {
        console.log('组件被卸载了');
    }


    render() {
        return (
            <div>
                <ul className='home-item-list'>
                    <li>新闻1</li>
                    <li>新闻2</li>
                    <li>新闻3</li>
                </ul>
            </div>
        )
    }
}
