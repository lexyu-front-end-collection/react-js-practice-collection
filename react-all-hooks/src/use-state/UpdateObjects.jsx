import React, { useState } from 'react';

function UpdateObjects(props) {
	const [car, setCar] = useState({
		year: 2024,
		make: "Tesla",
		model: "Model 3"
	});

	function handleYearChange(event) {
		setCar(c => {
			return {
				...c,
				year: event.target.value
			}
		});
	}

	function handleMakeChange(event) {
		setCar(c => ({ ...c, make: event.target.value }));
	}

	function handleModelChange(event) {
		setCar(c => {
			return {
				...c,
				model: event.target.value
			}
		});
	}

	return (
		<div>
			<p>Car is {car.year} {car.make} {car.model}</p>
			<input type="number" value={car.year} onChange={handleYearChange} /><br />
			<input type="text" value={car.make} onChange={handleMakeChange} /><br />
			<input type="text" value={car.model} onChange={handleModelChange} /><br />
		</div>
	)
}

export default UpdateObjects