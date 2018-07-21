import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { asyncComponent } from 'AsyncComponent';
import HeaderMenu from './components/heard';
import SiderMenu from './components/sider';
import './css/main.css';

(r => {
	r.keys().forEach(r);
})(require.context('./', true, /reducer\.js/));
(r => {
	r.keys().forEach(r);
})(require.context('./', true, /action\.js/));

import { Store } from 'reduxm';

const MD5 = asyncComponent(() => import(/* webpackChunkName: 'MD5' */ './MD5'));
const Qrcode = asyncComponent(() => import(/* webpackChunkName: 'Qrcode' */ './Qrcode'));
const Regular = asyncComponent(() => import(/* webpackChunkName: 'Regular' */ './Regular'));
const WebCam = asyncComponent(() => import(/* webpackChunkName: 'WebCam' */ './WebCam'));
const Canvas = asyncComponent(() => import(/* webpackChunkName: 'Canvas' */ './Canvas'));
const AboutMe = asyncComponent(() => import(/* webpackChunkName: 'AboutMe' */ './AboutMe'));

let debug = false;
const router = Store.createStore(
	<HashRouter>
		<div>
			<HeaderMenu />
			<div className="ant-layout ant-layout-has-sider layout">
				<SiderMenu />
				<Route exact path="/" component={MD5} />
				<Route exact path="/tools/MD5" component={MD5} />
				<Route exact path="/tools/Qrcode" component={Qrcode} />
				<Route exact path="/tools/Regular" component={Regular} />
				<Route exact path="/tools/WebCam" component={WebCam} />
				<Route exact path="/tools/Canvas" component={Canvas} />
				<Route exact path="/about/me" component={AboutMe} />
				{debug ? Store.getDevTools() : null}
			</div>
		</div>
	</HashRouter>,
	debug
);

ReactDOM.render(router, document.getElementById('content'));
