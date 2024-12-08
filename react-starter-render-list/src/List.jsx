import React from 'react';

function List() {
	const fruits = [
		{ id: 1, name: "apple", calories: 100 },
		{ id: 2, name: "mango", calories: 50 },
		{ id: 3, name: "orange", calories: 75 },
		{ id: 4, name: "banana", calories: 125 },
		{ id: 5, name: "pineapple", calories: 200 }];

	fruits.sort((a, b) => b.name.localeCompare(a.name));

	const listItems = fruits.map(
		(fruit) => <li key={fruit.id}>{fruit.name}
			: &nbsp; <b>{fruit.calories}</b></li>);
	return (
		<div>
			<ul>{listItems}</ul>
			{/* {fruits.forEach((fruit) => {
				console.log(fruit);
			})}
			<ul>
				{fruits.map((fruit) => (
					<li key={fruit}>{fruit}</li>
				))}
			</ul> */}
		</div>
	);
}

export default List