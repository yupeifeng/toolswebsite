import { Router } from 'express';
import * as rp from 'request-promise-native';
import * as qs from 'querystring';

const router = Router();

const getToken = params => {
	return rp({
		method: 'GET',
		uri: `http://aip.baidubce.com/oauth/2.0/token?${qs.stringify(params)}`,
		json: true
	}).then(data => data);
};

const faceMatch = (params, access_token) => {
	return rp({
		method: 'POST',
		uri: `https://aip.baidubce.com/rest/2.0/face/v3/match?access_token=${access_token}`,
		body: params,
		json: true
	}).then(data => data);
};

router.get('/info', (req, res, next) => {
	let userid = req.query.userid; //get:req.query  post:req.body
	userid
		? res.json({
				result: 'success',
				data: { userid: userid }
			})
		: next({
				result: 'fail',
				message: 'no userid'
			});
});

router.post('/uploadImg', async (req, res, next) => {
	res.json({});
});

router.post('/faceMatch', async (req, res, next) => {
	let image = req.body.image;

	let result = await getToken({
		grant_type: 'client_credentials',
		client_id: '1mpld4x6WEKylAE8Fi5vGAl5',
		client_secret: '9S7uHpdwwNik8DZxqAo3jkZ4qXbibR2O'
	});

	let params = [];
	image.forEach(e => {
		params.push({
			image: e.split('data:image/jpeg;base64,')[1],
			image_type: 'BASE64',
			liveness_control: 'NORMAL'
		});
	});

	let matchResult = await faceMatch(params, result.access_token);

	matchResult
		? res.json({
				result: 'success',
				data: matchResult
			})
		: next({
				result: 'fail',
				message: 'faceMatch error'
			});
});

export default router;
