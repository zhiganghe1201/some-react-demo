import React from 'react';
import './Page.css'

/**
 * 分页组件
 * 属性：
 * 1. current 初始页码
 * 2. total 总数据量
 * 3. limit 也容量，每页显示的数据量
 * 4. pageNumber 数字页码最多显示多少个
 * 5. onPageChange 当页码改变时的事件
 */
// 函数组件根据数据进行渲染；

const Page = (props) => {
	if(props.total === 0) {
		return null
	} 
	const pageNumber = getPageNumber(props); // 总页数
	const min = getMinNumber(props);
	const max = getMaxNumber(props);
	const numbers = [];
	for(let i = min; i <= max; i ++) {
	numbers.push(<span key={i} onClick={() => { toPage(i, props) }} className={props.current === i ? 'active' : 'item'}>{i}</span>)
	}
	return (
		<div>
			{/* 数据的提供者才可以改变数据 */}
			<span
				onClick={() => { toPage(1, props) }}
				className={props.current === 1 ? 'item disabled' : 'item'}>
				首页
			</span>
			<span
				onClick={() => { toPage(props.current - 1 >= 1 ? props.current - 1 : 1, props) }}
				className={props.current === 1 ? 'item disabled' : 'item'}>
				上一页
			</span>
			{/* 数字页码 */}
			{numbers}

			<span
				onClick={() => { toPage(props.current + 1 > pageNumber ? pageNumber : props.current + 1, props) }}
				className={props.current === pageNumber ? 'item disabled' : 'item'}>
				下一页
				</span>
			<span
				onClick={() => { toPage(pageNumber, props) }}
				className={props.current === pageNumber ? 'item disabled' : 'item'}>尾页</span>
			<span className="current">{props.current}</span>
				/
			<span>{pageNumber}</span>
		</div>
	);
}
/**
 * 
 * @param {*} props 计算出最小的页码
 */
function getMinNumber(props) {
	let min = props.current - Math.floor(props.pageNumber / 2)
	if(min < 1) {
		min = 1;
	}
	return min;
}

function getMaxNumber(props) {
	let max = props.current + Math.floor(props.pageNumber / 2);
	let maxPage = getPageNumber(props)
	if(max > maxPage) {
		max = maxPage
	}
	return max;
}

/**
 * 跳转到某一页
 * @param {*} target 目标页码 
 * @param {*} props 所有属性
 */
function toPage(target, props) {
	if (props.current === target) {
		return; // 当前页和目标页相等
	}
	props.onPageChange && props.onPageChange(target)
}

/**
 * 计算总页数
 * @param {*} props 
 */
function getPageNumber(props) {
	return Math.ceil(props.total / props.limit);
}

export default Page;
