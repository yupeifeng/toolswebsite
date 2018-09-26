import { store, storeActionType } from 'reduxm';

@store('regularStore', 'change_regularStore')
class regularStore {
	@storeActionType('change_regularText') static regularText = '';

	@storeActionType('change_regularRule') static regularRule = '';

	@storeActionType('change_regularResult') static regularResult = [];
}
