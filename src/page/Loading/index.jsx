import React, { PureComponent } from 'react'

// 路由懒加载 期间显示
export default class Loading extends PureComponent {
	render() {
		return (
			<div>
				<h1 style={{backgroundColor:'gray',color:'orange'}}>Loading....</h1>
			</div>
		)
	}
}
