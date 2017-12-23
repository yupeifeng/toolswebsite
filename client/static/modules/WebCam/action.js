import { Store, action, actionProps } from 'reducermanager';
import fetch from 'fetch/fetch';
import ModalTip from 'modalTip';

const webCamType = Store.getActionType('webCamStore');

@action('webCamAction')
class webCamAction {
	@actionProps('changeUploadImgUrl')
	static changeUploadImgUrl = uploadImgUrl => async dispatch => {
		dispatch({ type: webCamType.change_uploadImgUrl, uploadImgUrl: uploadImgUrl });
	};

	@actionProps('compareImg')
	static compareImg = (uploadImgUrl, imgUrl) => async dispatch => {
		fetch
			.post('/user/compareFace', {
				uploadImgUrl: uploadImgUrl,
				imgUrl: imgUrl
			})
			.then(data => {
				dispatch({ type: webCamType.change_compareResult, compareResult: data });
			})
			.catch(e => {
				if (e && e.message) {
					ModalTip.warningTip(e.message || '请求出错');
				} else {
					ModalTip.warningTip('请求出错');
				}
			});
	};
}
