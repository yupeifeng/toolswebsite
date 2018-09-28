import { store, storeActionType } from 'reduxm';

@store('webSocketStore', 'change_webSocketStore')
class webSocketStore {
	@storeActionType('change_webSocketText') static webSocketText = '';
}
