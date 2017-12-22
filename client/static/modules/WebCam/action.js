import { Store, action, actionProps, storeProps, storeDestroy } from 'reducermanager';

const webCamType = Store.getActionType('webCamStore');

@action('webCamAction')
class webCamAction {
	@actionProps('changeImgUrl')
	static changeImgUrl = imgUrl => async dispatch => {
		dispatch({ type: webCamType.change_imgUrl, imgUrl: imgUrl });
	};
}
