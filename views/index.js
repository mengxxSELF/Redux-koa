import React, {Component} from 'react'
import {render} from 'react-dom'
import Main from '../component/main.js'

let root = document.getElementById('app')

class Cont extends Component {
  componentDidMount () {
    // 设置页面最大宽度
    let screenWidth = document.documentElement.clientWidth
    let designWidth = 1920
    document.documentElement.style.fontSize = `${screenWidth / designWidth * 100}px`
  }
  render () {
    return (
       <div> <Main /> </div>
    )
  }
}

render(<Cont />, root)
