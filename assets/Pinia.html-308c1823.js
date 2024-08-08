import{_ as n,o as s,c as a,a as e}from"./app-6c7fecab.js";const i="/blog/assets/31-673c46e3.png",t="/blog/assets/32-96f58141.png",p="/blog/assets/33-a09be504.png",o="/blog/assets/34-b07d2c04.png",l="/blog/assets/35-300ee3ef.png",r="/blog/assets/36-70b421d1.png",c="/blog/assets/37-216903de.png",d={},u=e('<h2 id="_1-什么是pinia" tabindex="-1"><a class="header-anchor" href="#_1-什么是pinia" aria-hidden="true">#</a> 1. 什么是Pinia</h2><p>Pinia 是 Vue 的专属的最新状态管理库 ，是 Vuex 状态管理工具的替代品 <img src="'+i+`" alt="image.png"></p><h2 id="_2-手动添加pinia到vue项目" tabindex="-1"><a class="header-anchor" href="#_2-手动添加pinia到vue项目" aria-hidden="true">#</a> 2. 手动添加Pinia到Vue项目</h2><p>后面在实际开发项目的时候，Pinia可以在项目创建时自动添加，现在我们初次学习，从零开始：</p><ol><li>使用 Vite 创建一个空的 Vue3项目</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init vite@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>按照官方文档安装 pinia 到项目中</li></ol><h2 id="_3-pinia基础使用" tabindex="-1"><a class="header-anchor" href="#_3-pinia基础使用" aria-hidden="true">#</a> 3. Pinia基础使用</h2><ol><li>定义store</li><li>组件使用store</li></ol><p><img src="`+t+'" alt="image.png"></p><h2 id="_4-getters实现" tabindex="-1"><a class="header-anchor" href="#_4-getters实现" aria-hidden="true">#</a> 4. getters实现</h2><p>Pinia中的 getters 直接使用 computed函数 进行模拟, 组件中需要使用需要把 getters return出去</p><p><img src="'+p+'" alt="image.png"></p><h2 id="_5-action异步实现" tabindex="-1"><a class="header-anchor" href="#_5-action异步实现" aria-hidden="true">#</a> 5. action异步实现</h2><p>方式：异步action函数的写法和组件中获取异步数据的写法完全一致</p><ul><li><p>接口地址：http://geek.itheima.net/v1_0/channels</p></li><li><p>请求方式：get</p></li><li><p>请求参数：无</p></li></ul><p><img src="'+o+'" alt="image.png"></p><p>需求：在Pinia中获取频道列表数据并把数据渲染App组件的模板中 <img src="'+l+'" alt="image.png"></p><h2 id="_6-storetorefs工具函数" tabindex="-1"><a class="header-anchor" href="#_6-storetorefs工具函数" aria-hidden="true">#</a> 6. storeToRefs工具函数</h2><p>使用storeToRefs函数可以辅助保持数据（state + getter）的响应式解构 <img src="'+r+'" alt="image.png"></p><h2 id="_7-pinia的调试" tabindex="-1"><a class="header-anchor" href="#_7-pinia的调试" aria-hidden="true">#</a> 7. Pinia的调试</h2><p>Vue官方的 dev-tools 调试工具 对 Pinia直接支持，可以直接进行调试 <img src="'+c+`" alt="image.png"></p><h2 id="_8-pinia持久化插件" tabindex="-1"><a class="header-anchor" href="#_8-pinia持久化插件" aria-hidden="true">#</a> 8. Pinia持久化插件</h2><p>官方文档：https://prazdevs.github.io/pinia-plugin-persistedstate/zh/</p><ol><li>安装插件 pinia-plugin-persistedstate</li></ol><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>npm i pinia<span class="token operator">-</span>plugin<span class="token operator">-</span>persistedstate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>使用 main.js</li></ol><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> persist <span class="token keyword">from</span> <span class="token string">&#39;pinia-plugin-persistedstate&#39;</span>
<span class="token operator">...</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>persist<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>配置 store/counter.js</li></ol><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useCounterStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;counter&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    count<span class="token punctuation">,</span>
    doubleCount<span class="token punctuation">,</span>
    increment
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">persist</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>其他配置，看官网文档即可</li></ol>`,31),m=[u];function g(h,k){return s(),a("div",null,m)}const b=n(d,[["render",g],["__file","Pinia.html.vue"]]);export{b as default};
