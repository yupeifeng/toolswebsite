import { store, storeActionType } from 'reduxm';

@store('mD5Store', 'change_mD5Store')
class MD5Store {
	@storeActionType('change_md5String') static md5String = '';

	@storeActionType('change_md5CodeString') static md5CodeString = '';
}
