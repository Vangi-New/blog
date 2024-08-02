---
title: 11-使用Node链接sqlite
date: 2024/07/30
---



## 安装sqlite3

运行命令

```bash
npm install sqlite3
```



## 链接数据库

```javascript
//导入模块
var sqlite3 = require("sqlite3").verbose();
//指定数据库文件位置
var db = new sqlite3.Database(__dirname + "/test.sqlite3");
```



## 执行插入、修改、删除语句，使用run方法

```javascript
let insert_sql = "INSERT INTO `user` (`id`,`name`,`account`,`password`,`create_time`,`balance`)
VALUES (?, ?, ?, ?, ?, ? );"
db.run(insert_sql, [6, 'peter', 'testaccount01', '123456', 123456,100],
function(err, rows){
    if(err == null){
        console.log("数据插入成功");
    }
});
```



## 执行查询语句，使用all方法

```javascript
db.all("SELECT * FROM `user` where `id` = ?", [1],(err,rows)={
    if(err == null){
        console.log("查询数据:",rows)
    }
});

db.all("SELECT * FROM `user`", [],(err,rows)={
    if(err == null){
        console.log("查询数据:",rows)
    }
});
```



