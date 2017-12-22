import { store, storeProps, storeDestroy } from 'reducermanager';

@store('qrcodeStore')
class qrcodeStore {
	@storeProps('change_qrcodeString')
	@storeDestroy
	static qrcodeString = '';
}
