import React from 'react';

const WithTest = (comp) => {
	return class extends React.Component {

	}
}

function A() {
	return <h1> adadsd </h1>
}

const B  = WithTest(A)
export default WithTest;
