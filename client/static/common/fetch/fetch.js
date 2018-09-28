import 'whatwg-fetch';
import * as Immutable from 'immutable';
import ModalTip from 'modalTip';

export default class request {
	static option = Immutable.fromJS({
		headers: {
			'Content-Type': 'application/json',
			Accept: '*/*'
		},
		mode: 'cors',
		credentials: 'include'
	});

	static buildUrl(url, params) {
		if (!params) return url;
		let result = request.getParamsArray(params);
		let prefix = '?';
		if (url.indexOf('?') > -1) {
			prefix = '&';
		}

		return url + prefix + result.join('&');
	}

	static getParamsArray(params) {
		let result = new Array();
		if (!params) return result;
		Object.keys(params).forEach(key => {
			if (params.hasOwnProperty(key)) {
				result.push(key + '=' + params[key]);
			}
		});
		return result;
	}

	static optResponse(res) {
		if (res.ok && res.status === 200) {
			return res.json();
		}
	}

	static get(url, params) {
		let _opt = request.option.toJS();
		_opt.headers.Authorization = '';
		_opt.method = 'GET';

		url = request.buildUrl(url, params);

		return fetch(url, _opt)
			.then(res => {
				return request.optResponse(res);
			})
			.then(data => {
				if (data.result == 'success') {
					return Promise.resolve(data.data);
				} else {
					throw new Error(data.data);
				}
			})
			.catch(e => {
				if (e instanceof Error) {
					throw new Error(e.message);
				}

				if (e.message === 'Failed to fetch') {
					ModalTip.warningTip('网络异常，请稍候再试');
				}
			});
	}

	static post(url, params) {
		let _opt = request.option.toJS();
		_opt.headers.Authorization = '';
		_opt.method = 'POST';

		if (params) {
			_opt.body = JSON.stringify(params);
		}

		return fetch(url, _opt)
			.then(res => {
				return request.optResponse(res);
			})
			.then(data => {
				if (data.result == 'success') {
					return Promise.resolve(data.data);
				} else {
					throw new Error(data.data);
				}
			})
			.catch(e => {
				if (e instanceof Error) {
					throw new Error(e.message);
				}

				if (e.message === 'Failed to fetch') {
					ModalTip.warningTip('网络异常，请稍候再试');
				}
			});
	}
}
