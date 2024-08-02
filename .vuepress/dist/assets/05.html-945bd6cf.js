import{_ as n,r as p,o as i,c as a,b as e,e as t,d as s,a as o}from"./app-811e6f26.js";const l="/blog/assets/20231221180453-bb79cd1e.png",d="/blog/assets/20231221180638-3913f41b.png",c="/blog/assets/20231221180846-88e12917.png",h={},g=o('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>今天几乎所有的 JavaScript 应用都会引入许多第三方库来完成任务需求。</p><p>这些第三方库不管是否是用 TS 编写的，最终都要编译成 JS 代码，才能发布给开发者使用。</p><p>我们知道是 TS 提供了类型，才有了代码提示和类型保护等机制。</p><p>但在项目开发中使用第三方库时，你会发现它们几乎都有相应的 TS 类型，这些类型是怎么来的呢？类型声明文件</p><p><strong>类型声明文件：用来为已存在的 JS 库提供类型信息</strong>。</p><p>这样在 TS 项目中使用这些库时，就像用 TS 一样，都会有代码提示、类型保护等机制了。</p><ol><li><p>TS 的两种文件类型</p></li><li><p>类型声明文件的使用说明</p></li></ol><h2 id="_5-1-ts-中的两种文件类型" tabindex="-1"><a class="header-anchor" href="#_5-1-ts-中的两种文件类型" aria-hidden="true">#</a> 5.1 TS 中的两种文件类型</h2><p>TS 中有两种文件类型：1 <strong>.ts 文件</strong> 2 .<strong>d.ts 文件</strong>。</p><ul><li><p>.ts 文件：</p><ol><li><strong>既包含类型信息又可执行代码</strong>。</li><li>可以被编译为 .js 文件，然后，执行代码。</li><li>用途：编写程序代码的地方。</li></ol></li><li><p>.d.ts 文件：</p><ol><li><strong>只包含类型信息</strong>的类型声明文件。</li><li><strong>不会生成 .js 文件</strong>，仅用于<strong>提供类型信息</strong>。</li><li>用途：为 JS 提供类型信息。</li></ol></li></ul><p>总结：.ts 是 implementation（代码实现文件）；<strong>.d.ts 是 declaration（类型声明文件）</strong>。</p><p>如果要为 JS 库提供类型信息，要使用 .d.ts 文件。</p><h2 id="_5-2-类型声明文件的使用说明" tabindex="-1"><a class="header-anchor" href="#_5-2-类型声明文件的使用说明" aria-hidden="true">#</a> 5.2 类型声明文件的使用说明</h2><p>在使用 TS 开发项目时，<strong>类型声明文件</strong>的使用包括以下两种方式：</p><ol><li><p>使用已有的类型声明文件</p></li><li><p>创建自己的类型声明文件</p></li></ol><p>学习顺序：<strong>先会用</strong>（别人的）<strong>再会写</strong>（自己的）。</p><h3 id="使用已有的类型声明文件" tabindex="-1"><a class="header-anchor" href="#使用已有的类型声明文件" aria-hidden="true">#</a> 使用已有的类型声明文件：</h3><h4 id="_1-内置类型声明文件" tabindex="-1"><a class="header-anchor" href="#_1-内置类型声明文件" aria-hidden="true">#</a> 1 内置类型声明文件</h4><p>内置类型声明文件：<strong>TS 为 JS 运行时可用的所有标准化内置 API 都提供了声明文件</strong>。</p><p>比如，在使用数组时，数组所有方法都会有相应的代码提示以及类型信息：</p><p><img src="'+l+'" alt=""></p><p>实际上这都是 TS 提供的内置类型声明文件。</p><p>可以通过 Ctrl + 鼠标左键（Mac：option + 鼠标左键）来查看内置类型声明文件内容。</p><p>比如，查看 forEach 方法的类型声明，在 VSCode 中会自动跳转到 lib.es5.d.ts 类型声明文件中。</p><p>当然，像 window、document 等 BOM、DOM API 也都有相应的类型声明（<code>lib.dom.d.ts</code>）。</p><h4 id="_2-第三方库的类型声明文件" tabindex="-1"><a class="header-anchor" href="#_2-第三方库的类型声明文件" aria-hidden="true">#</a> 2 第三方库的类型声明文件</h4><p><strong>第三方库的类型声明文件</strong>：目前，几乎所有常用的第三方库都有相应的类型声明文件。</p><p>第三方库的类型声明文件有两种存在形式：1 <strong>库自带类型声明文件</strong> 2 由 <strong>DefinitelyTyped</strong> 提供。</p><ol><li>库自带类型声明文件：比如，axios。</li></ol><p><img src="'+d+'" alt=""></p><p>解释：这种情况下，正常导入该库，<strong>TS 就会自动加载库自己的类型声明文件</strong>，以提供该库的类型声明。</p><ol start="2"><li>由 DefinitelyTyped 提供。</li></ol>',33),_={href:"https://github.com/DefinitelyTyped/DefinitelyTyped/",target:"_blank",rel:"noopener noreferrer"},S=o('<p>可以通过 <code>npm/yarn</code> 来下载该仓库提供的 TS 类型声明包，这些包的名称格式为：<code>@types/*</code>。</p><p>比如，<code>@types/react、@types/lodash</code> 等。</p><p>说明：在实际项目开发时，如果你使用的第三方库没有自带的声明文件，VSCode 会给出明确的提示。</p><p>提示以及类型信息：</p><p><img src="'+c+'" alt=""></p><p>解释：当安装 <code>@types/*</code> 类型声明包后，<strong>TS 也会自动加载该类声明包</strong>，以提供该库的类型声明。</p>',6),f={href:"https://www.typescriptlang.org/dt",target:"_blank",rel:"noopener noreferrer"},u=e("code",null,"@types/*",-1),T=o('<h3 id="创建自己的类型声明文件" tabindex="-1"><a class="header-anchor" href="#创建自己的类型声明文件" aria-hidden="true">#</a> 创建自己的类型声明文件</h3><h4 id="_1-项目内共享类型" tabindex="-1"><a class="header-anchor" href="#_1-项目内共享类型" aria-hidden="true">#</a> 1 项目内共享类型</h4><p>项目内共享类型：如果<strong>多个 .ts 文件</strong>中都用到同一个类型，此时可以创建 <code>index .d.ts</code> 文件提供该类型，<strong>实现类型共享</strong>。</p><p>操作步骤：</p><ol><li><p>创建 index.d.ts 类型声明文件。</p></li><li><p>创建需要共享的类型，并<strong>使用 export 导出</strong>（TS 中的类型也可以使用 import/export 实现模块化功能）。</p></li><li><p>在需要使用共享类型的 .ts 文件中，通过 import 导入即可（.d.ts 后缀导入时，直接省略）。</p></li></ol><h4 id="_2-为已有-js-文件提供类型声明" tabindex="-1"><a class="header-anchor" href="#_2-为已有-js-文件提供类型声明" aria-hidden="true">#</a> 2 为已有 JS 文件提供类型声明</h4><p>为已有 JS 文件提供类型声明：</p>',7),m={href:"https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html",target:"_blank",rel:"noopener noreferrer"},b=e("li",null,[e("p",null,"成为库作者，创建库给其他人使用。")],-1),y=o("<p>注意：<strong>类型声明文件的编写与模块化方式相关</strong>，不同的模块化方式有不同的写法。但由于历史原因，JS 模块化的发展 经历过多种变化（AMD、CommonJS、UMD、ESModule 等），而 TS 支持各种模块化形式的类型声明。这就导致 ，类型声明文件相关内容又多又杂。</p><p>说明：TS 项目中也可以使用 .js 文件。</p><p>说明：在导入 .js 文件时，<strong>TS 会自动加载与 .js 同名的 .d.ts 文件</strong>，以提供类型声明。</p><p><code>declare</code> 关键字：用于类型声明，为其他地方（比如，.js 文件）<strong>已存在的变量声明类型，而不是创建一个新的变量</strong>。</p><ol><li><p>对于 type、interface 等这些明确就是 TS 类型的（只能在 TS 中使用的），可以省略 declare 关键字。</p></li><li><p>对于 let、function 等具有双重含义（在 JS、TS 中都能用），应该使用 declare 关键字，明确指定此处用于类型声明。</p></li></ol>",5);function x(J,j){const r=p("ExternalLinkIcon");return i(),a("div",null,[g,e("p",null,[e("a",_,[t("DefinitelyTyped"),s(r)]),t(" 是一个 github 仓库，用来提供高质量 TypeScript 类型声明。")]),S,e("p",null,[t("补充：TS 官方文档提供了一个页面"),e("a",f,[t(" (typescriptlang.org)"),s(r)]),t("，可以来查询 "),u,t(" 库。")]),T,e("ol",null,[e("li",null,[e("p",null,[t("在将 JS 项目"),e("a",m,[t("迁移"),s(r)]),t("到 TS 项目时，为了让已有的 .js 文件有类型声明。")])]),b]),y])}const w=n(h,[["render",x],["__file","05.html.vue"]]);export{w as default};
