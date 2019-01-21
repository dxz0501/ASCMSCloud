const router = require('koa-router')();

const article = require('./controller/article.js');
const video = require('./controller/video.js');
const zhihu = require('./controller/zhihu.js');
// people
router.get('/api/article', article.getList);
router.post('/api/article', article.create);
// router.post('/article/delete/:id', article.destroy);
// router.post('/article/update/:id', article.update);

router.get('/api/video', video.spider);

router.get('/api/zhihu', zhihu.getData);

// frontend page render
// router.get('/', async (ctx, next) => {
//   console.log('-----');
//   await ctx.render('index');
// });

module.exports = router;