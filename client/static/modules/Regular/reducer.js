import { store, storeProps, storeDestroy } from 'reducermanager';

@store('regularStore')
class regularStore {
	@storeProps('change_regularText')
	@storeDestroy
	static regularText = '';

	@storeProps('change_regularRule')
	@storeDestroy
	static regularRule = '';

	@storeProps('change_regularResult')
	@storeDestroy
	static regularResult = [];
}
