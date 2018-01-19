import { store, storeActionType, storeDestroy } from 'reduxm';

@store('regularStore', 'change_regularStore')
class regularStore {
	@storeActionType('change_regularText')
	@storeDestroy
	static regularText = '';

	@storeActionType('change_regularRule')
	@storeDestroy
	static regularRule = '';

	@storeActionType('change_regularResult')
	@storeDestroy
	static regularResult = [];
}
