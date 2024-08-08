import{_ as e,o as s,c as i,a}from"./app-6c7fecab.js";const n={},r=a('<p>子查询或称为内部查询、嵌套查询，指的是在 SQLite 查询中的 WHERE 子句中嵌入查询语句</p><p>例子</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select * from `user` where `id` in (select `id` from `user_log`)\nselect * from `user` where `id` in (select `id` from `user_log` where `login_times` &gt; 5)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="join-查询" tabindex="-1"><a class="header-anchor" href="#join-查询" aria-hidden="true">#</a> JOIN 查询</h2><h3 id="cross-join" tabindex="-1"><a class="header-anchor" href="#cross-join" aria-hidden="true">#</a> CROSS JOIN</h3><p>又叫笛卡尔积，匹配前一个表与后一个表的每一行和每一列，这样得到的结果集为n*m行（n, m分别为每张表的行数），x+y列（x, y分别为每张表的列数）。可见，该结果集可能会成为一个巨大的表，对内存和后续处理都会造成巨大压力，所以，慎用（真没用过）。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT * FROM `user` CROSS JOIN `user_log` ON `user`.`id` = `user_log`.`id`\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="inner-join" tabindex="-1"><a class="header-anchor" href="#inner-join" aria-hidden="true">#</a> Inner Join</h3><p>内连接（INNER JOIN）根据连接谓词结合两个表（table1 和 table2）的列值来创建一个新的结果表。查询会把 table1 中的每一行与 table2 中的每一行进行比较，找到所有满足连接谓词的行的匹配对。当满足连接谓词时，A 和 B 行的每个匹配对的列值会合并成一个结果行。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT * FROM `user` JOIN `user_log` ON `user`.`id` = `user_log`.`id`\nSELECT * FROM `user` INNER JOIN `user_log` ON `user`.`id` = `user_log`.`id`\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="left-outer-join" tabindex="-1"><a class="header-anchor" href="#left-outer-join" aria-hidden="true">#</a> LEFT OUTER JOIN</h3><p>SQLite 只支持 <strong>左外连接（LEFT OUTER JOIN）</strong></p><p>SQLite3只支持left outer join，其结果集由不大于x + y列，n - n*m行构成，至少包含左侧表的每一行，对于Join后不存在的字段值，则赋NULL。这样得到的表与我们之前设计那个全集结果一样，但数据结构更清晰，空间占用更少。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT * FROM `user` LEFT OUTER JOIN `user_log` ON `user`.`id` = `user_log`.`id`\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',14),d=[r];function l(o,t){return s(),i("div",null,d)}const c=e(n,[["render",l],["__file","09-zichaxun.html.vue"]]);export{c as default};