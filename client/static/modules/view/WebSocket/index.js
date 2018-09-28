import React from 'react';
import { Layout, Breadcrumb, Input } from 'antd';
import { connectStore, actionInjection } from 'reduxm';
import io from 'socket.io-client';

const { Content } = Layout;

/**
 * webSocket
 */
@connectStore(['webSocketStore'], ['webSocketStore'])
@actionInjection('webSocketAction')
export default class WebSocket extends React.Component {
	componentDidMount() {
		let socket = io.connect('//localhost:3000');
		socket.on('news', data => {
			this.props.changeWebSocketStore({ webSocketText: JSON.stringify(data) });
			console.log(data);
			socket.emit('my other event', { my: 'data' });
		});
	}

	render() {
		let that = this;

		return (
			<Layout style={{ padding: '0 24px 24px' }}>
				<Breadcrumb style={{ margin: '12px 0' }}>
					<Breadcrumb.Item>工具</Breadcrumb.Item>
					<Breadcrumb.Item>WebSocket通讯</Breadcrumb.Item>
				</Breadcrumb>
				<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
					<div>
						<span>webSocket消息：{that.props.webSocketStore.webSocketText}</span>
					</div>
				</Content>
			</Layout>
		);
	}
}
