import{_ as s,r as l,o as i,c as r,b as t,e as d,d as a,a as n}from"./app-6c7fecab.js";const c={},u=t("p",null,"下载数据库可视化管理软件：",-1),o=t("p",null,"heidisql",-1),h={href:"https://www.heidisql.com/download.php",target:"_blank",rel:"noopener noreferrer"},m=n('<h2 id="sqlite3基础数据类型" tabindex="-1"><a class="header-anchor" href="#sqlite3基础数据类型" aria-hidden="true">#</a> sqlite3基础数据类型</h2><table><thead><tr><th>存储类</th><th>描述</th></tr></thead><tbody><tr><td>INTEGER</td><td>值是一个带符号的整数，根据值的大小存储在 1、2、3、4、6 或 8 字节中。</td></tr><tr><td>REAL</td><td>值是一个浮点值，存储为 8 字节的 IEEE 浮点数字。</td></tr><tr><td>TEXT</td><td>值是一个文本字符串，使用数据库编码（UTF-8、UTF-16BE 或 UTF-16LE）存储。</td></tr><tr><td>BLOB</td><td>值是一个 blob 数据，完全根据它的输入存储。</td></tr></tbody></table><h2 id="主键" tabindex="-1"><a class="header-anchor" href="#主键" aria-hidden="true">#</a> 主键</h2><p><strong>PRIMARY Key 约束</strong>：唯一标识数据库表中的各行/记录。</p><h2 id="sql语法" tabindex="-1"><a class="header-anchor" href="#sql语法" aria-hidden="true">#</a> sql语法</h2><p>假设您已经在 testDB.db 中创建了 user表，如下所示：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE TABLE &quot;user&quot; (\n    &quot;id&quot; BIGINT NOT NULL,\n    &quot;name&quot; VARCHAR(50) NULL,\n    &quot;account&quot; VARCHAR(50) NULL,\n    &quot;password&quot; VARCHAR(50) NULL,\n    &quot;token&quot; VARCHAR(50) NULL,\n    &quot;create_time&quot; BIGINT NULL,\n    &quot;balance&quot; BIGINT NULL,\n    PRIMARY KEY (&quot;id&quot;)\n);\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="insert-插入语句" tabindex="-1"><a class="header-anchor" href="#insert-插入语句" aria-hidden="true">#</a> Insert 插入语句</h2><p>INSERT INTO 语句有两种基本语法，如下所示：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>INSERT INTO TABLE_NAME [(column1, column2, column3,...columnN)]  \nVALUES (value1, value2, value3,...valueN);\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，下面的语句将在 user表中创建5个记录：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>INSERT INTO `user` (`id`,`name`,`account`,`password`,`create_time`,`balance`)\nVALUES (1, &#39;Paul&#39;, &#39;testaccount01&#39;, &#39;123456&#39;, 123456,100 );\n\nINSERT INTO `user` (`id`,`name`,`account`,`password`,`create_time`,`balance`)\nVALUES (2, &#39;Allen&#39;, &#39;testaccount02&#39;, &#39;abcdef&#39;, 123456,200 );\n\nINSERT INTO `user` (`id`,`name`,`account`,`password`,`create_time`,`balance`)\nVALUES (3, &#39;Teddy&#39;, &#39;testaccount03&#39;, &#39;654321&#39;, 123456,300 );\n\nINSERT INTO `user` (`id`,`name`,`account`,`password`,`create_time`,`balance`)\nVALUES (4, &#39;Mark&#39;, &#39;testaccount04&#39;, &#39;666666&#39;, 123456,400 );\n\nINSERT INTO `user` (`id`,`name`,`account`,`password`,`create_time`,`balance`)\nVALUES (5, &#39;David&#39;, &#39;testaccount05&#39;, &#39;123456&#39;, 123456,500 );\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="select-查询语句" tabindex="-1"><a class="header-anchor" href="#select-查询语句" aria-hidden="true">#</a> Select 查询语句</h2><p>SQLite 的 SELECT 语句的基本语法：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT column1, column2, columnN FROM table_name;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在这里，column1, column2...是表的字段，他们的值即是您要获取的。如果您想获取所有可用的字段，那么可以使用下面的语法：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT * FROM table_name;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="where-条件查询" tabindex="-1"><a class="header-anchor" href="#where-条件查询" aria-hidden="true">#</a> where 条件查询</h3>',18),v={href:"https://www.runoob.com/sqlite/sqlite-operators.html",target:"_blank",rel:"noopener noreferrer"},b=n('<p>假设 user 表有以下记录：</p><table><thead><tr><th>id</th><th>name</th><th>account</th><th>password</th><th>token</th><th>create_time</th><th>balance</th></tr></thead><tbody><tr><td>1</td><td>Paul</td><td>testaccount01</td><td>123456</td><td>\\N</td><td>123456</td><td>100</td></tr><tr><td>2</td><td>Allen</td><td>testaccount02</td><td>abcdef</td><td>\\N</td><td>123456</td><td>200</td></tr><tr><td>3</td><td>Teddy</td><td>testaccount03</td><td>654321</td><td>\\N</td><td>123456</td><td>300</td></tr><tr><td>4</td><td>Mark</td><td>testaccount04</td><td>666666</td><td>\\N</td><td>123456</td><td>400</td></tr><tr><td>5</td><td>David</td><td>testaccount05</td><td>123456</td><td>\\N</td><td>123456</td><td>500</td></tr></tbody></table><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT `id`,`name`,`password`,`balance` FROM `user` WHERE `balance` &gt; 200;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>id</th><th>name</th><th>password</th><th>balance</th></tr></thead><tbody><tr><td>3</td><td>Teddy</td><td>654321</td><td>300</td></tr><tr><td>4</td><td>Mark</td><td>666666</td><td>400</td></tr><tr><td>5</td><td>David</td><td>123456</td><td>500</td></tr></tbody></table><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT * FROM `user` WHERE `balance` &gt; 200 AND `balance` &lt; 500;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>id</th><th>name</th><th>account</th><th>password</th><th>token</th><th>create_time</th><th>balance</th></tr></thead><tbody><tr><td>3</td><td>Teddy</td><td>testaccount03</td><td>654321</td><td>\\N</td><td>123456</td><td>300</td></tr><tr><td>4</td><td>Mark</td><td>testaccount04</td><td>666666</td><td>\\N</td><td>123456</td><td>400</td></tr></tbody></table><p>BETWEEN 查询</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT * FROM `user` WHERE `balance` BETWEEN 200 AND 500;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>id</th><th>name</th><th>account</th><th>password</th><th>token</th><th>create_time</th><th>balance</th></tr></thead><tbody><tr><td>2</td><td>Allen</td><td>testaccount02</td><td>abcdef</td><td>\\N</td><td>123456</td><td>200</td></tr><tr><td>3</td><td>Teddy</td><td>testaccount03</td><td>654321</td><td>\\N</td><td>123456</td><td>300</td></tr><tr><td>4</td><td>Mark</td><td>testaccount04</td><td>666666</td><td>\\N</td><td>123456</td><td>400</td></tr><tr><td>5</td><td>David</td><td>testaccount05</td><td>123456</td><td>\\N</td><td>123456</td><td>500</td></tr></tbody></table><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT * FROM `user` WHERE `balance` = 200 or `balance` = 500;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>id</th><th>name</th><th>account</th><th>password</th><th>token</th><th>create_time</th><th>balance</th></tr></thead><tbody><tr><td>2</td><td>Allen</td><td>testaccount02</td><td>abcdef</td><td>\\N</td><td>123456</td><td>200</td></tr><tr><td>5</td><td>David</td><td>testaccount05</td><td>123456</td><td>\\N</td><td>123456</td><td>500</td></tr></tbody></table><p>模糊查询</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT * FROM `user` WHERE `name` LIKE &#39;a%&#39;;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>id</th><th>name</th><th>account</th><th>password</th><th>token</th><th>create_time</th><th>balance</th></tr></thead><tbody><tr><td>2</td><td>Allen</td><td>testaccount02</td><td>abcdef</td><td>\\N</td><td>123456</td><td>200</td></tr></tbody></table><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT * FROM `user` WHERE `name` LIKE &#39;%a%&#39;;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>id</th><th>name</th><th>account</th><th>password</th><th>token</th><th>create_time</th><th>balance</th></tr></thead><tbody><tr><td>1</td><td>Paul</td><td>testaccount01</td><td>123456</td><td>\\N</td><td>123456</td><td>100</td></tr><tr><td>2</td><td>Allen</td><td>testaccount02</td><td>abcdef</td><td>\\N</td><td>123456</td><td>200</td></tr><tr><td>4</td><td>Mark</td><td>testaccount04</td><td>666666</td><td>\\N</td><td>123456</td><td>400</td></tr><tr><td>5</td><td>David</td><td>testaccount05</td><td>123456</td><td>\\N</td><td>123456</td><td>500</td></tr></tbody></table><p>in查询</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT * FROM `user` WHERE `id` IN (2,5);\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>id</th><th>name</th><th>account</th><th>password</th><th>token</th><th>create_time</th><th>balance</th></tr></thead><tbody><tr><td>2</td><td>Allen</td><td>testaccount02</td><td>abcdef</td><td>\\N</td><td>123456</td><td>200</td></tr><tr><td>5</td><td>David</td><td>testaccount05</td><td>123456</td><td>\\N</td><td>123456</td><td>500</td></tr></tbody></table><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT * FROM `user` WHERE `id` NOT IN (2,5);\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>id</th><th>name</th><th>account</th><th>password</th><th>token</th><th>create_time</th><th>balance</th></tr></thead><tbody><tr><td>1</td><td>Paul</td><td>testaccount01</td><td>123456</td><td>\\N</td><td>123456</td><td>100</td></tr><tr><td>3</td><td>Teddy</td><td>testaccount03</td><td>654321</td><td>\\N</td><td>123456</td><td>300</td></tr><tr><td>4</td><td>Mark</td><td>testaccount04</td><td>666666</td><td>\\N</td><td>123456</td><td>400</td></tr></tbody></table><h3 id="limit-关键字" tabindex="-1"><a class="header-anchor" href="#limit-关键字" aria-hidden="true">#</a> Limit 关键字</h3><p><strong>LIMIT</strong> 子句用于限制由 SELECT 语句返回的数据数量。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select * from `user` limit 2\nselect * from `user` limit 2,2\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="distinct-关键字" tabindex="-1"><a class="header-anchor" href="#distinct-关键字" aria-hidden="true">#</a> Distinct 关键字</h3><p><strong>DISTINCT</strong> 关键字与 SELECT 语句一起使用，来消除所有重复的记录，并只获取唯一一次记录。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select `password` from `user` \nselect DISTINCT `password` from `user` \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="update-语句" tabindex="-1"><a class="header-anchor" href="#update-语句" aria-hidden="true">#</a> Update 语句</h2><p>带有 WHERE 子句的 UPDATE 查询的基本语法如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>UPDATE table_name\nSET column1 = value1, column2 = value2...., columnN = valueN\nWHERE [condition];\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例子：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code> UPDATE `user` SET `account` = &#39;admin01&#39;,`password`=&#39;888888&#39; WHERE `id` = 1;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="delete-语句" tabindex="-1"><a class="header-anchor" href="#delete-语句" aria-hidden="true">#</a> Delete 语句</h2><p>带有 WHERE 子句的 DELETE 查询的基本语法如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELETE FROM table_name\nWHERE [condition];\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>例子：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELETE FROM `user` WHERE `id` = 1;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',37);function p(E,q){const e=l("ExternalLinkIcon");return i(),r("div",null,[u,o,t("p",null,[t("a",h,[d("https://www.heidisql.com/download.php"),a(e)])]),m,t("p",null,[d("您还可以使用"),t("a",v,[d("比较或逻辑运算符"),a(e)]),d("指定条件，比如 >、<、=、LIKE、NOT，等等。")]),b])}const y=s(c,[["render",p],["__file","06-sqlitejichu.html.vue"]]);export{y as default};