---
title: 06-Epress
date: 2023/12/28
---



## 简介

Express 是基于 Node.js 平台，快速、开放、极简的 Web 开发框架

通俗的理解：Express 的作用和 Node.js 内置的 http 模块类似，是专门用来创建 Web 服务器的。

本质就是一个 npm 上的第三方包，提供了快速创建 Web 服务器的便捷方法

中文官网 http://www.expressjs.com.cn/

> 不使用 Express 能否创建 Web 服务器？
> 能，使用 Node.js 提供的原生 http 模块即可
> 有了 http 内置模块，为什么还有用 Express？
> http 内置模块用起来很复杂，开发效率低；
> Express 是基于内置的 http 模块进一步封装出来的，能够极大的提高开发效率
> http 内置模块与 Express 是什么关系？
> 类似于浏览器中 Web API 和 jQuery 的关系。后者是基于前者进一步封装出来的

对于前端程序员来说，最常见的两种服务器，分别是

Web 网站服务器：专门对外提供 Web 网页资源的服务器

API 接口服务器：专门对外提供 API 接口的服务器

使用 Express，我们可以方便、快速的**创建 Web 网站的服务器或 API 接口的服务器**

### Express 的基本使用

1. 在项目所处的目录中安装

   ```bash
   npm i express@4.17.1
   ```

2. 创建基本的 Web 服务器

   ```javascript
   const express = require('express);	// 导入express
                           
   const app = express();							// 创建web服务器
   
   app.listen(80, () => {							// 调用回调函数，listen() 启动服务器
   	console.log(''express server running at http://127.0.0.1)
   });
   ```

3. 处理请求

   ```javascript
   // 监听 GET 请求
   app.get('url', function(req, res) { /*处理函数*/ })
   
   // 监听 POST 请求
   app.post('url', function(req, res) { /*处理函数*/ })
   
   app.post('url', function(req, res) {
     // 通过 req.query 对象，可以访问到客户端通过查询字符串的形式，发送到服务器的参数
     console.log(req.query)
     
     // 通过 req.params 对象，可以访问到 URL 中，通过 : 匹配到的动态参数
     console.log(req.parms)
     
     // 通过 res.send()方法，把处理好的内容发送给客户端
     res.send(data);
   })
   
   
   ```

   ```javascript
   // 1. 导入 express
   const express = require('express')
   // 2. 创建 web 服务器
   const app = express()
   
   // 4. 监听客户端的 GET 和 POST 请求，并向客户端响应具体的内容
   app.get('/user', (req, res) => {
     // 调用 express 提供的 res.send() 方法，向客户端响应一个  JSON 对象
     res.send({ name: 'zs', age: 20, gender: '男' })
   })
   app.post('/user', (req, res) => {
     // 调用 express 提供的 res.send() 方法，向客户端响应一个  文本字符串
     res.send('请求成功')
   })
   app.get('/', (req, res) => { 
     // 通过 req.query 可以获取到客户端发送过来的 查询参数 ‘/’表示ip根目录
     // 注意：默认情况下，req.query 是一个空对象
     console.log(req.query)
     res.send(req.query)
   })
   
   
   // 注意：这里的 :id 是一个动态的参数
   app.get('/user/:id/:username', (req, res) => {
     // req.params 是动态匹配到的 URL 参数，默认也是一个空对象
     console.log(req.params)
     res.send(req.params)
   })
   
   // 3. 启动 web 服务器
   app.listen(80, () => {
     console.log('express server running at http://127.0.0.1')
   })
   
   ```

**注意： :id 是一个动态的参数，‘：’是固定的写法，可以有多个参数，其中id 是该参数名字，而req.params可以动态匹配该参数的值。**

### 托管静态资源

express 提供了一个非常好用的函数，叫做 express.static()，通过它，我们可以非常方便地创建一个静态资源服务器，例如，通过如下代码就可以将 public 目录下的图片、CSS 文件、JavaScript 文件对外开放访问了

```javascript
app.use(express.static('public'))
```

 现在，你就可以访问 public 目录中的所有文件了
 http://localhost/images/bg.jpg
 http://localhost/css/style.css
 http://localhost/js/login.js

注意：Express 在指定的静态目录中查找文件，对外提供资源访问路径，目录名不会出现在 URL 中

#### **托管多个静态资源目录**

访问静态资源文件时，express.static() 函数会根据目录的添加顺序查找所需的文件，如下同名先访问public文件夹

```javascript
app.use(express.static('public'))
app.use(express.static('files'))
```

#### **挂载路径前缀**

如果希望在托管的静态资源访问路径之前，挂载路径前缀，则可以使用如下的方式

```javascript
app.use('/public', express.static('public'))
```

 现在，你就可以通过带有 /public 前缀地址来访问 public 目录中的文件了
 http://localhost:3000/public/images/kitten.jpg
 http://localhost:3000/public/css/style.css
 http://localhost:3000/public/js/app.js

```javascript
const express = require('express')
const app = express()

// 在这里，调用 express.static() 方法，快速的对外提供静态资源
app.use('/files', express.static('./files'))
app.use(express.static('./clock'))

app.listen(80, () => {
  console.log('express server running at http://127.0.0.1')
})
```

### nodemon

在编写调试 Node.js 项目的时候，如果修改了项目的代码，需要频繁的手动重新启动服务，使用 [nodemon](https://www.npmjs.com/package/nodemon)  工具，它能够监听项目文件的变动，当代码被修改后，nodemon 会自动重启项目，极大方便了开发和调试。

```bash
npm i -g nodemon
```

现在，我们可以将 node 命令替换为 **nodemon** 命令，使用 nodemon app.js 来启动项目。

```bash
nodemon app.js
```

## 路由

### 路由的使用

### 模块化路由

## 中间件

### 中间件初体验

### 中间件的分类

### 自定义中间件

## 使用 Express 写接口

### 接口的跨域问题

### 使用 CORS 中间件解决跨域问题

#### CROS请求分类

### JSONP 接口（有缺陷只支持GET）

<https://blog.csdn.net/m0_52316372/article/details/124759186>

<https://blog.csdn.net/m0_52316372/article/details/124759435?spm=1001.2014.3001.5502>