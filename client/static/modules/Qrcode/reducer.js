import { store, storeActionType, storeDestroy } from 'reduxm';

@store('qrcodeStore', 'change_qrcodeStore')
class qrcodeStore {
	@storeActionType('change_qrcodeString')
	@storeDestroy
	static qrcodeString = '';
}
