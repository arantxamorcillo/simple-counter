//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Counter from "/workspace/react-hello/src/js/component/Counter.jsx";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components

//render your react application
let count = 0;
setInterval(function() {
	const zero = Math.floor(count / 1000) % 10;
	const one = Math.floor(count / 100) % 10;
	const two = Math.floor(count / 10) % 10;
	const three = Math.floor(count / 1) % 10;
	count++;
	ReactDOM.render(
		<Counter
			digitZero={zero}
			digitOne={one}
			digitTwo={two}
			digitThree={three}
		/>,
		document.querySelector("#app")
	);
}, 1000);
