import { Store, action, actionProps, storeProps, storeDestroy } from 'reducermanager';
import fetch from 'fetch/fetch';
import modalTip from 'modalTip';

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
			.then(res => {
				dispatch({ type: webCamType.change_compareResult, compareResult: res.result });
			})
			.catch(e => {
				modalTip.warningTip(e.message);
			});
	};
}
