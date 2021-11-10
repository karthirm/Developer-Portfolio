import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/vendor/nucleo/css/nucleo.css";
import "../styles/vendor/font-awesome/css/font-awesome.min.css";
import "../styles/argon-design-system-react.css";
import ReactGA from 'react-ga';
import React, {useEffect} from 'react'

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;

useEffect(() => {
ReactGA.initialize('UA-212470797-1');
ReactGA.pageview(window.location.pathname + window.location.search)
},[]);
