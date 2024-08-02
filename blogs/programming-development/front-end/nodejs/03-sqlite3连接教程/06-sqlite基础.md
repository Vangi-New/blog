---
title: 05-sqlite基础
date: 2024/07/30
---



下载数据库可视化管理软件：

heidisql

<https://www.heidisql.com/download.php>



## sqlite3基础数据类型

| 存储类  | 描述                                                         |
| ------- | ------------------------------------------------------------ |
| INTEGER | 值是一个带符号的整数，根据值的大小存储在 1、2、3、4、6 或 8 字节中。 |
| REAL    | 值是一个浮点值，存储为 8 字节的 IEEE 浮点数字。              |
| TEXT    | 值是一个文本字符串，使用数据库编码（UTF-8、UTF-16BE 或 UTF-16LE）存储。 |
| BLOB    | 值是一个 blob 数据，完全根据它的输入存储。                   |

 

## 主键

**PRIMARY Key 约束**：唯一标识数据库表中的各行/记录。



## sql语法

假设您已经在 testDB.db 中创建了 user表，如下所示：

```mysql
CREATE TABLE "user" (
    "id" BIGINT NOT NULL,
    "name" VARCHAR(50) NULL,
    "account" VARCHAR(50) NULL,
    "password" VARCHAR(50) NULL,
    "token" VARCHAR(50) NULL,
    "create_time" BIGINT NULL,
    "balance" BIGINT NULL,
    PRIMARY KEY ("id")
);

```



## Insert 插入语句

INSERT INTO 语句有两种基本语法，如下所示：

```mysql
INSERT INTO TABLE_NAME [(column1, column2, column3,...columnN)]  
VALUES (value1, value2, value3,...valueN);
```



现在，下面的语句将在 user表中创建5个记录：

```mysql
INSERT INTO `user` (`id`,`name`,`account`,`password`,`create_time`,`balance`)
VALUES (1, 'Paul', 'testaccount01', '123456', 123456,100 );

INSERT INTO `user` (`id`,`name`,`account`,`password`,`create_time`,`balance`)
VALUES (2, 'Allen', 'testaccount02', 'abcdef', 123456,200 );

INSERT INTO `user` (`id`,`name`,`account`,`password`,`create_time`,`balance`)
VALUES (3, 'Teddy', 'testaccount03', '654321', 123456,300 );

INSERT INTO `user` (`id`,`name`,`account`,`password`,`create_time`,`balance`)
VALUES (4, 'Mark', 'testaccount04', '666666', 123456,400 );

INSERT INTO `user` (`id`,`name`,`account`,`password`,`create_time`,`balance`)
VALUES (5, 'David', 'testaccount05', '123456', 123456,500 );
```



## Select 查询语句

 SQLite 的 SELECT 语句的基本语法：

```mysql
SELECT column1, column2, columnN FROM table_name;
```



在这里，column1, column2...是表的字段，他们的值即是您要获取的。如果您想获取所有可用的字段，那么可以使用下面的语法：

```mysql
SELECT * FROM table_name;
```



### where 条件查询

您还可以使用[比较或逻辑运算符](https://www.runoob.com/sqlite/sqlite-operators.html)指定条件，比如 >、<、=、LIKE、NOT，等等。

假设 user 表有以下记录：

| id   | name  | account       | password | token | create_time | balance |
| ---- | ----- | ------------- | -------- | ----- | ----------- | ------- |
| 1    | Paul  | testaccount01 | 123456   | \N    | 123456      | 100     |
| 2    | Allen | testaccount02 | abcdef   | \N    | 123456      | 200     |
| 3    | Teddy | testaccount03 | 654321   | \N    | 123456      | 300     |
| 4    | Mark  | testaccount04 | 666666   | \N    | 123456      | 400     |
| 5    | David | testaccount05 | 123456   | \N    | 123456      | 500     |

 

```mysql
SELECT `id`,`name`,`password`,`balance` FROM `user` WHERE `balance` > 200;
```



| id   | name  | password | balance |
| ---- | ----- | -------- | ------- |
| 3    | Teddy | 654321   | 300     |
| 4    | Mark  | 666666   | 400     |
| 5    | David | 123456   | 500     |

 

```mysql
SELECT * FROM `user` WHERE `balance` > 200 AND `balance` < 500;
```



| id   | name  | account       | password | token | create_time | balance |
| ---- | ----- | ------------- | -------- | ----- | ----------- | ------- |
| 3    | Teddy | testaccount03 | 654321   | \N    | 123456      | 300     |
| 4    | Mark  | testaccount04 | 666666   | \N    | 123456      | 400     |

BETWEEN 查询

```mysql
SELECT * FROM `user` WHERE `balance` BETWEEN 200 AND 500;
```

| id   | name  | account       | password | token | create_time | balance |
| ---- | ----- | ------------- | -------- | ----- | ----------- | ------- |
| 2    | Allen | testaccount02 | abcdef   | \N    | 123456      | 200     |
| 3    | Teddy | testaccount03 | 654321   | \N    | 123456      | 300     |
| 4    | Mark  | testaccount04 | 666666   | \N    | 123456      | 400     |
| 5    | David | testaccount05 | 123456   | \N    | 123456      | 500     |

 

```mysql
SELECT * FROM `user` WHERE `balance` = 200 or `balance` = 500;
```

| id   | name  | account       | password | token | create_time | balance |
| ---- | ----- | ------------- | -------- | ----- | ----------- | ------- |
| 2    | Allen | testaccount02 | abcdef   | \N    | 123456      | 200     |
| 5    | David | testaccount05 | 123456   | \N    | 123456      | 500     |

 

模糊查询

```mysql
SELECT * FROM `user` WHERE `name` LIKE 'a%';
```



| id   | name  | account       | password | token | create_time | balance |
| ---- | ----- | ------------- | -------- | ----- | ----------- | ------- |
| 2    | Allen | testaccount02 | abcdef   | \N    | 123456      | 200     |

 

```mysql
SELECT * FROM `user` WHERE `name` LIKE '%a%';
```

| id   | name  | account       | password | token | create_time | balance |
| ---- | ----- | ------------- | -------- | ----- | ----------- | ------- |
| 1    | Paul  | testaccount01 | 123456   | \N    | 123456      | 100     |
| 2    | Allen | testaccount02 | abcdef   | \N    | 123456      | 200     |
| 4    | Mark  | testaccount04 | 666666   | \N    | 123456      | 400     |
| 5    | David | testaccount05 | 123456   | \N    | 123456      | 500     |

 

in查询

```mysql
SELECT * FROM `user` WHERE `id` IN (2,5);
```

| id   | name  | account       | password | token | create_time | balance |
| ---- | ----- | ------------- | -------- | ----- | ----------- | ------- |
| 2    | Allen | testaccount02 | abcdef   | \N    | 123456      | 200     |
| 5    | David | testaccount05 | 123456   | \N    | 123456      | 500     |

 

```mysql
SELECT * FROM `user` WHERE `id` NOT IN (2,5);
```

| id   | name  | account       | password | token | create_time | balance |
| ---- | ----- | ------------- | -------- | ----- | ----------- | ------- |
| 1    | Paul  | testaccount01 | 123456   | \N    | 123456      | 100     |
| 3    | Teddy | testaccount03 | 654321   | \N    | 123456      | 300     |
| 4    | Mark  | testaccount04 | 666666   | \N    | 123456      | 400     |

 

### Limit 关键字

**LIMIT** 子句用于限制由 SELECT 语句返回的数据数量。

```mysql
select * from `user` limit 2
select * from `user` limit 2,2
```



### Distinct 关键字

**DISTINCT** 关键字与 SELECT 语句一起使用，来消除所有重复的记录，并只获取唯一一次记录。

```mysql
select `password` from `user` 
select DISTINCT `password` from `user` 
```



## Update 语句

带有 WHERE 子句的 UPDATE 查询的基本语法如下：

```mysql
UPDATE table_name
SET column1 = value1, column2 = value2...., columnN = valueN
WHERE [condition];
```



例子：

```mysql
 UPDATE `user` SET `account` = 'admin01',`password`='888888' WHERE `id` = 1;
```



## Delete 语句

带有 WHERE 子句的 DELETE 查询的基本语法如下：

```mysql
DELETE FROM table_name
WHERE [condition];
```



例子：

```mysql
DELETE FROM `user` WHERE `id` = 1;
```



























