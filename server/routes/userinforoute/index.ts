import { Router } from 'express';

const router = Router();

router.get('/info', (req, res, next) => {
	let userid = req.query.userid; //get:req.query  post:req.body
	userid ? res.json({ userid: userid }) : next({ error: 'no userid' });
});

export default router;
