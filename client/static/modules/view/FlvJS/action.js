import { Store, action, actionProps } from 'reduxm';

const FlvJSType = Store.getActionType('FlvJSStore');

@action('FlvJSAction')
class FlvJSAction {
	@actionProps('changeStore')
	static changeStore = FlvJSStore => async (dispatch, _this) => {
		dispatch({ type: FlvJSType.change_FlvJSStore, FlvJSStore: FlvJSStore });
	};
}
