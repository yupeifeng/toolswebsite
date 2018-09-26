import { Store, action, actionProps } from 'reduxm';
import fetch from 'fetch/fetch';
import ModalTip from 'modalTip';

const webCamType = Store.getActionType('webCamStore');

@action('webCamAction')
class webCamAction {
	@actionProps('changeUploadImgUrl')
	static changeUploadImgUrl = uploadImgUrl => async (dispatch, _this) => {
		dispatch({ type: webCamType.change_uploadImgUrl, uploadImgUrl: uploadImgUrl });
	};

	@actionProps('compareImg')
	static compareImg = (uploadImgUrl, imgUrl) => async (dispatch, _this) => {
		fetch
			.post('/user/compareFace', {
				uploadImgUrl: uploadImgUrl,
				imgUrl: imgUrl
			})
			.then(data => {
				dispatch({ type: webCamType.change_compareResult, compareResult: data });
				dispatch({ type: webCamType.change_isLoading, isLoading: false });
			})
			.catch(e => {
				if (e && e.message) {
					ModalTip.warningTip(e.message || '请求出错');
				} else {
					ModalTip.warningTip('请求出错');
				}
			});
	};

	@actionProps('changeIsLoading')
	static changeIsLoading = isLoading => async (dispatch, _this) => {
		dispatch({ type: webCamType.change_isLoading, isLoading: isLoading });
	};
}
