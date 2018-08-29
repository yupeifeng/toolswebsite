import { store, storeActionType } from 'reduxm';

@store('FlvJSStore', 'change_FlvJSStore')
class FlvJSStore {
	@storeActionType('change_seekPoint') static seekPoint;
}
