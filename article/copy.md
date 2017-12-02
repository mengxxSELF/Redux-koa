
### 一键复制


*

```javascript

let copyUrl = (video) => {
  window.clipboardData.setData("Text", video)
}


~~~
<Button type="primary" data-url={video} onClick={copyUrl}>一键copy 视频地址</Button>
```

报错  

![img](./img/copy.png)
