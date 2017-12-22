import { Store, action, actionProps } from 'reducermanager';

const qrcodeType = Store.getActionType('qrcodeStore');

@action('qrcodeAction')
class qrcodeAction {
	@actionProps('changeQrcodeString')
	static changeQrcodeString = qrcodeString => async dispatch => {
		dispatch({ type: qrcodeType.change_qrcodeString, qrcodeString: qrcodeString });
	};
}
