import React from 'react';
import { Layout, Breadcrumb, Input, Button, Alert } from 'antd';
import './action';
import { ConnectStore, actionInjection } from 'reducermanager';

const { Content } = Layout;

/**
 * Regular
 */
@ConnectStore(['regularStore'], ['regularStore'])
@actionInjection('regularAction')
export default class Regular extends React.Component {
	componentDidMount() {}

	render() {
		let that = this;

		return (
			<Layout style={{ padding: '0 24px 24px' }}>
				<Breadcrumb style={{ margin: '12px 0' }}>
					<Breadcrumb.Item>工具</Breadcrumb.Item>
					<Breadcrumb.Item>生成二维码</Breadcrumb.Item>
				</Breadcrumb>
				<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
					<div>
						<span>匹配文本</span>
						<Input
							type="textarea"
							placeholder="请输入匹配文本"
							value={that.props.regularStore.regularText}
							onChange={(e) => that._onChangeRegularText(e)}
						/>
					</div>
					<div>
						<span>正则规则</span>
						<Input
							placeholder="请输入正则规则"
							value={that.props.regularStore.regularRule}
							onChange={(e) => that._onChangeRegularRule(e)}
						/>
					</div>
					<Button type="primary" onClick={() => that._onChangeRegularResult()}>
						点击测试
					</Button>
					<div>
						<span>匹配结果</span>
						<Alert
							message={
								'共找到' +
								that.props.regularStore.regularResult.length +
								'处匹配:' +
								that.props.regularStore.regularResult.join('  ')
							}
							type="success"
						/>
					</div>
				</Content>
			</Layout>
		);
	}

	_onChangeRegularText(e) {
		let that = this;
		that.props.changeRegularText(e.target.value);
	}

	_onChangeRegularRule(e) {
		let that = this;
		that.props.changeRegularRule(e.target.value);
	}

	_onChangeRegularResult() {
		let that = this;
		let regularRule = new RegExp(that.props.regularStore.regularRule, 'g');
		let regularText = that.props.regularStore.regularText;
		let matchResult = regularText.match(regularRule) || [];

		let result = matchResult.filter(n => {
			return n;
		});

		if (result && result.length > 0) {
			that.props.changeRegularResult(result);
		} else {
			that.props.changeRegularResult([]);
		}
	}
}
