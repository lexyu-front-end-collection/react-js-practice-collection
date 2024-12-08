import React from 'react';
import PropTypes from 'prop-types'

function List2(props) {
	const category = props.category
	const items = props.items;

	items.sort((a, b) => b.name.localeCompare(a.name));

	const listItems = items.map(
		(item) => <li key={item.id}>{item.name}
			: &nbsp; <b>{item.calories}</b></li>);
	return (
		<div>
			<h3 className='list-title'>{category}</h3>
			<ul className='list-items'>{listItems}</ul>
		</div>
	);
}

List2.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		calories: PropTypes.number
	})),
	category: PropTypes.string
}

List2.defaultProps = {
	items: [],
	category: 'CATEGORY'
}
export default List2