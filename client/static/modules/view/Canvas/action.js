import { Store, action, actionProps } from 'reduxm';

const CanvasType = Store.getActionType('CanvasStore');

@action('CanvasAction')
class CanvasAction {
	@actionProps('changeCanvasStore')
	static changeCanvasStore = CanvasStore => async (dispatch, _this) => {
		dispatch({ type: CanvasType.change_CanvasStore, CanvasStore: CanvasStore });
	};
}
