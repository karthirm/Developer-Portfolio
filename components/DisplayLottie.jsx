import React from "react";
import Lottie from "react-lottie";

import ReactGA from 'react-ga';

const GreetingLottie = ({ animationPath }) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		path: animationPath,
	};

	return (
		<div onClick={() => null}>
			<Lottie options={defaultOptions} />
		</div>
	);
};

export default GreetingLottie;
