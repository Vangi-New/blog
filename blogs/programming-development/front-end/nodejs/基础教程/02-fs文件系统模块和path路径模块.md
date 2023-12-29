---
title: 02-fs文件系统模块和path路径模块
date: 2023/12/28
---



## fs 文件系统模块

fs 模块是 Node.js 官方提供的、用来操作文件的模块。提供了一系列的方法和属性，用来满足对文件的操作需求

如果要在 JavaScript 代码中，使用 fs 模块来操作文件，则需要使用如下的方式先导入它

```js
const fs = require("fs")
```

### `fs.readFile(path[, option], callback)`

`fs.readFile(path[, option], callback)`读取指定文件中的内容

`path` 必选参数，字符串，文件路径

`option` 可选参数，设置字符集

`callback` 必选参数，文件读取完成后的回调函数

```javascript
// 1. 导入 fs 模块，来操作文件
const fs = require('fs')

// 2. 调用 fs.readFile() 方法读取文件
//    参数1：读取文件的存放路径
//    参数2：读取文件时候采用的编码格式，一般默认指定 utf8
//    参数3：回调函数，拿到读取失败和成功的结果  err  dataStr
fs.readFile('./files/1.txt', 'utf8', function(err, dataStr) {
  
  // 2.1 打印失败的结果
  // 如果读取成功，则 err 的值为 null
  // 如果读取失败，则 err 的值为 错误对象，dataStr 的值为 undefined
  console.log(err)
  console.log('-------')
  
  // 2.2 打印成功的结果
  console.log(dataStr)
})
//一般逻辑可以这么写：
fs.readFile('./files/11.txt', 'utf8', function(err, dataStr) {
  if (err) {
    return console.log('读取文件失败！' + err.message)
  }
  console.log('读取文件成功！' + dataStr)
})

```

### `fs.writeFile(path, data[, option], callback)` 

`fs.writeFile(path, data[, option], callback)` 向指定的文件中写入内容

`path` 必选参数，字符串，文件路径

`data` 必选参数，写入的内容

`option` 可选参数，设置字符集，默认值是 utf8

`callback` 必选参数，文件写入完成后的回调函数

**注意：写入会覆盖原内容**

```javascript
const fs = require('fs')

// 2. 调用 fs.writeFile() 方法，写入文件的内容
//    参数1：表示文件的存放路径
//    参数2：表示要写入的内容
//    参数3：回调函数
fs.writeFile('./files/3.txt', 'ok123', function(err) {
  // 2.1 如果文件写入成功，则 err 的值等于 null
  // 2.2 如果文件写入失败，则 err 的值等于一个 错误对象
  // console.log(err)
//判断是否写入成功
  if (err) {
    return console.log('文件写入失败！' + err.message)
  }
  console.log('文件写入成功！')
})

```

**省略第三个参数则默认为UTF8格式**

**注意点：**

- `fs.writeFile()`方法只能用来创建文件，不能用来创建路径
- 重复调用`fs.writeFile(`写入同一个文件，新写入的内容会覆盖之前的旧内容

### 前言：路径动拼接的问题

使用fs模块操作文件时，如果提供的操作路径是以`./`或`…/`开头的相对路径时，很容易出现路径动态拼接错误的问题。

**原因**：代码在运行的时候，会以执行node命令时所处的目录，动态拼接出被操作文件的完整路径。

**解决方案**:在使用fs模块操作文件时，直接提供完整的路径，不要提供`.`或`…/`开头的相对路径，从而防止路径动态拼接的问题。**注意js中写完整路径要用//，不然会被当成转义字符处理。**但是这种方法移植性差。fs中有解决办法。

`__dirname` 表示当前文件所处的目录**（即以js文件所处地方为基准），不会根据打开node目录变化而变化（即为打开node的地方为基准）**。

```javascript
console.log(__dirname)

fs.readFile(__dirname + '/files/1.txt', 'utf8', function(err, dataStr) {
  if (err) {
    return console.log('读取文件失败！' + err.message)
  }
  console.log('读取文件成功！' + dataStr)
})

```

## path 路径模块

path 模块是 Node.js 官方提供的、用来处理路径的模块。提供一系列的方法和属性，用来满足对路径的处理需求

如果要在 JavaScript 代码中，使用 path 模块来处理路径，则需要使用如下的方式先导入它

```javascript
const path = require("path")

```

### `path.join(...paths)`

`path.join(...paths)` 可以把多个路径片段拼接为完整的路径字符串

注意：凡是涉及到路径拼接的操作，都要使用 path.join() 方法进行处理。不直接使用 `+` 进行字符串的拼接

```javascript
const path = require('path')
const fs = require('fs')

// 注意：  ../ 会抵消前面的路径
const pathStr = path.join('/a', '/b/c', '../../', './d', 'e')
console.log(pathStr)  // \a\b\d\e

// 取代fs.readFile(__dirname + '/files/1.txt', ...)
fs.readFile(path.join(__dirname, './files/1.txt'), 'utf8', function(err, dataStr) {
  if (err) {
    return console.log(err.message)
  }
  console.log(dataStr)
})

```

### `path.basename(path[, ext])`

`path.basename(path[, ext])` 可以获取路径中的最后一部分，经常通过这个方法获取路径中的文件名

- **path** 必选参数，表示一个路径的字符串
- **ext** 可选参数，表示文件扩展名
- 返回 路径的最后一部分

``` javascript
const path = require('path')

// 定义文件的存放路径
const fpath = '/a/b/c/index.html'

const fullName = path.basename(fpath)
console.log(fullName) // index.html

const nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt) // index

```

### `path.extname(path)`

`path.extname(path)` 可以获取路径中的扩展名部分

- path 必选参数，表示一个路径的字符串
- 返回 返回得到的扩展名字符串

```javascript
const path = require('path')

// 这是文件的存放路径
const fpath = '/a/b/c/index.html'

const fext = path.extname(fpath)
console.log(fext)//输出.html

```

