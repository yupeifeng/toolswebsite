import React from 'react';
import { Layout, Breadcrumb, Input, Button, Icon } from 'antd';
import modalTip from 'modalTip';
import './action';
import { ConnectStore, actionInjection } from 'reducermanager';
import $ from 'jquery';
import qrcode from 'qrcode';

const { Content } = Layout;

/**
 * Qrcode
 */
@ConnectStore(['qrcodeStore'], ['qrcodeStore'])
@actionInjection('qrcodeAction')
export default class Qrcode extends React.Component {
	componentDidMount() {
		$('#saveQrCode').click(() => {
			let canvas = $('#qrcode').get(0);
			try {
				let blob = canvas.msToBlob();
				navigator.msSaveBlob(blob, 'qrcode.jpg');
			} catch (e) {
				//如果为其他浏览器，使用base64转码下载
				let url = canvas.toDataURL('image/jpeg');
				$('#download')
					.attr('href', url)
					.get(0)
					.click();
			}
		});
	}

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
						<span>需要生成二维码地址</span>
						<Input
							placeholder="请输入需要生成二维码地址"
							value={that.props.qrcodeStore.qrcodeString}
							onChange={(e) => that._onChangeQrcodeString(e)}
						/>
					</div>
					<Button type="primary" onClick={() => that._createQrcode()}>
						点击生成
					</Button>
					<div>
						<div>二维码图片</div>
						<canvas id="qrcode" width="116" height="116" />
						<a id="download" download="qrcode.jpg" />
						<a id="saveQrCode">
							<Icon type="arrow-down" />下载二维码
						</a>
					</div>
				</Content>
			</Layout>
		);
	}

	_onChangeQrcodeString(e) {
		let that = this;
		that.props.changeQrcodeString(e.target.value);
	}

	_createQrcode() {
		let that = this;

		let canvas = document.getElementById('qrcode');
		console.log(that.props.qrcodeStore.qrcodeString);

		qrcode.toCanvas(canvas, that.props.qrcodeStore.qrcodeString, error => {
			modalTip.successTip('二维码生成成功');
		});
	}
}
