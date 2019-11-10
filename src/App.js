import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Navigator, BrowserVersion, BrowserCodeName, BrowserName, BrowserCookieEnabled, BrowserLanguage, BrowserOnline, BrowserPlatform, BrowserProduct, BrowserGeolocation, BrowserUserAgent, BrowserContains } from './components/navigator';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<section className="content">
				<Navigator>
					<BrowserVersion></BrowserVersion>
					<BrowserCodeName></BrowserCodeName>
					<BrowserName></BrowserName>
					<BrowserCookieEnabled></BrowserCookieEnabled>
					<BrowserLanguage></BrowserLanguage>
					<BrowserOnline></BrowserOnline>
					<BrowserPlatform></BrowserPlatform>
					<BrowserProduct></BrowserProduct>
					<BrowserGeolocation></BrowserGeolocation>
					<BrowserUserAgent></BrowserUserAgent>
					<BrowserContains></BrowserContains>
				</Navigator>
			</section>
			<footer className="App-footer">
				(c) Copyright - Mike Ludemann
			</footer>
		</div>
	);
}

export default App;
