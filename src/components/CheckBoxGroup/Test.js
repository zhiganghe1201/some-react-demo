import React, { Component } from 'react'
import { getAllStudents } from '../../services/student';
import CheckBoxGroup from './index';

export default class Test extends Component {
	state = {
		datas: [],
		chooseDatas: []
	}

	async componentDidMount() {
		let stus = await getAllStudents();
		this.setState({
			datas: stus.map(it => ({value: it.id.toString(), text: it.name}))
		})
	}

	render() {
		return (
			<CheckBoxGroup
				name="loves"
				{...this.state}
				onChange={newArr => {
					this.setState({
						chooseDatas: newArr
					})
				}}
			 />
		)
	}
}
