import React from 'react';
import { Layout, Breadcrumb, Input, Button, Alert } from 'antd';
import './action';
import { connectStore, actionInjection } from 'reduxm';
import hexMd5 from '../../util/md5';

const { Content } = Layout;

/**
 * MD5
 */
@connectStore(['mD5Store'], ['mD5Store'])
@actionInjection('mD5Action')
export default class MD5 extends React.Component {
	componentDidMount() {}

	render() {
		let that = this;

		return (
			<Layout style={{ padding: '0 24px 24px' }}>
				<Breadcrumb style={{ margin: '12px 0' }}>
					<Breadcrumb.Item>工具</Breadcrumb.Item>
					<Breadcrumb.Item>MD5加密</Breadcrumb.Item>
				</Breadcrumb>
				<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
					<div>
						<span>要加密的字符串</span>
						<Input
							placeholder="请输入要加密的字符串"
							value={that.props.mD5Store.md5String}
							onChange={e => that._onChangeMd5String(e)}
						/>
					</div>
					<Button type="primary" onClick={() => that._Md5Code()}>
						点击测试
					</Button>
					<div>
						<span>加密结果</span>
						<Alert message={'md5加密后字段：' + that.props.mD5Store.md5CodeString} type="success" />
					</div>
				</Content>
			</Layout>
		);
	}

	_onChangeMd5String(e) {
		let that = this;
		that.props.changeMd5String(e.target.value);
	}

	_Md5Code() {
		let that = this;
		let md5CodeString = hexMd5(that.props.mD5Store.md5String);
		that.props.changeMd5CodeString(md5CodeString);
	}
}
