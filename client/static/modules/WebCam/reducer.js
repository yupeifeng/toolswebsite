import { store, storeProps, storeDestroy } from 'reducermanager';

@store('webCamStore')
class webCamStore {
	@storeProps('change_uploadImgUrl')
	@storeDestroy
	static uploadImgUrl = '';

	@storeProps('change_compareResult')
	@storeDestroy
	static compareResult = '';

	@storeProps('change_isLoading')
	@storeDestroy
	static isLoading = false;
}
