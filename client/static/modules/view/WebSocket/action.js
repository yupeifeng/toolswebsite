import { Store, action, actionProps } from 'reduxm';

const webSocketType = Store.getActionType('webSocketStore');

@action('webSocketAction')
class webSocketAction {
	@actionProps('changeWebSocketStore')
	static changeWebSocketStore = webSocketStore => async (dispatch, _this) => {
		dispatch({ type: webSocketType.change_webSocketStore, webSocketStore: webSocketStore });
	};
}
