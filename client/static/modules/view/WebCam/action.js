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
		let faceMatchResult = {};
		try {
			faceMatchResult = await fetch.post('/user/faceMatch', { image: [uploadImgUrl, imgUrl] });
		} catch (e) {
			if (e && e.message) {
				ModalTip.warningTip(e.message || '请求出错');
			} else {
				ModalTip.warningTip('请求出错');
			}
			dispatch({ type: webCamType.change_isLoading, isLoading: false });
			return;
		}
		dispatch({ type: webCamType.change_isLoading, isLoading: false });
		dispatch({
			type: webCamType.change_compareResult,
			compareResult:
				faceMatchResult.result && faceMatchResult.result.score
					? `相似度：${faceMatchResult.result && faceMatchResult.result.score}`
					: '识别失败'
		});
	};

	@actionProps('changeIsLoading')
	static changeIsLoading = isLoading => async (dispatch, _this) => {
		dispatch({ type: webCamType.change_isLoading, isLoading: isLoading });
	};
}
