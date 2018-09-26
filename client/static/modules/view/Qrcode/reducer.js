import { store, storeActionType } from 'reduxm';

@store('qrcodeStore', 'change_qrcodeStore')
class qrcodeStore {
	@storeActionType('change_qrcodeString') static qrcodeString = '';
}
