import { store, storeProps, storeDestroy } from 'reducermanager';

@store('webCamStore')
class webCamStore {
	@storeProps('change_imgUrl')
	@storeDestroy
	static imgUrl = '';
}
