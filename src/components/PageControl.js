import React, { Component } from 'react';
import  Page from './Page';
import StudentList from './StudentsList';
import Modal from './Modal';

export default class PageControl extends Component {
	state = {
		current: 1,
		total: 0,
		limit: 10,
		pageNumber: 5,
		studends: [],
		loading: false
	}

	// constructor(props) {
	// 	super(props);
	// }
	componentDidMount() {
		this.fetchStudnet();
		
	}

	async fetchStudnet() {
		this.setState({
			loading: true
		})
		const data = await fetch(`http://api.duyiedu.com/api/student/findByPage?appkey=demo13_1545210570249&page=${this.state.current}&size=${this.state.limit}`)
		.then(res => res.json())
		.then(res => res.data);
		
		this.setState({
			studends: data.findByPage,
			total: data.cont,
			loading: false
		})
	}

	render() {
		return (
			<div>
				<StudentList stu={this.state.studends} />
				<Page {...this.state} onPageChange={this.handlePageChange} />
				<Modal show={this.state.loading} />
			</div>
		)
	}

	handlePageChange = (newPage) => {
		this.setState({
			current: newPage
		})
		this.fetchStudnet()
	}
}
