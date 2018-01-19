import { store, storeActionType, storeDestroy } from 'reduxm';

@store('webCamStore', 'change_webCamStore')
class webCamStore {
	@storeActionType('change_uploadImgUrl')
	@storeDestroy
	static uploadImgUrl = '';

	@storeActionType('change_compareResult')
	@storeDestroy
	static compareResult = '';

	@storeActionType('change_isLoading')
	@storeDestroy
	static isLoading = false;
}
