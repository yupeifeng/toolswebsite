import { Store, action, actionProps } from 'reducermanager';

const regularType = Store.getActionType('regularStore');

@action('regularAction')
class regularAction {
	@actionProps('changeRegularText')
	static changeRegularText = regularText => async dispatch => {
		dispatch({ type: regularType.change_regularText, regularText: regularText });
	};

	@actionProps('changeRegularRule')
	static changeRegularRule = regularRule => async dispatch => {
		dispatch({ type: regularType.change_regularRule, regularRule: regularRule });
	};

	@actionProps('changeRegularResult')
	static changeRegularResult = regularResult => async dispatch => {
		dispatch({ type: regularType.change_regularResult, regularResult: regularResult });
	};
}
