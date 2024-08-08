import{_ as o,r as p,o as l,c as i,b as n,e as s,d as t,a as e}from"./app-6c7fecab.js";const c="/blog/assets/build_picture_2-6417e15f.png",r={},u=e(`<h2 id="微信小程序端" tabindex="-1"><a class="header-anchor" href="#微信小程序端" aria-hidden="true">#</a> 微信小程序端</h2><p>把当前 uni-app 项目打包成微信小程序端，并发布上线。</p><h3 id="核心步骤" tabindex="-1"><a class="header-anchor" href="#核心步骤" aria-hidden="true">#</a> 核心步骤</h3><ol><li>运行打包命令 <code>pnpm build:mp-weixin</code></li><li>预览和测试，微信开发者工具导入生成的 <code>/dist/build/mp-weixin</code> 目录</li><li>上传小程序代码</li><li>提交审核和发布</li></ol><h3 id="步骤图示" tabindex="-1"><a class="header-anchor" href="#步骤图示" aria-hidden="true">#</a> 步骤图示</h3><p>项目打包上线需要使用到多个工具，注意工具之间的职责。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>VSCode ----<span class="token operator">&gt;</span> 微信开发者工具 ----<span class="token operator">&gt;</span> 微信公众平台
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),d={href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/ci.html",target:"_blank",rel:"noopener noreferrer"},k=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"举一反三"),n("p",null,[s("打包成其他小程序端的步骤类似，只是更换了 "),n("strong",null,"打包命令"),s(" 和 "),n("strong",null,"开发者工具"),s(" 。")])],-1),h=n("h2",{id:"条件编译",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#条件编译","aria-hidden":"true"},"#"),s(" 条件编译")],-1),v={class:"custom-container tip"},m=n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])],-1),g=n("p",{class:"custom-container-title"},"常见问题",-1),b=n("p",null,"Q：按照 uni-app 规范开发可保证多平台兼容，但每个平台有自己的一些特性，该如何处理？",-1),_={href:"https://uniapp.dcloud.net.cn/tutorial/platform.html#preprocessor",target:"_blank",rel:"noopener noreferrer"},f=n("p",null,[n("img",{src:c,alt:"多端登录"})],-1),x=n("strong",null,"网页端不支持微信平台授权登录等功能",-1),w={href:"https://uniapp.dcloud.net.cn/tutorial/platform.html#preprocessor",target:"_blank",rel:"noopener noreferrer"},q=e(`<h3 id="条件编译语法" tabindex="-1"><a class="header-anchor" href="#条件编译语法" aria-hidden="true">#</a> 条件编译语法</h3><p>通过特殊注释，以 <strong><code>#ifdef</code></strong> 或 <strong><code>#ifndef</code></strong> 加 <strong>平台名称</strong> 开头，以 <strong><code>#endif</code></strong> 结尾。</p><p>多平台编译：<strong><code>#ifdef H5 || MP-WEIXIN</code></strong> 表示在 <strong>H5 端 或 微信小程序端</strong> 代码。</p><p>条件编译支持: 支持 .vue, .ts, .js, .scss, .css, pages.json 等文件。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// 微信平台特有API，需要条件编译</span>
<span class="token comment">// #ifdef MP-WEIXIN</span>
wx<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
wx<span class="token punctuation">.</span><span class="token function">requestPayment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// #endif</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 微信开发能力按钮，需要条件编译 --&gt;</span>
  <span class="token comment">&lt;!-- #ifdef MP-WEIXIN --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>openSetting<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>授权管理<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>feedback<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>问题反馈<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>contact<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>联系我们<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- #endif --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token comment">/* 如果出现样式兼容，也可添加条件编译 */</span>
<span class="token selector">page</span> <span class="token punctuation">{</span>
  <span class="token comment">/* #ifdef H5 */</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
  <span class="token comment">/* #endif */</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><br><br><br><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),y=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"开发技巧"),n("p",null,[s("可通过搜索 "),n("code",null,"wx."),s(" 和 "),n("code",null,"open-type"),s(" 等平台关键词，快速查找需要"),n("strong",null,"小程序端"),s("需添加编译模式的代码。")])],-1),j=e(`<h2 id="打包为-h5-端" tabindex="-1"><a class="header-anchor" href="#打包为-h5-端" aria-hidden="true">#</a> 打包为 H5 端</h2><p>把当前 uni-app 项目打包成网页(H5)端，并配置路由基础路径。</p><h3 id="核心步骤-1" tabindex="-1"><a class="header-anchor" href="#核心步骤-1" aria-hidden="true">#</a> 核心步骤</h3><ol><li>运行打包命令 <code>pnpm build:h5</code></li><li>预览和测试，使用浏览器打开 <code>/dist/build/h5</code> 目录下的 <code>index.html</code> 文件</li><li>由运维部署到服务器</li></ol><h3 id="路由基础路径" tabindex="-1"><a class="header-anchor" href="#路由基础路径" aria-hidden="true">#</a> 路由基础路径</h3><p>默认的路由基础路径为 <code>/</code> 根路径，部分网站并不是部署到根路径，需要按运维要求调整。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// manifest.json</span>
<span class="token punctuation">{</span>
  <span class="token comment">/* 网页端特有配置 */</span>
  <span class="token property">&quot;h5&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;router&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 基础路径：./ 为相对路径</span>
      <span class="token property">&quot;base&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token comment">/* 小程序特有相关 */</span><span class="token punctuation">,</span>
  <span class="token property">&quot;mp-weixin&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// …省略</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;vueVersion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="打包为-app-端" tabindex="-1"><a class="header-anchor" href="#打包为-app-端" aria-hidden="true">#</a> 打包为 APP 端</h2>`,8),I={href:"https://uniapp.dcloud.net.cn/tutorial/run/run-app.html",target:"_blank",rel:"noopener noreferrer"},M=n("code",null,"HBuilderX",-1);function B(N,P){const a=p("ExternalLinkIcon");return l(),i("div",null,[u,n("p",null,[s("了解：开发者也可独立使用 "),n("a",d,[s("miniprogram-ci"),t(a)]),s(" 进行小程序代码的上传等操作。")]),k,h,n("div",v,[m,g,b,n("p",null,[s("A：通过 "),n("a",_,[s("条件编译"),t(a)]),s("，让代码按条件编译到指定平台。")])]),f,n("p",null,[x,s("，可通过 "),n("a",w,[s("条件编译"),t(a)]),s("，实现不同端渲染不同的登录界面。")]),q,y,j,n("p",null,[n("a",I,[s("App 端"),t(a)]),s(" 的打包，预览、测试、发行，使用 "),M,s(" 工具。")])])}const H=o(r,[["render",B],["__file","13.html.vue"]]);export{H as default};