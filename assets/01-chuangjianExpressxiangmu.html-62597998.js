import{_ as p,r as o,o as c,c as i,b as s,e as n,d as e,a as t}from"./app-6c7fecab.js";const l={},r=s("h2",{id:"创建express项目",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#创建express项目","aria-hidden":"true"},"#"),n(" 创建Express项目")],-1),d=s("h3",{id:"安装",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),n(" 安装")],-1),u={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},k=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> myapp
$ <span class="token builtin class-name">cd</span> myapp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v=s("code",null,"npm init",-1),m=s("code",null,"package.json",-1),h=s("code",null,"package.json",-1),b={href:"https://docs.npmjs.com/files/package.json",target:"_blank",rel:"noopener noreferrer"},g=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此命令将要求你输入几个参数，例如此应用的名称和版本。 你可以直接按“回车”键接受大部分默认设置即可，下面这个除外：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>entry point: <span class="token punctuation">(</span>index.js<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>键入 <code>app.js</code> 或者你所希望的名称，这是当前应用的入口文件。如果你希望采用默认的 <code>index.js</code> 文件名，只需按“回车”键即可。</p><p>接下来在 <code>myapp</code> 目录下安装 Express 并将其保存到依赖列表中。如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> express <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果只是临时安装 Express，不想将它添加到依赖列表中，可执行如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> express --no-save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="helloworld项目" tabindex="-1"><a class="header-anchor" href="#helloworld项目" aria-hidden="true">#</a> HelloWorld项目</h3><p>创建app.js文件,编写下列代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token number">3000</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World!&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Example app listening on port </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行命令启动web服务器</p><p><code>node app.js</code></p>`,13);function _(x,f){const a=o("ExternalLinkIcon");return c(),i("div",null,[r,d,s("p",null,[n("首先假定你已经安装了 "),s("a",u,[n("Node.js"),e(a)]),n("，接下来为你的应用创建一个目录，然后进入此目录并将其作为当前工作目录。")]),k,s("p",null,[n("通过 "),v,n(" 命令为你的应用创建一个 "),m,n(" 文件。 欲了解 "),h,n(" 是如何起作用的，请参考 "),s("a",b,[n("Specifics of npm’s package.json handling"),e(a)]),n(".")]),g])}const E=p(l,[["render",_],["__file","01-chuangjianExpressxiangmu.html.vue"]]);export{E as default};