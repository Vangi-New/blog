---
title: 01-创建Express项目
date: 2024/07/30
---



## 创建Express项目

### 安装

首先假定你已经安装了 [Node.js](https://nodejs.org/)，接下来为你的应用创建一个目录，然后进入此目录并将其作为当前工作目录。

```bash
$ mkdir myapp
$ cd myapp
```

通过 `npm init` 命令为你的应用创建一个 `package.json` 文件。 欲了解 `package.json` 是如何起作用的，请参考 [Specifics of npm’s package.json handling](https://docs.npmjs.com/files/package.json).

```bash
$ npm init
```

此命令将要求你输入几个参数，例如此应用的名称和版本。 你可以直接按“回车”键接受大部分默认设置即可，下面这个除外：

```bash
entry point: (index.js)
```

键入 `app.js` 或者你所希望的名称，这是当前应用的入口文件。如果你希望采用默认的 `index.js` 文件名，只需按“回车”键即可。

接下来在 `myapp` 目录下安装 Express 并将其保存到依赖列表中。如下：

```bash
$ npm install express --save
```

如果只是临时安装 Express，不想将它添加到依赖列表中，可执行如下命令：

```bash
$ npm install express --no-save
```

### HelloWorld项目

创建app.js文件,编写下列代码

```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

执行命令启动web服务器 

`node app.js`





