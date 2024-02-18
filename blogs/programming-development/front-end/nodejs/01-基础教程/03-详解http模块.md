---
title: 03-详解http模块
date: 2023/12/28
---



## http模块介绍

http 模块是 Node.js 官方提供的用来创建 web 服务器的模块

通过 http 模块提供的 **`http.createServer()`** 方法，就能方便的把一台普通的电脑，变成一台 Web 服务器，从而对外提供 Web 资源服务。

在 Node.js 中，**不需要使用 IIS、Apache（针对php） 等第三方 web 服务器软件**（普通的电脑常常安装这些），而是基于 Node.js 提供的 http 模块，通过几行简单的代码，就能轻松的手写一个服务器软件，从而对外提供 web 服务

导入 http 模块创建 Web 服务器：

```javascript
const http = require("http")
```

### 服务器相关的概念

就是互联网上每台计算机的唯一地址，因此 IP 地址具有唯一性。如果把“个人电脑”比作“一台电话”，那么“IP地址”就相当于“电话号码”，只有在知道对方 IP 地址的前提下，才能与对应的电脑之间进行数据通信。

IP 地址的格式：通常用“点分十进制”表示成（`a.b.c.d`）的形式，其中，**a,b,c,d都是 0~255 之间的十进制整数**。例如：用点分十进表示的 IP地址（192.168.1.1）

注意

- 互联网中每台 Web 服务器，都有自己的 IP 地址，如：可以在 Windows 的终端中运行 ping www.baidu.com 命令，即可查看到百度服务器的 IP 地址

- 在开发期间，自己的电脑既是一台服务器，也是一个客户端，为了方便测试，可以在自己的浏览器中输入 127.0.0.1 这个 IP 地址，就能把自己的电脑当做一台服务器进行访问了

### 域名和域名服务器

尽管 IP 地址能够唯一地标记网络上的计算机，但IP地址是一长串数字，不直观，而且不便于记忆，于是人们又发明了另一套字符型的地址方案，即所谓的**域名（Domain Name）地址**。

**IP地址和域名是一一对应的关系**，这份对应关系存放在一种叫做**域名服务器(DNS，Domain name server)**的电脑中。使用者只需通过好记的域名访问对应的服务器即可，对应的转换工作由域名服务器实现。因此，域名服务器就是提供 IP 地址和域名之间的转换服务的服务器。

注意

- 单纯使用 IP 地址，互联网中的电脑也能够正常工作。但是有了域名的加持，能让互联网的世界变得更加方便
- 在开发测试期间， 127.0.0.1对应的域名是 localhost，都代表自己的这台电脑，在使用效果上没有任何区别

### 端口号

计算机中的端口号，就好像是现实生活中的门牌号一样。通过门牌号，外卖小哥可以在整栋大楼众多的房间中，准确把外卖送到你的手中。

同样的道理，在一台电脑中，可以运行成百上千个 web 服务。每个 web 服务都对应一个唯一的端口号。客户端发送过来的网络请求，通过端口号，可以被准确地交给对应的 web 服务进行处理。

注意

- 每个端口号不能同时被多个 web 服务占用

- 在实际应用中，URL 中的 80 端口可以被省略

## 创建最基本的 web 服务器

### **基本步骤**

1. 导入 http 模块
2. 创建 web 服务器实例
3. `server.on()` 为服务器实例绑定 request事件，监听客户端的请求
4. 启动服务器

```javascript
// 1. 导入 http 模块
const http = require('http')

// 2. 创建 web 服务器实例
const server = http.createServer()

// 3. 为服务器实例绑定 request 事件，监听客户端的请求
server.on('request', function (req, res) {
  console.log('Someone visit our web server.')
})

// 4. 启动服务器
server.listen(8080, function () {  
  console.log('server running at http://127.0.0.1:8080')
})

```

### req请求对象

只要服务器接收到了客户端的请求，就会调用通过 server.on() 为服务器绑定的 request 事件处理函数

### res响应对象

在服务器 request 事件处理函数中，如果想访问与服务器相关的数据或属性，通过`res.end(data）` 方法响应。

```javascript
server.on('request', (req, res) => {
  // req.url 是客户端请求的 URL 地址
  const url = req.url
  // req.method 是客户端请求的 method 类型
  const method = req.method
  const str = `Your request url is ${url}, and request method is ${method}`
  console.log(str)
  
  // 调用 res.end() 方法，向客户端响应一些内容
  res.end(str)
})

```

### 解决中文乱码问题

当调用 res.end() 方法，向客户端发送中文内容的时候，会出现乱码问题，此时，需要手动设置内容的编码格式

```javascript
server.on('request', (req, res) => {
  // 定义一个字符串，包含中文的内容
  const str = `您请求的 URL 地址是 ${req.url}，请求的 method 类型为 ${req.method}`
  
  // 调用 res.setHeader() 方法，设置 Content-Type 响应头，解决中文乱码的问题
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  
  // res.end() 将内容响应给客户端
  res.end(str)
})

```

### **实例**

根据不同的 url 响应不同的 html 内容

**步骤**

1. 获取请求的 url地址
2. 设置默认的响应内容为 404 Not found
3. 判断用户请求的是否为 / 或 /index.html 首页
4. 判断用户请求的是否为 /about.html 关于页面
5. 设置 Content-Type 响应头，防止中文乱码
6. 使用 res.end() 把内容响应给客户端

```javascript
const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
  // 1. 获取请求的 url 地址
  const url = req.url
  
  // 2. 设置默认的响应内容为 404 Not found
  let content = '<h1>404 Not found!</h1>'
  
  // 3. 判断用户请求的是否为 / 或 /index.html 首页
  // 4. 判断用户请求的是否为 /about.html 关于页面
  if (url === '/' || url === '/index.html') {
    content = '<h1>首页</h1>'
  } else if (url === '/about.html') {
    content = '<h1>关于页面</h1>'
  }
  
  // 5. 设置 Content-Type 响应头，防止中文乱码
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  
  // 6. 使用 res.end() 把内容响应给客户端
  res.end(content)
})

server.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})


```

