module.exports = {
  getRecommend: (cont) => {
    let url = `/recommend/${cont}`
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(response => response.json())
      .then(res => {
        resolve(res.data)
      })
      .catch(() => {
        reject('error')
      })
    })
  },
  miaopai: (cont) => {
    console.log('cont', cont)
    // 需要解析URL
    // https://www.miaopai.com/show/RPQhHB4sKzReb9nU0Hi2eoW1utIs6dTomxWcug__.htm
    let reg = /show\/(\S+).htm/
    let really = reg.exec(cont)
    // let end = cont.split('/').pop()
    // let url = `/miaopai/${end}`

    return new Promise((resolve, reject) => {
      fetch(url)
      .then(response => response.json())
      .then(res => {
        resolve(res.data)
      })
      .catch(() => {
        reject('error')
      })
    })
  }
}
