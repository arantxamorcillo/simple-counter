import propTypes from "prop-types";
import React from "react";

const Counter = props => {
	return (
		<div className="counter">
			<div className="clock">
				<i className="far fa-clock"></i>
			</div>
			<div className="digitZero">{props.digitZero}</div>
			<div className="digitOne">{props.digitOne}</div>
			<div className="digitTwo">{props.digitTwo}</div>
			<div className="digitThree">{props.digitThree}</div>
		</div>
	);
};

Counter.propTypes = {
	digitZero: propTypes.number,
	digitOne: propTypes.number,
	digitTwo: propTypes.number,
	digitThree: propTypes.number
};

export default Counter;
