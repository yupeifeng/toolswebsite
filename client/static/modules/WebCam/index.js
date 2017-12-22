import React from 'react';
import { Layout, Breadcrumb, Button } from 'antd';
import './action';
import { ConnectStore, actionInjection } from 'reducermanager';
import $script from 'scriptjs';

const { Content } = Layout;
/**
 * WebCam
 */
@ConnectStore(['webCamStore'], ['webCamStore'])
@actionInjection('webCamAction')
export default class WebCam extends React.Component {
	componentDidMount() {
		$script('../../lib/webcam.js', () => {
			Webcam.set({
				width: 320,
				height: 240,
				dest_width: 320,
				dest_height: 240,
				image_format: 'jpeg',
				jpeg_quality: 90,
				force_flash: false,
				flip_horiz: true,
				fps: 45
			});
			Webcam.attach('#Webcam');
		});
	}

	render() {
		let that = this;

		return (
			<Layout style={{ padding: '0 24px 24px' }}>
				<Breadcrumb style={{ margin: '12px 0' }}>
					<Breadcrumb.Item>工具</Breadcrumb.Item>
					<Breadcrumb.Item>web拍照</Breadcrumb.Item>
				</Breadcrumb>
				<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
					<div id="Webcam" />
					<Button type="primary" onClick={() => that._getWebcamPic()}>
						点击拍照
					</Button>
					<div>{that.props.webCamStore.imgUrl ? <img src={that.props.webCamStore.imgUrl} /> : null}</div>
				</Content>
			</Layout>
		);
	}

	_getWebcamPic() {
		let that = this;
		Webcam.snap(data_uri => {
			that.props.changeImgUrl(data_uri);
		});
	}
}
