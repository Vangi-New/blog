import{_ as e,o as t,c as s,a as o}from"./app-6c7fecab.js";const p="/blog/assets/20231215151618-8d27a220.png",c="/blog/assets/20231215151745-09643e22.png",d={},a=o('<h2 id="安装编译-ts-的工具包" tabindex="-1"><a class="header-anchor" href="#安装编译-ts-的工具包" aria-hidden="true">#</a> 安装编译 TS 的工具包</h2><p><img src="'+p+'" alt=""></p><p>问题：为什么要安装编译 TS 的工具包？</p><p>回答：Node.js/浏览器，只认识 JS 代码，不认识 TS 代码。需要先将 TS 代码转化为 JS 代码，然后才能运行。</p><p>安装命令：<code>npm i -g typescript</code>。</p><p>typescript 包：用来编译 TS 代码的包，提供了 tsc 命令，实现了 TS -&gt; JS 的转化。</p><p>验证是否安装成功：<code>tsc –v</code>（查看 typescript 的版本）。</p><h2 id="编译并运行-ts-代码" tabindex="-1"><a class="header-anchor" href="#编译并运行-ts-代码" aria-hidden="true">#</a> 编译并运行 TS 代码</h2><ol><li><p>创建 hello.ts 文件（注意：TS 文件的后缀名为 .ts）。</p></li><li><p>将 TS 编译为 JS：在终端中输入命令，<code>tsc hello.ts</code>（此时，在同级目录中会出现一个同名的 JS 文件）。</p></li><li><p>执行 JS 代码：在终端中输入命令，<code>node hello.js</code>。</p></li></ol><p><img src="'+c+'" alt=""></p><p>说明：所有合法的 JS 代码都是 TS 代码，有 JS 基础只需要学习 TS 的类型即可。</p><p>注意：由 TS 编译生成的** JS 文件**，代码中就没有<strong>类型信息</strong>了。</p><h2 id="简化运行-ts-的步骤" tabindex="-1"><a class="header-anchor" href="#简化运行-ts-的步骤" aria-hidden="true">#</a> 简化运行 TS 的步骤</h2><p>问题描述：每次修改代码后，都要重复执行两个命令，才能运行 TS 代码，太繁琐。</p><p>简化方式：使用 <strong>ts-node</strong> 包，直接在 Node.js 中执行 TS 代码。</p><p>安装命令：<code>npm i -g ts-node</code>（ts-node 包提供了 ts-node 命令）。</p><p>使用方式：<code>ts-node hello.ts</code>。</p><p>解释：ts-node 命令在内部偷偷的将 <code>TS -&gt; JS</code>，然后，再运行 JS 代码。</p>',18),n=[a];function r(i,l){return t(),s("div",null,n)}const h=e(d,[["render",r],["__file","02.html.vue"]]);export{h as default};
