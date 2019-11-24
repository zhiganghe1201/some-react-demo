import React from 'react';

const Student = ({name, sex, birth}) => {
	return (
		<li>
			【姓名】：{name}
			【性别】：{sex === 1 ? '男' : '女'}
			【出生年月】：{birth}
		</li>
	);
}

export default Student;
