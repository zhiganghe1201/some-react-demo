import React from 'react';
import Student from './Student';


const StudentsList = (props) => {
	const list = props.stu.map((it, index) => <Student key={it.id} {...it} />)
	return (
		<ul>
			{list}
		</ul>
	);
}

export default StudentsList;
