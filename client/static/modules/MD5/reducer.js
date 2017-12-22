import { store, storeProps, storeDestroy } from 'reducermanager';

@store('mD5Store')
class MD5Store {
	@storeProps('change_md5String')
	@storeDestroy
	static md5String = '';

	@storeProps('change_md5CodeString')
	@storeDestroy
	static md5CodeString = '';
}
