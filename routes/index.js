const router = require('koa-router')()
const {miaopai} = require('../utils/api.js')
const req = require('../utils/req.js')

router.get('/', function *(next) {
  yield this.render('index', {
    title: 'Hello World Koa!'
  });
});

// 解析秒拍视频真实地址
router.get('/miaopai', function * () {
  let {video} = this.query
  let url = `${miaopai}${video}.json`
  let code
  let data
  try {
    code = 200
    let {result} = yield req({url}).then(res => res) || {}
    data = result.map(({host, name, path, scheme}) => {
      return {
        name,
        video: `${scheme}${host}${path}`
      }
    })
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
