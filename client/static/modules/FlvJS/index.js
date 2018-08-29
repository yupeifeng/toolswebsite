import React from 'react';
import { Breadcrumb, Layout, Button, Input } from 'antd';
import { actionInjection, connectStore } from 'reduxm';
import $script from 'scriptjs';

const { Content } = Layout;

/**
 * FlvJSDemo
 */
@connectStore(['FlvJSStore'], ['FlvJSStore'])
@actionInjection('FlvJSAction')
export default class FlvJSDemo extends React.Component {
	componentDidMount() {
		$script('../../lib/flv.min.js', () => {
			if (flvjs.isSupported()) {
				let videoElement = document.getElementById('videoElement');
				let flvPlayer = flvjs.createPlayer({
					type: 'mp4',
					url: 'http://movie.qianmi.com/movie_1534561213947.mp4'
				});
				this.flvPlayer = flvPlayer;
				flvPlayer.attachMediaElement(videoElement);
				flvPlayer.load();
			}
		});
	}

	render() {
		return (
			<Layout style={{ padding: '0 24px 24px' }}>
				<Breadcrumb style={{ margin: '12px 0' }}>
					<Breadcrumb.Item>工具</Breadcrumb.Item>
					<Breadcrumb.Item>flvJs测试</Breadcrumb.Item>
				</Breadcrumb>
				<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
					<div className="mainContainer">
						<video id="videoElement" className="centeredVideo" controls width="1024" height="576">
							Your browser is too old which doesn't support HTML5 video.
						</video>
					</div>
                    <div className="controls">
                        <Button
                            onClick={() => {
                                if (this.flvPlayer) {
                                    this.flvPlayer.play();
                                }
                            }}>
                            开始
                        </Button>
                        <Button
                            onClick={() => {
                                if (this.flvPlayer) {
                                    this.flvPlayer.pause();
                                }
                            }}>
                            暂停
                        </Button>
                        <Button
                            onClick={() => {
                                if (this.flvPlayer) {
                                    this.flvPlayer.pause();
                                    this.flvPlayer.unload();
                                    this.flvPlayer.detachMediaElement();
                                    this.flvPlayer.destroy();
                                    this.flvPlayer = null;
                                }
                            }}>
                            停止
                        </Button>
                        <Input
                            style={{ width: '100px' }}
                            type="text"
                            value={this.props.FlvJSStore.seekPoint}
                            onChange={e => {
                                this.props.changeStore({
                                    seekPoint: e.target.value || ''
                                });
                            }}
                        />
                        <Button
                            onClick={() => {
                                if (this.flvPlayer) {
                                    this.flvPlayer.currentTime = parseFloat(this.props.FlvJSStore.seekPoint);
                                }
                            }}>
                            跳转
                        </Button>
					</div>
				</Content>
			</Layout>
		);
	}
}
