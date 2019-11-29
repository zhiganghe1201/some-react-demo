import React, { Component } from 'react'

export default class Reservation extends Component {
	state = {
		isGoing: true,
		numberOfGuests: 2
	};

	handleOnChange = (ev) => {
		let target = ev.target;
		let val = target.type === 'checkbox' ? target.checked : target.value;
		let name = target.name;

		this.setState({
			[name]: val
		})

	}

	render() {
		return (
			<form>
				<label>
					参与：
					<input 
						name="isGoing"
						type="checkbox"
						checked={this.state.isGoing}
						onChange={this.handleOnChange}
					 />
				</label>
				<br />
				<label>
					来宾人数：
					<input 
						name="numberOfGuests"
						type="number"
						value={this.state.numberOfGuests}
						onChange={this.handleOnChange}
					/>
				</label>
			</form>
		)
	}
}
