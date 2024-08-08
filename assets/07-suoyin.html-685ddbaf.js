import{_ as e,o as n,c as i,a as s}from"./app-6c7fecab.js";const a={},l=s('<h2 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h2><p>索引（Index）是一种特殊的查找表，数据库搜索引擎用来加快数据检索。简单地说，索引是一个指向表中数据的指针。一个数据库中的索引与一本书的索引目录是非常相似的。</p><p>创建索引</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE [UNIQUE] INDEX index_name ON table_name (column_name,column_name);\n\n--单列索引\nCREATE INDEX test_index ON `user` (`account`);\n\n--唯一所以\nCREATE UNIQUE INDEX test_index ON `user` (`account`);\n\n--组合索引\nCREATE INDEX test_index ON `user` (`account`,`name`);\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看索引</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT * FROM sqlite_master WHERE type = &#39;index&#39;;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除索引</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DROP INDEX test_index;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>虽然索引的目的在于提高数据库的性能，但这里有几个情况需要避免使用索引。使用索引时，应重新考虑下列准则：</p><p>索引不应该使用在较小的表上。</p><p>索引不应该使用在有频繁的大批量的更新或插入操作的表上。</p><p>索引不应该使用在含有大量的 NULL 值的列上。</p><p>索引不应该使用在频繁操作的列上。</p><h2 id="约束" tabindex="-1"><a class="header-anchor" href="#约束" aria-hidden="true">#</a> 约束</h2><p>约束是在创建表的时候，可以给表的字段添加相应的约束，添加约束的目的是为了保证表中数据的合法性、有效性、完整性。</p><p>常见的约束有：非空约束（not null）、唯一约束（unique）、主键约束（primary key）</p><ul><li><strong>NOT NULL 约束</strong></li><li><strong>UNIQUE 约束</strong></li><li><strong>PRIMARY Key 约束</strong></li></ul>',17),d=[l];function r(c,t){return n(),i("div",null,d)}const m=e(a,[["render",r],["__file","07-suoyin.html.vue"]]);export{m as default};