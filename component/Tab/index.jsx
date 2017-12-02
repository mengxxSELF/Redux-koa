import React , {Component} from 'react'
import { Tabs, Icon, Button } from 'antd'
const TabPane = Tabs.TabPane

export default class Tab extends Component{
  copyUrl () {
    let target = this.videoUrl
    // target.select()
    // console.log(document.execCommand('copy', false, null))
    // document.execCommand("Copy")
  }
  render () {
    let {data} = this.props
    return (
      <Tabs defaultActiveKey='1'>
      {
        data.map(({name, video}, index) => {
          return (
            <TabPane tab={<span><Icon type="video-camera" /> {name} </span>} key={index}>
              <p> 视频真实地址 <span ref={ node => this.videoUrl = node }> {video} </span> </p>
              <a href={video} target='_blank'> 链接地址 </a>
              <Button type="primary" data-url={video} onClick={::this.copyUrl}>一键copy 视频地址</Button>
            </TabPane>
          )
        })
      }
      </Tabs>
    )
  }
}
