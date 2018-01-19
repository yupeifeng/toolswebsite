import React from 'react';
import { Layout, Breadcrumb, Button, Icon, Upload, Alert, Spin } from 'antd';
import './action';
import { connectStore, actionInjection } from 'reduxm';
import $script from 'scriptjs';
import modalTip from 'modalTip';

const { Content } = Layout;
/**
 * WebCam
 */
@connectStore(['webCamStore'], ['webCamStore'])
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
					<Breadcrumb.Item>人脸对比</Breadcrumb.Item>
				</Breadcrumb>
				<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
					<Spin tip="Loading..." spinning={that.props.webCamStore.isLoading}>
						<div>
							<Alert message="请尽量贴近人脸！！！！！！！！！！！！" type="warning" />
						</div>
						<Upload
							className="avatar-uploader"
							name="avatar"
							showUploadList={false}
							action="/user/uploadImg"
							beforeUpload={file => that._beforeUpload(file)}
							onChange={info => that._handleChange(info)}>
							{that.props.webCamStore.uploadImgUrl ? (
								<img src={that.props.webCamStore.uploadImgUrl} alt="" className="avatar" />
							) : (
								<Icon type="plus" className="avatar-uploader-trigger" />
							)}
						</Upload>
						<div id="Webcam" />
						<Button type="primary" onClick={() => that._getWebcamploadImgUrl()}>
							拍照
						</Button>
						<Button type="primary" onClick={() => that._getWebcamPic()}>
							人脸对比
						</Button>
						<div>
							<span>匹配结果</span>
							<Alert message={that.props.webCamStore.compareResult} type="success" />
						</div>
					</Spin>
				</Content>
			</Layout>
		);
	}

	static componentWillUnmount() {
		Webcam.reset('#Webcam');
	}

	_beforeUpload(file) {
		let isJPG = file.type === 'image/jpeg';
		if (!isJPG) {
			modalTip.successTip('You can only upload JPG file!');
		}
		const isLt2M = file.size / 1024 / 1024 < 2;
		if (!isLt2M) {
			modalTip.successTip('Image must smaller than 2MB!');
		}
		return isJPG && isLt2M;
	}

	_handleChange(info) {
		let that = this;
		if (info.file.status === 'done') {
			let img = info.file.originFileObj;
			let reader = new FileReader();
			reader.addEventListener('load', () => {
				that.props.changeUploadImgUrl(reader.result);
			});
			reader.readAsDataURL(img);
		}
	}

	_getWebcamploadImgUrl() {
		let that = this;
		Webcam.snap(data_uri => {
			that.props.changeUploadImgUrl(data_uri);
		});
	}

	_getWebcamPic() {
		let that = this;
		Webcam.snap(data_uri => {
			if (!that.props.webCamStore.uploadImgUrl) {
				modalTip.successTip('请拍取对比图片或者上传图片');
				return;
			}

			if (!data_uri) {
				modalTip.successTip('请打开摄像头');
				return;
			}

			that.props.changeIsLoading(true);
			that.props.compareImg(that.props.webCamStore.uploadImgUrl, data_uri);
		});
	}
}
