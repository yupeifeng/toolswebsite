import React from 'react';
import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const { Sider } = Layout;

/**
 * Sider
 */
export default class SiderMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			openKeys: ['/demo'],
			selectedKeys: '/demo/demo1'
		};
	}

	componentDidMount() {
		let that = this;
		let path = window.location.hash
			.split('#')
			.join('')
			.split('/')
			.filter(function(n) {
				return n;
			});

		if (path && path.length > 0) {
			if (path[0]) {
				that.setState({
					openKeys: ['/' + path[0]]
				});
			}
			that.setState({
				selectedKeys: '/' + path.join('/')
			});
		}
	}

	render() {
		let that = this;

		return (
			<Sider width={200} style={{ background: '#fff' }}>
				<Menu
					mode="inline"
					openKeys={that.state.openKeys}
					selectedKeys={[that.state.selectedKeys]}
					style={{ height: '100%' }}
					onOpenChange={openKeys => that._onOpenChange(openKeys)}
					onClick={e => that._handleClick(e)}>
					<SubMenu
						key="/tools"
						title={
							<span>
								<Icon type="api" />工具
							</span>
						}>
						<Menu.Item key="/tools/MD5">
							<a href="#/tools/MD5">MD5加密</a>
						</Menu.Item>
						<Menu.Item key="/tools/Qrcode">
							<a href="#/tools/Qrcode">生成二维码</a>
						</Menu.Item>
						<Menu.Item key="/tools/Regular">
							<a href="#/tools/Regular">正则校验</a>
						</Menu.Item>
						<Menu.Item key="/tools/WebCam">
							<a href="#/tools/WebCam">人脸对比</a>
						</Menu.Item>
						<Menu.Item key="/tools/Canvas">
							<a href="#/tools/Canvas">水波图</a>
						</Menu.Item>
					</SubMenu>
					<SubMenu
						key="/about"
						title={
							<span>
								<Icon type="api" />关于
							</span>
						}>
						<Menu.Item key="/about/me">
							<a href="#/about/me">关于我们</a>
						</Menu.Item>
					</SubMenu>
				</Menu>
			</Sider>
		);
	}

	_onOpenChange(openKeys) {
		this.setState({
			openKeys: openKeys
		});
	}

	_handleClick(e) {
		this.setState({
			selectedKeys: e.key
		});
	}
}
