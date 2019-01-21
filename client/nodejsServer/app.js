const Koa = require('koa');
const app = new Koa();
const Config = require('./config/config');
const bodypaser = require('koa-body');
const onerror = require('koa-onerror');
const middleware = require('koa-webpack');
const webpackDevConf = require('./build/webpack.dev.conf');
const history = require('koa2-connect-history-api-fallback');
const koaStatic = require('koa-static');
const opn = require('opn');
//定时器
const schedule = require('node-schedule')
const zhihu = require('./server/controller/zhihu.js')
const router = require('./server/router.js')
    //错误信息处理
onerror(app);
app.use(history({
    whiteList: ['/api/*'],
    verbose: true //打出转发日志
}));
if (app.env == 'development') {
    const webpackDevConf = require('./build/webpack.dev.conf');

    // 开发环境使用webpack编译和热加载插件
    app.use(middleware({
        config: webpackDevConf,
        dev: {
            stats: { //打出日志的颜色
                colors: true
            }
        }
    }));
    app.use(koaStatic(__dirname + '/static'));
} else {
    app.use(koaStatic(__dirname + '/static'));
}

//每天的凌晨1点1分30秒触发
// schedule.scheduleJob('30 1 1 * * *', function() {
//     console.log('开始爬取数据.......');
//     zhihu.crawler();
//     console.log('结束爬取数据.......');
// });


//控制台打印请求信息
app.use(async(ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(bodypaser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(Config.node.port, () => {
    // opn(`http://127.0.0.1:${Config.node.port}`);
});