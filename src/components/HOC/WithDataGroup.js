import React from 'react';
import PropTypes from 'prop-types';
//实现根据数据渲染出的一组表单组件

const WithDataGroup = (Comp) => {
	return class DataGroupWrapper extends React.Component {
		static propTypes = {
			datas: PropTypes.arrayOf(PropTypes.shape({
				value: PropTypes.string.isRequired,
				text: PropTypes.string.isRequired,
			})).isRequired
		}

		render() {
			const comps = this.props.datas.map(it => <Comp key={it.value} info={it} {...this.props} />)
			return (
				<>
				{comps}
				</>
			)
		}
	};
}

export default WithDataGroup;
