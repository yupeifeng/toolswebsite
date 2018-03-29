import { store, storeActionType } from 'reduxm';

@store('webCamStore', 'change_webCamStore')
class webCamStore {
	@storeActionType('change_uploadImgUrl') static uploadImgUrl = '';

	@storeActionType('change_compareResult') static compareResult = '';

	@storeActionType('change_isLoading') static isLoading = false;
}
