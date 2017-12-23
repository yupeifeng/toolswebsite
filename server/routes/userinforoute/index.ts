import { Router } from 'express';
import * as rp from 'request-promise-native';

const router = Router();

const compareFace = async params => {
	return rp({
		method: 'POST',
		uri: `http://127.0.0.0:5000/compareFace`,
		body: params,
		json: true
	}).then(data => data);
};

router.get('/info', (req, res, next) => {
	let userid = req.query.userid; //get:req.query  post:req.body
	userid ? res.json({ userid: userid }) : next({ error: 'no userid' });
});

router.post('/compareFace', async (req, res, next) => {
	let result = await compareFace(req.body);
	res.json(result);
});

router.post('/uploadImg', async (req, res, next) => {
	res.json({});
});

export default router;
