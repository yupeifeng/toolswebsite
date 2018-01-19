import { store, storeActionType, storeDestroy } from 'reduxm';

@store('mD5Store', 'change_mD5Store')
class MD5Store {
	@storeActionType('change_md5String')
	@storeDestroy
	static md5String = '';

	@storeActionType('change_md5CodeString')
	@storeDestroy
	static md5CodeString = '';
}
