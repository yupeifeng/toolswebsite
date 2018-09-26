import { Store, action, actionProps } from 'reduxm';

const qrcodeType = Store.getActionType('qrcodeStore');

@action('qrcodeAction')
class qrcodeAction {
	@actionProps('changeQrcodeString')
	static changeQrcodeString = qrcodeString => async (dispatch, _this) => {
		dispatch({ type: qrcodeType.change_qrcodeString, qrcodeString: qrcodeString });
	};
}
