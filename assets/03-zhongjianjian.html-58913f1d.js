import{_ as t,r as p,o as e,c as o,b as n,e as c,d as i,a as s}from"./app-6c7fecab.js";const u={},l=s(`<h2 id="中间件简介" tabindex="-1"><a class="header-anchor" href="#中间件简介" aria-hidden="true">#</a> 中间件简介</h2><p>中间件（英语：Middleware）顾名思义是系统软件和用户应用软件之间连接的软件，以便于软件各部件之间的沟通，特别是应用软件对于系统软件的集中的逻辑，是一种独立的系统软件或服务程序，分布式应用软件借助这种软件在不同的技术之间共享资源。中间件在客户服务器的操作系统、网络和数据库之上，管理计算资源和网络通信。总的作用是为处于自己上层的应用软件提供运行与开发的环境，帮助用户灵活、高效地开发和集成复杂的应用软件。</p><p>自定义中间件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//全局中间件</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;LOGGED&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">//给req添加一个属性</span>
  req<span class="token punctuation">.</span>requestTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> responseText <span class="token operator">=</span> <span class="token string">&#39;Hello World!&lt;br&gt;&#39;</span>
  <span class="token comment">//这里可以访问中间件添加的属性</span>
  responseText <span class="token operator">+=</span> <span class="token string">&#39;&lt;small&gt;Requested at: &#39;</span> <span class="token operator">+</span> req<span class="token punctuation">.</span>requestTime <span class="token operator">+</span> <span class="token string">&#39;&lt;/small&gt;&#39;</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>responseText<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开放跨域请求</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//设置允许跨域的域名，*代表允许任意域名跨域</span>
  res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Origin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//允许的header类型</span>
  res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Headers&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;content-type&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//跨域允许的请求方式</span>
  res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&quot;Access-Control-Allow-Methods&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DELETE,PUT,POST,GET,OPTIONS&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">&quot;OPTIONS&quot;</span><span class="token punctuation">)</span> res<span class="token punctuation">.</span><span class="token function">sendStatus</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//让options尝试请求快速结束</span>
  <span class="token keyword">else</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="express-自带中间件" tabindex="-1"><a class="header-anchor" href="#express-自带中间件" aria-hidden="true">#</a> Express 自带中间件</h4>`,7),r={href:"https://www.expressjs.com.cn/4x/api.html#express",target:"_blank",rel:"noopener noreferrer"},k=s(`<ol><li>json格式数据中间件，它使用JSON有效载荷解析传入请求，并且基于身体解析器。</li></ol><p>返回只解析JSON的中间件，并且只查看Content-Type报头与type选项匹配的请求。</p><p>​ express.json()</p><ol start="2"><li><p>静态文件中间件</p><p>express.static()</p></li><li><p>路由中间件</p><p>express.Router()</p></li></ol><h2 id="路由中间件" tabindex="-1"><a class="header-anchor" href="#路由中间件" aria-hidden="true">#</a> 路由中间件</h2><p>所有路由请求如果都写在app.js 会显得冗余，我们需要把不用逻辑的路由抽取到不用的js文件中去，增加可读性和减少耦合度。</p><p>创建文件<code>./routerTestRouter.js</code>文件</p><p>编写路由：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//get请求接口</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/test&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>app.js</code>加入下列代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//把TestRouter路由添加到app中。</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&quot;/test&quot;</span><span class="token punctuation">,</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./router/TestRouter&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 路由中的 /test 接口，访问路径 -&gt; /test/test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function d(v,m){const a=p("ExternalLinkIcon");return e(),o("div",null,[l,n("p",null,[n("a",r,[c("https://www.expressjs.com.cn/4x/api.html#express"),i(a)])]),k])}const g=t(u,[["render",d],["__file","03-zhongjianjian.html.vue"]]);export{g as default};