import { Router } from 'express';
import userInfoRoute from './userinforoute';

const router = Router();

// api请求允许跨域 | Authorization 验证
router.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Authorization, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
	if (req.method === 'OPTIONS') return res.status(200).end(); //加快响应速度
	next();
});

router.get('/', (req, res, next) => res.render('main'));

router.get('/getInfo', (req, res, next) => res.end('info'));

router.get('/getInfoJson', (req, res, next) =>
	res.json({
		info: 'info'
	})
);

router.use('/user', userInfoRoute);

// api接口不报错,输出json
router.use((err, req, res, next) => {
	console.error('请求方法:', req.method, req.originalUrl);
	console.error('请求参数:', req.method === 'POST' ? req.body : req.query);
	console.error('错误信息:', err);
	res.json(err);
});

export default router;
