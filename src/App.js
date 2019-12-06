import React from 'react';
// import FunComp from './components/FunComp';
import { A, B } from "./components/Comps";
import WithLog from './components/HOC/WithLog';
import WithLogin from './components/HOC/WithLogin';
import CheckBoxGroup from './components/CheckBoxGroup/Test'
const AComp = WithLogin(WithLog(A)); // 可以包装两层

const BLog = WithLog(B)
const App = () => {
	return (
		<div>
		<CheckBoxGroup />
		</div>
	);
}

export default App;
