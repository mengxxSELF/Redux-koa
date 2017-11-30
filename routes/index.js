var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('index', {
    title: 'Hello World Koa!'
  });
});

router.get('/api/try', function * () {
  this.body = {
    code: 9999999999999999999
  }
})

router.get('/auth/try', function * () {
  this.body = {
    code: 'usersusersusersusersusersusers'
  }
})


module.exports = router;
