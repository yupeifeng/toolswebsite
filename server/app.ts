import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';

import routers from './routes';

const app = express();

/*前端静态资源文件设置*/
app.use(express.static(path.join(__dirname, '../client/static')));
app.set('views', path.join(__dirname, '../client/WEB-INF'));
app.set('view engine', '.html');
app.engine('.html', require('ejs').__express);

/*console日志*/
app.use(morgan('dev'));

/*请求解析*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*cookie解析*/
app.use(cookieParser());

app.use(routers);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err['status'] = 404;
	next(err);
});

// error handler
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	res.status(err.status || 500);
	res.render('error', { message: 'Not Found' });
});

module.exports = app;
