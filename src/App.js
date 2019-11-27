import React from 'react';
import ThreeLayout from './components/common/ThreeLayout';

const App = () => {
	return (
		<div>
			<ThreeLayout left={(<div>左边的</div>)}>
				<span>我是中间的</span>
			</ThreeLayout>
		</div>
	);
}

export default App;
