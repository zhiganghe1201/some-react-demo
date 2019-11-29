import React, { Component } from 'react'

export default class NunberInput extends Component {
	state = {
		val: ''
	}
	render() {
		return (
			<div>
				<input type="text" value={this.state.val} onChange={ e => {
					let val = e.target.value.replace(/\D/g, '');
					this.setState({
						val
					})
				}} />
			</div>
		)
	}
}
