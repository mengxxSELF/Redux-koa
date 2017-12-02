import React, {Component} from 'react'
import {Search, Tab} from '../component'
const {miaopai} = require('./server.js')

export default class Main extends Component {
  state = {data: [], type: null}
  // 开启搜索
  searchCont () {
    let val = document.querySelector('.search input').value
    val = 'http://www.miaopai.com/show/lbjtT5NJF4tDW2Zh1lEXlREkX5HVAXqrvRJL4w__.htm'
    // 想server发送请求
    miaopai(val).then(data => {
      this.setState({data, type: 'tab'})
    }).catch(() => {
      this.setState({data: []})
    })
  }
  render () {
    let {data, type} = this.state
    return (
      <div className='main'>
        <Search handleClick={() => this.searchCont()} />
        {
          type === 'tab'&& data && data.length && <Tab data={data} />
        }
      </div>
    )
  }
}
