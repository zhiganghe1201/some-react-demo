import React from 'react';

const FunComp = (props) => {
	return (
		<div>
			a: {props.a} b: {props.b}
		</div>
	);
}

FunComp.defaultProps = {
	a: 1,
	b: 2
}

export default FunComp;
