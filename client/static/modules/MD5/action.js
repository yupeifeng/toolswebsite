import { Store, action, actionProps } from 'reducermanager';

const mD5Type = Store.getActionType('mD5Store');

@action('mD5Action')
class demo1Action {
	@actionProps('changeMd5String')
	static changeMd5String = md5String => async (dispatch, _this) => {
		dispatch({ type: mD5Type.change_md5String, md5String: md5String });
	};

	@actionProps('changeMd5CodeString')
	static changeMd5CodeString = md5CodeString => async (dispatch, _this) => {
		dispatch({ type: mD5Type.change_md5CodeString, md5CodeString: md5CodeString });
	};
}
