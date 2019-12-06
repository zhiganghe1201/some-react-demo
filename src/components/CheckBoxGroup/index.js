import React, { Component } from 'react'
import PropTypes from 'prop-types';
import withDateGroup from '../HOC/WithDataGroup'

class CheckBox extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		onChange: PropTypes.func,
		info: PropTypes.shape({
			value: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
		}).isRequired,
		chooseDatas: PropTypes.arrayOf(PropTypes.string),
	}
	
	handleChange = (e) => {
		let newArr = [];
		if(e.target.checked) {
			newArr = [...this.props.chooseDatas, e.target.value]
		}else {
			newArr = this.props.chooseDatas.filter(it => it !== e.target.value)
		}
		this.props.onChange && this.props.onChange(newArr)
	}

	render() {
		return (
			<label>
				{/* 同一个name是同一个选项 value是值 */}
				<input
					type="checkbox"
					name={this.props.name}
					value={this.props.info.value}
					checked={this.props.chooseDatas.includes(this.props.info.value)}
					onChange={this.handleChange}
				 />
				 {this.props.info.text}
			</label>
		)
	}
}


export default withDateGroup(CheckBox);