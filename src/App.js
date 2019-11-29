import React, { Component } from 'react'
// import NumberInput from './components/NunberInput';
import Reservation from './components/Reservation';

export default class App extends Component {
	state = {
		val: 124
	}
	render() {
		return (
			<div>
				{/* <input value={this.state.val} onChange={(e) => {
					this.setState({
						val: e.target.value
					})
				}} /> */}

				{/* <NumberInput /> */}
				<Reservation />

			</div>
		)
	}
}
