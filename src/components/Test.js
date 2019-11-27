
import React, { Component } from 'react';
import Modal from './common/Modal'

export default class Test extends Component {
	state = {
		showModal: false
	}
	render() {
		return (
			<div>
				{
					this.state.showModal ?
					(
						<Modal onClose={this.close}>
							<div style={{
								background: '#fff'
							}}>
								<h1>sdasdsdad</h1>
								<button onClick={this.close}>clase Modal</button>
							</div>
						</Modal>
					)
					: null
				}
				<button onClick={this.show}>show Modal</button>
			</div>
		)
	}

	show = () => {
		this.setState({
			showModal: true
		})
	}

	close = () => {
		this.setState({
			showModal: false
		})
	}
}
