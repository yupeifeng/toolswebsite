import React from 'react';
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

/**
 * AboutMe
 */
export default class AboutMe extends React.Component {
	componentDidMount() {}

	render() {
		let that = this;

		return (
			<Layout style={{ padding: '0 24px 24px' }}>
				<Breadcrumb style={{ margin: '12px 0' }}>
					<Breadcrumb.Item>关于</Breadcrumb.Item>
					<Breadcrumb.Item>关于我们</Breadcrumb.Item>
				</Breadcrumb>
				<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
					<ul>
						<li>网站用于个人项目测试</li>
						<li>感兴趣可以看看</li>
						<li>联系方式邮箱：972249551@qq.com</li>
					</ul>
				</Content>
			</Layout>
		);
	}
}
