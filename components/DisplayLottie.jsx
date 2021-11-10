import React from "react";
import Lottie from "react-lottie";

import ReactGA from 'react-ga';
import React, {useEffect} from 'react'

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

useEffect(() => {
ReactGA.initialize('UA-212470797-1');
ReactGA.pageview(window.location.pathname + window.location.search)
},[]);
