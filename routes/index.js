const router = require('koa-router')()
const {miaopai} = require('../utils/api.js')
const req = require('../utils/req.js')

router.get('/', function *(next) {
  yield this.render('index', {
    title: 'Hello World Koa!'
  });
});

// 解析秒拍视频真实地址
router.get('/miaopai/:cont', function * () {
  let {cont} = this.params
  let url = `${miaopai}${cont}`
  let code
  let data
  try {
    code = 200
    data = yield req({url}).then(res => res)
  } catch (e) {
    code = 500
    data = []
  } finally {
    this.body = {
      code,
      data
    }
  }
})

module.exports = router;
