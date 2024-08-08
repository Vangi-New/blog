import{_ as p,r as o,o as i,c as l,b as n,e as s,d as e,a as t}from"./app-6c7fecab.js";const c={},r=n("h2",{id:"效果预览",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#效果预览","aria-hidden":"true"},"#"),s(" 效果预览")],-1),u=n("th",null,"体验小程序端",-1),d={href:"https://megasu.gitee.io/uniapp-shop-vue3-ts/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://gitee.com/Megasu/uniapp-shop-vue3-ts/releases/download/v1.0.0/heima-shop.apk",target:"_blank",rel:"noopener noreferrer"},v=n("tbody",null,[n("tr",null,[n("td",null,[n("img",{src:"https://megasu.atomgit.net/uni-app-shop-note/assets/code-mp-weixin.f1700662.png",alt:"img"})]),n("td",null,[n("img",{src:"https://megasu.atomgit.net/uni-app-shop-note/assets/code-h5.cc0b9bd7.png",alt:"img"})]),n("td",null,[n("img",{src:"https://megasu.atomgit.net/uni-app-shop-note/assets/code-android.137e0c1f.png",alt:"img"})])])],-1),m=n("h2",{id:"资料说明",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#资料说明","aria-hidden":"true"},"#"),s(" 资料说明")],-1),b=n("h3",{id:"📀-视频学习",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#📀-视频学习","aria-hidden":"true"},"#"),s(" 📀 视频学习")],-1),h={href:"https://www.bilibili.com/video/BV1Bp4y1379L/?share_source=copy_web&vd_source=2ac50d29193927b3c8597537dc4bc81d",target:"_blank",rel:"noopener noreferrer"},g=n("h3",{id:"📗-接口文档",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#📗-接口文档","aria-hidden":"true"},"#"),s(" 📗 接口文档")],-1),f={href:"https://www.apifox.cn/apidoc/shared-0e6ee326-d646-41bd-9214-29dbf47648fa/",target:"_blank",rel:"noopener noreferrer"},y=n("h3",{id:"✏️-在线笔记",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#✏️-在线笔记","aria-hidden":"true"},"#"),s(" ✏️ 在线笔记")],-1),x={href:"https://megasu.gitee.io/uni-app-shop-note/",target:"_blank",rel:"noopener noreferrer"},_=n("h3",{id:"📦-项目源码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#📦-项目源码","aria-hidden":"true"},"#"),s(" 📦 项目源码")],-1),w={href:"https://gitee.com/Megasu/uniapp-shop-vue3-ts/",target:"_blank",rel:"noopener noreferrer"},q=t(`<h2 id="项目架构" tabindex="-1"><a class="header-anchor" href="#项目架构" aria-hidden="true">#</a> 项目架构</h2><h3 id="项目架构图" tabindex="-1"><a class="header-anchor" href="#项目架构图" aria-hidden="true">#</a> 项目架构图</h3><p><img src="https://megasu.atomgit.net/uni-app-shop-note/assets/index_picture_1.a9098091.png" alt="项目架构图"></p><h2 id="拉取项目模板代码" tabindex="-1"><a class="header-anchor" href="#拉取项目模板代码" aria-hidden="true">#</a> 拉取项目模板代码</h2><p>项目模板包含：目录结构，项目素材，代码风格。</p><h3 id="模板地址" tabindex="-1"><a class="header-anchor" href="#模板地址" aria-hidden="true">#</a> 模板地址</h3><p>👉新仓库地址旧仓库地址</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone <span class="token parameter variable">-b</span> template https://gitee.com/heima-fe/uniapp-shop-vue3-ts.git heima-shop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意事项</p><p>小程序真机预览需在 <code>manifest.json</code> 中添加微信小程序的 <code>appid</code></p><h2 id="引入-uni-ui-组件库" tabindex="-1"><a class="header-anchor" href="#引入-uni-ui-组件库" aria-hidden="true">#</a> 引入 uni-ui 组件库</h2><h3 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤" aria-hidden="true">#</a> 操作步骤</h3>`,12),j={href:"https://uniapp.dcloud.net.cn/component/uniui/quickstart.html#npm%E5%AE%89%E8%A3%85",target:"_blank",rel:"noopener noreferrer"},S=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> i @dcloudio/uni-ui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>配置自动导入组件</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// pages.json</span>
<span class="token punctuation">{</span>
  <span class="token comment">// 组件自动导入</span>
  <span class="token property">&quot;easycom&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;autoscan&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;custom&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// uni-ui 规则如下配置  </span>
      <span class="token property">&quot;^uni-(.*)&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue&quot;</span> 
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;pages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// …省略</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>安装类型声明文件</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> i <span class="token parameter variable">-D</span> @uni-helper/uni-ui-types
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>配置类型声明文件</strong></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;@dcloudio/types&quot;</span><span class="token punctuation">,</span> <span class="token comment">// uni-app API 类型</span>
      <span class="token string">&quot;miniprogram-api-typings&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 原生微信小程序类型</span>
      <span class="token string">&quot;@uni-helper/uni-app-types&quot;</span><span class="token punctuation">,</span> <span class="token comment">// uni-app 组件类型</span>
      <span class="token string">&quot;@uni-helper/uni-ui-types&quot;</span> <span class="token comment">// uni-ui 组件类型  </span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// vue 编译器类型，校验标签类型</span>
  <span class="token property">&quot;vueCompilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;nativeTags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;block&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;component&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;template&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;slot&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小程序端-pinia-持久化" tabindex="-1"><a class="header-anchor" href="#小程序端-pinia-持久化" aria-hidden="true">#</a> 小程序端 Pinia 持久化</h2><p>说明：<code>Pinia</code> 用法与 <code>Vue3</code> 项目完全一致，<code>uni-app</code> 项目仅需解决<strong>持久化插件兼容性</strong>问题。</p><h3 id="持久化存储插件" tabindex="-1"><a class="header-anchor" href="#持久化存储插件" aria-hidden="true">#</a> 持久化存储插件</h3>`,10),P={href:"https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/config.html#storage",target:"_blank",rel:"noopener noreferrer"},I=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> i pinia-plugin-persistedstate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>插件默认使用 <code>localStorage</code> 实现持久化，小程序端不兼容，需要替换持久化 API。</p><h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h3><p>stores/modules/member.tsstores/index.tsmain.ts</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token comment">// 定义 Store</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> useMemberStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span>
  <span class="token string">&#39;member&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 会员信息</span>
    <span class="token keyword">const</span> profile <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 保存会员信息，登录时使用</span>
    <span class="token keyword">const</span> <span class="token function-variable function">setProfile</span> <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      profile<span class="token punctuation">.</span>value <span class="token operator">=</span> val
    <span class="token punctuation">}</span>

    <span class="token comment">// 清理会员信息，退出时使用</span>
    <span class="token keyword">const</span> <span class="token function-variable function">clearProfile</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      profile<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">undefined</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 记得 return</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      profile<span class="token punctuation">,</span>
      setProfile<span class="token punctuation">,</span>
      clearProfile<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// TODO: 持久化</span>
  <span class="token punctuation">{</span>
    persist<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多端兼容" tabindex="-1"><a class="header-anchor" href="#多端兼容" aria-hidden="true">#</a> 多端兼容</h3><p><strong>网页端持久化 API</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 网页端API</span>
localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>多端持久化 API</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 兼容多端API</span>
uni<span class="token punctuation">.</span><span class="token function">setStorageSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
uni<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参考代码</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// stores/modules/member.ts</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> useMemberStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span>
  <span class="token string">&#39;member&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//…省略</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// 配置持久化</span>
    persist<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 调整为兼容多端的API</span>
      storage<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">setItem</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          uni<span class="token punctuation">.</span><span class="token function">setStorageSync</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> 
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">getItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> uni<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> 
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uni-request-请求封装" tabindex="-1"><a class="header-anchor" href="#uni-request-请求封装" aria-hidden="true">#</a> uni.request 请求封装</h2><h3 id="请求和上传文件拦截器" tabindex="-1"><a class="header-anchor" href="#请求和上传文件拦截器" aria-hidden="true">#</a> 请求和上传文件拦截器</h3>`,14),A=n("strong",null,"uniapp 拦截器",-1),T={href:"https://uniapp.dcloud.net.cn/api/interceptor.html",target:"_blank",rel:"noopener noreferrer"},M=n("strong",null,"接口说明",-1),O={href:"https://www.apifox.cn/apidoc/shared-0e6ee326-d646-41bd-9214-29dbf47648fa/doc-1521513",target:"_blank",rel:"noopener noreferrer"},C=t(`<p>实现需求</p><ol><li>拼接基础地址</li><li>设置超时时间</li><li>添加请求头标识</li><li>添加 token</li></ol><p><strong>参考代码</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// src/utils/http.ts</span>

<span class="token comment">// 请求基地址</span>
<span class="token keyword">const</span> baseURL <span class="token operator">=</span> <span class="token string">&#39;https://pcapi-xiaotuxian-front-devtest.itheima.net&#39;</span>

<span class="token comment">// 拦截器配置</span>
<span class="token keyword">const</span> httpInterceptor <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 拦截前触发</span>
  <span class="token function">invoke</span><span class="token punctuation">(</span>options<span class="token operator">:</span> UniApp<span class="token punctuation">.</span>RequestOptions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. 非 http 开头需拼接地址</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>options<span class="token punctuation">.</span>url<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      options<span class="token punctuation">.</span>url <span class="token operator">=</span> baseURL <span class="token operator">+</span> options<span class="token punctuation">.</span>url
    <span class="token punctuation">}</span>
    <span class="token comment">// 2. 请求超时</span>
    options<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">10000</span>
    <span class="token comment">// 3. 添加小程序端请求头标识</span>
    options<span class="token punctuation">.</span>header <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;source-client&#39;</span><span class="token operator">:</span> <span class="token string">&#39;miniapp&#39;</span><span class="token punctuation">,</span>
      <span class="token operator">...</span>options<span class="token punctuation">.</span>header<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 4. 添加 token 请求头标识</span>
    <span class="token keyword">const</span> memberStore <span class="token operator">=</span> <span class="token function">useMemberStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> token <span class="token operator">=</span> memberStore<span class="token punctuation">.</span>profile<span class="token operator">?.</span>token
    <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      options<span class="token punctuation">.</span>header<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> token
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 拦截 request 请求</span>
uni<span class="token punctuation">.</span><span class="token function">addInterceptor</span><span class="token punctuation">(</span><span class="token string">&#39;request&#39;</span><span class="token punctuation">,</span> httpInterceptor<span class="token punctuation">)</span>
<span class="token comment">// 拦截 uploadFile 文件上传</span>
uni<span class="token punctuation">.</span><span class="token function">addInterceptor</span><span class="token punctuation">(</span><span class="token string">&#39;uploadFile&#39;</span><span class="token punctuation">,</span> httpInterceptor<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常见问题</p><p><strong>问:</strong> 为什么用手机预览没有数据？</p>`,6),B=n("strong",null,"答:",-1),D={href:"https://mp.weixin.qq.com/",target:"_blank",rel:"noopener noreferrer"},V=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://pcapi-xiaotuxian-front-devtest.itheima.net
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="封装-promise-请求函数" tabindex="-1"><a class="header-anchor" href="#封装-promise-请求函数" aria-hidden="true">#</a> 封装 Promise 请求函数</h3><p>实现需求</p><ol><li>返回 Promise 对象，用于处理返回值类型</li><li>成功 resolve <ol><li>提取数据</li><li>添加泛型</li></ol></li><li>失败 reject <ol><li>401 错误</li><li>其他错误</li><li>网络错误</li></ol></li></ol><p><strong>参考代码</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 请求函数
 * <span class="token keyword">@param</span>  <span class="token parameter">UniApp</span>.RequestOptions
 * <span class="token keyword">@returns</span> Promise
 *  1. 返回 Promise 对象，用于处理返回值类型
 *  2. 获取数据成功
 *    2.1 提取核心数据 res.data
 *    2.2 添加类型，支持泛型
 *  3. 获取数据失败
 *    3.1 401错误  -&gt; 清理用户信息，跳转到登录页
 *    3.2 其他错误 -&gt; 根据后端错误信息轻提示
 *    3.3 网络错误 -&gt; 提示用户换网络
 */</span>
<span class="token keyword">type</span> <span class="token class-name">Data<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  code<span class="token operator">:</span> <span class="token builtin">string</span>
  msg<span class="token operator">:</span> <span class="token builtin">string</span>
  result<span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>
<span class="token comment">// 2.2 添加类型，支持泛型</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>options<span class="token operator">:</span> UniApp<span class="token punctuation">.</span>RequestOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1. 返回 Promise 对象</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span><span class="token operator">&lt;</span>Data<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    uni<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token operator">...</span>options<span class="token punctuation">,</span>
      <span class="token comment">// 响应成功</span>
      <span class="token function">success</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 状态码 2xx，参考 axios 的设计</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>statusCode <span class="token operator">&gt;=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">.</span>statusCode <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 2.1 提取核心数据 res.data</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data <span class="token keyword">as</span> Data<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>statusCode <span class="token operator">===</span> <span class="token number">401</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 401错误  -&gt; 清理用户信息，跳转到登录页</span>
          <span class="token keyword">const</span> memberStore <span class="token operator">=</span> <span class="token function">useMemberStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          memberStore<span class="token punctuation">.</span><span class="token function">clearProfile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          uni<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span> url<span class="token operator">:</span> <span class="token string">&#39;/pages/login/login&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token function">reject</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// 其他错误 -&gt; 根据后端错误信息轻提示</span>
          uni<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            icon<span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>data <span class="token keyword">as</span> Data<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>msg <span class="token operator">||</span> <span class="token string">&#39;请求错误&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token function">reject</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 响应失败</span>
      <span class="token function">fail</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        uni<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          icon<span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span>
          title<span class="token operator">:</span> <span class="token string">&#39;网络错误，换个网络试试&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【拓展】代码规范" tabindex="-1"><a class="header-anchor" href="#【拓展】代码规范" aria-hidden="true">#</a> 【拓展】代码规范</h2><p><strong>为什么需要代码规范</strong></p><p>如果没有统一代码风格，团队协作不便于查看代码提交时所做的修改。</p><p><img src="https://megasu.atomgit.net/uni-app-shop-note/assets/index_picture_2.5f339a2f.png" alt="diff"></p><h3 id="统一代码风格" tabindex="-1"><a class="header-anchor" href="#统一代码风格" aria-hidden="true">#</a> 统一代码风格</h3><ul><li>安装 <code>eslint</code> + <code>prettier</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> i <span class="token parameter variable">-D</span> eslint prettier eslint-plugin-vue @vue/eslint-config-prettier @vue/eslint-config-typescript @rushstack/eslint-patch @vue/tsconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>新建 <code>.eslintrc.cjs</code> 文件，添加以下 <code>eslint</code> 配置</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* eslint-env node */</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@rushstack/eslint-patch/modern-module-resolution&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;plugin:vue/vue3-essential&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;eslint:recommended&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;@vue/eslint-config-typescript&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;@vue/eslint-config-prettier&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 小程序全局变量</span>
  <span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">uni</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">wx</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">WechatMiniprogram</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">getCurrentPages</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">getApp</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">UniApp</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">UniHelper</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">App</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">Page</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">Component</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">AnyObject</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token string">&#39;latest&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;prettier/prettier&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;warn&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">endOfLine</span><span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;vue/multi-word-component-names&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;off&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;vue/no-setup-props-destructure&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;off&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;vue/no-deprecated-html-element-is&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;off&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;@typescript-eslint/no-unused-vars&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;off&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置 <code>package.json</code></li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// ... 省略 ...</span>
    <span class="token property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint . --ext .vue,.js,.ts --fix --ignore-path .gitignore&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>运行</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> lint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>温馨提示</p><p>到此，你已完成 <code>eslint</code> + <code>prettier</code> 的配置。</p><h3 id="git-工作流规范" tabindex="-1"><a class="header-anchor" href="#git-工作流规范" aria-hidden="true">#</a> Git 工作流规范</h3><ul><li>安装并初始化 <code>husky</code></li></ul><p>pnpxnpx</p><p>sh</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm dlx husky-init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>1</p><ul><li>安装 <code>lint-staged</code></li></ul><p>sh</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm i -D lint-staged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>1</p><ul><li>配置 <code>package.json</code></li></ul><p>json</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;script&quot;: {
    // ... 省略 ...
    &quot;lint-staged&quot;: &quot;lint-staged&quot;
  },
  &quot;lint-staged&quot;: {
    &quot;*.{vue,ts,js}&quot;: [&quot;eslint --fix&quot;]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改 <code>.husky/pre-commit</code> 文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token builtin class-name">test</span>   
<span class="token function">npm</span> run lint-staged     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,36),L=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"温馨提示"),n("p",null,[s("到此，你已完成 "),n("code",null,"husky"),s(" + "),n("code",null,"lint-staged"),s(" 的配置。")])],-1);function U(E,R){const a=o("ExternalLinkIcon");return i(),l("div",null,[r,n("table",null,[n("thead",null,[n("tr",null,[u,n("th",null,[n("a",d,[s("体验 H5 端"),e(a)])]),n("th",null,[n("a",k,[s("体验 App 端(安卓)"),e(a)])])])]),v]),m,b,n("p",null,[n("a",h,[s("https://www.bilibili.com/video/BV1Bp4y1379L/"),e(a)])]),g,n("p",null,[n("a",f,[s("https://www.apifox.cn/apidoc/shared-0e6ee326-d646-41bd-9214-29dbf47648fa/"),e(a)])]),y,n("p",null,[n("a",x,[s("https://megasu.gitee.io/uni-app-shop-note/"),e(a)])]),_,n("p",null,[n("a",w,[s("https://gitee.com/Megasu/uniapp-shop-vue3-ts/"),e(a)])]),q,n("p",null,[s("安装 "),n("a",j,[s("uni-ui 组件库"),e(a)])]),S,n("p",null,[s("安装持久化存储插件： "),n("a",P,[s("pinia-plugin-persistedstate"),e(a)])]),I,n("p",null,[A,s("： "),n("a",T,[s("uni.addInterceptor"),e(a)])]),n("p",null,[M,s("："),n("a",O,[s("接口文档"),e(a)])]),C,n("p",null,[B,s(" 微信小程序端，需登录 "),n("a",D,[s("微信公众平台"),e(a)]),s(" 配置以下地址为合法域名 👇")]),V,L])}const z=p(c,[["render",U],["__file","02.html.vue"]]);export{z as default};
