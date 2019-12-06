// import React, { Component } from 'react'

// export default function WithLog(Comp) {
// 	return class LogWrapper extends Component {
// 		componentDidMount() {
// 			console.log(`日志： 组件${Comp.name}被创建了！${Date.now()}`)
// 		}
// 		componentWillUnmount() {
// 			console.log(`日志： 组件${Comp.name}被销毁了！${Date.now()}`)
// 		}
// 		render () {
// 			return (
// 				<Comp {...this.props} />
// 			)
// 		}
// 	}
// }


import React from 'react';

export default function WithLog(Comp) {
	return class extends React.Component {
		componentDidMount() {
			
		}
		render() {
			return <Comp {...this.props} />
		}
	}
}