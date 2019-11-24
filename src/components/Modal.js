import React from 'react';
import './Modal.css'

const Modal = (props) => {
	if(!props.show) {
		return null;
	}
	return (
		<div className="modal">
			<p>加载中。。。</p>
		</div>
	);
}

export default Modal;
