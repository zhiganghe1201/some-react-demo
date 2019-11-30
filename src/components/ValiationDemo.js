
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ValiationDemo extends Component {
	static defaultProps = {
		a: true
	}

	// 属性校验、约束
	static propType = {
		a: PropTypes.bool.isRequired,
		c: PropTypes.array.isRequired,
	}
	render() {
		return (
			<div>
				
			</div>
		)
	}
}
