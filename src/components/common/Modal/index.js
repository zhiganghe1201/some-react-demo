import React from 'react';
import './index.css';

const Modal = (props) => {
	const defaultProps = {
		bg: 'rgba(0, 0, 0, .5)'
	};
	const datas = Object.assign({}, defaultProps, props);

	return (
		<div 
			onClick={(ev) => {
				if(ev.target.className === 'modal') {
					datas.onClose()
				}
			}} 
			className="modal"
			style={{
				backgroundColor: datas.bg
			}}>
			<div className="modal-center">
				{ datas.children }
			</div>
		</div>
	);
}

export default Modal;
