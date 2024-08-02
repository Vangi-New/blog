import{_ as a,o as e,c as r,a as s}from"./app-f6e46239.js";const i="/assets/20231228103812-7df624d9.png",t="/assets/20231228104048-9fe83963.png",o="/assets/20231228104246-92c8b222.png",d={},n=s('<h2 id="初识node-js" tabindex="-1"><a class="header-anchor" href="#初识node-js" aria-hidden="true">#</a> 初识Node.js</h2><p>浏览器中的 JavaScript 的组成部分</p><p><img src="'+i+'" alt=""></p><h3 id="为什么-javascript-可以在浏览器中被执行" tabindex="-1"><a class="header-anchor" href="#为什么-javascript-可以在浏览器中被执行" aria-hidden="true">#</a> 为什么 JavaScript 可以在浏览器中被执行</h3><p>不同的浏览器使用不同的 JavaScript 解析引擎</p><p>Chrome 浏览器 =&gt; V8</p><p>Firefox 浏览器 =&gt; OdinMonkey（奥丁猴）</p><p>Safri浏览器 =&gt; JSCore</p><p>IE 浏览器 =&gt; Chakra（查克拉）</p><p>其中，Chrome 浏览器的 V8 解析引擎性能最好！</p><h3 id="为什么-javascript-可以操作-dom-和-bom" tabindex="-1"><a class="header-anchor" href="#为什么-javascript-可以操作-dom-和-bom" aria-hidden="true">#</a> 为什么 JavaScript 可以操作 DOM 和 BOM</h3><p><img src="'+t+'" alt=""></p><p>每个浏览器都内置了 DOM、BOM 这样的 API 函数，因此，浏览器中的 JavaScript 才可以调用它们</p><h3 id="浏览器中的-javascript-运行环境" tabindex="-1"><a class="header-anchor" href="#浏览器中的-javascript-运行环境" aria-hidden="true">#</a> 浏览器中的 JavaScript 运行环境</h3><p><img src="'+o+'" alt=""></p><p><strong>运行环境</strong>是指代码正常运行所需的必要环境</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><ul><li>V8 引擎负责解析和执行 JavaScript 代码</li><li>内置 API 是由运行环境提供的特殊接口，只能在所属的运行环境中被调用</li><li>需要node.js，avaScript 才能做<strong>后端开发</strong></li></ul><h2 id="node-js-简介" tabindex="-1"><a class="header-anchor" href="#node-js-简介" aria-hidden="true">#</a> Node.js 简介</h2><h3 id="什么是-node-js" tabindex="-1"><a class="header-anchor" href="#什么是-node-js" aria-hidden="true">#</a> 什么是 Node.js</h3><p>Node.js 是一个基于 Chrome V8 引擎的 <strong>JavaScript 运行环境</strong></p><p>官网地址 https://nodejs.org/zh-cn/</p><h3 id="node-js-中的-javascript-运行环境" tabindex="-1"><a class="header-anchor" href="#node-js-中的-javascript-运行环境" aria-hidden="true">#</a> Node.js 中的 JavaScript 运行环境</h3><ol><li>浏览器是 JavaScript 的前端运行环境</li><li>Node.js 是 JavaScript 的后端运行环境</li><li>Node.js 中无法调用 DOM 和 BOM 等浏览器内置 API</li></ol><h3 id="node-js-可以做什么" tabindex="-1"><a class="header-anchor" href="#node-js-可以做什么" aria-hidden="true">#</a> Node.js 可以做什么</h3><blockquote><p>Node.js 作为一个 JavaScript 的运行环境，仅仅提供了基础的功能和 API。然而，基于 Node.js 提供的这些基础能，很多强大的工具和框架如雨后春笋，层出不穷，所以学会了 Node.js ，可以让前端程序员胜任更多的工作和岗位</p></blockquote><ul><li>a基于 Express 框架 http://www.expressjs.com.cn/ 可以快速构建 Web 应用</li><li>b基于 Electron 框架 https://electronjs.org/ 可以构建跨平台的桌面应用</li><li>c基于 restify 框架 http://restify.com/ 可以快速构建 API 接口项目</li><li>d读写和操作数据库、创建实用的命令行工具辅助前端开发、etc…</li></ul><h3 id="node-js-怎么学" tabindex="-1"><a class="header-anchor" href="#node-js-怎么学" aria-hidden="true">#</a> Node.js 怎么学</h3><ul><li>JavaScript 基础语法 + 浏览器内置 API（DOM + BOM） + 第三方库（jQuery、art-template 等）</li><li>Node.js 内置 API（fs、path、http等）+ 第三方 API 模块（express、mysql 等）</li></ul><h3 id="关于命令行的补充" tabindex="-1"><a class="header-anchor" href="#关于命令行的补充" aria-hidden="true">#</a> 关于命令行的补充</h3><p><strong>shift+鼠标右键 可以在该目录下打开powershell窗口</strong></p><p>在<code>powershell</code>中的快捷键：</p><ul><li><p>⬆，可以快速定位到上一次执行的命令。</p></li><li><p><strong>tab键</strong>，可以快速补全文件的路径（先输入第一个字，然后使用tab键，可以快速补全路径）</p></li><li><p><strong>ESC</strong>，可以快速清空已输入的命令</p></li><li><p><strong>cls</strong>，清空powershell面板</p><p><strong>tips：./表示为当前目录，写不写都可以</strong></p></li></ul><h2 id="一、为什么要学习vue" tabindex="-1"><a class="header-anchor" href="#一、为什么要学习vue" aria-hidden="true">#</a> 一、为什么要学习Vue</h2>',34),h=[n];function p(c,l){return e(),r("div",null,h)}const u=a(d,[["render",p],["__file","01-renshinodeJs.html.vue"]]);export{u as default};
