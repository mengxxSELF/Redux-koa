import React, {Component} from 'react'
import {Search} from '../component'
const {miaopai} = require('./server.js')

export default class Main extends Component {
  state = {data: []}
  // 开启搜索
  searchCont () {
    let val = document.querySelector('.search input').value
    // 想server发送请求
    val = 'https://www.miaopai.com/show/RPQhHB4sKzReb9nU0Hi2eoW1utIs6dTomxWcug__.htm'
    miaopai(val).then(data => {
      this.setState({data})
    }).catch(() => {
      this.setState({data: []})
    })
  }
  render () {
    return (
      <div className='main'>
        <Search handleClick={() => this.searchCont()} />
      </div>
    )
  }
}
