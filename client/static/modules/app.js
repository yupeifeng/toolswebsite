import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { asyncComponent } from 'AsyncComponent';
import HeaderMenu from './components/heard';
import SiderMenu from './components/sider';
import './css/main.css';

import './MD5/reducer';
import './Qrcode/reducer';
import './Regular/reducer';
import { Store } from 'reducermanager';

const MD5 = asyncComponent(() => import(/* webpackChunkName: 'MD5' */ './MD5'));
const Qrcode = asyncComponent(() => import(/* webpackChunkName: 'Qrcode' */ './Qrcode'));
const Regular = asyncComponent(() => import(/* webpackChunkName: 'Regular' */ './Regular'));

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
				<Route exact path="/about/me" component={AboutMe} />
				{debug ? Store.getDevTools() : null}
			</div>
		</div>
	</HashRouter>,
	debug
);

ReactDOM.render(router, document.getElementById('content'));
