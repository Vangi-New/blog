import{_ as e,r as t,o as p,c,b as n,e as s,d as i,a as l}from"./app-11ebdcaa.js";const o={},u=n("p",null,"在实际工作中，部署一个应用可能需要部署多个容器，一个一个部署非常不方便。docker compose可以一键部署和启动多个容器，它使用yaml文件来编排服务。",-1),d=n("p",null,"github和docker hub很多项目都提供了docker-compose.yaml文件，我们可以一键部署项目，非常方便。",-1),r=n("h2",{id:"一键部署wordpress",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一键部署wordpress","aria-hidden":"true"},"#"),s(" 一键部署wordpress")],-1),k={href:"https://hub.docker.com/_/wordpress",target:"_blank",rel:"noopener noreferrer"},v=l(`<p>将以下内容保存到本地的docker-compose.yml文件中。</p><p><code>docker compose</code>命令启动时，默认在当前目录下寻找<code>compose.yaml</code>或<code>compose.yml</code>，</p><p>为了兼容之前的版本，也会查找<code>docker-compose.yaml</code>或<code>docker-compose.yml</code>。</p><p>也可以使用<code>-f</code>参数手动指定文件<code>docker compose -f docker-compose-dev.yml up -d</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.1&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>

  <span class="token key atrule">wordpress</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> wordpress
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8080<span class="token punctuation">:</span><span class="token number">80</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">WORDPRESS_DB_HOST</span><span class="token punctuation">:</span> db
      <span class="token key atrule">WORDPRESS_DB_USER</span><span class="token punctuation">:</span> exampleuser
      <span class="token key atrule">WORDPRESS_DB_PASSWORD</span><span class="token punctuation">:</span> examplepass
      <span class="token key atrule">WORDPRESS_DB_NAME</span><span class="token punctuation">:</span> exampledb
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> wordpress<span class="token punctuation">:</span>/var/www/html

  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">5.7</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">MYSQL_DATABASE</span><span class="token punctuation">:</span> exampledb
      <span class="token key atrule">MYSQL_USER</span><span class="token punctuation">:</span> exampleuser
      <span class="token key atrule">MYSQL_PASSWORD</span><span class="token punctuation">:</span> examplepass
      <span class="token key atrule">MYSQL_RANDOM_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&#39;1&#39;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db<span class="token punctuation">:</span>/var/lib/mysql

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">wordpress</span><span class="token punctuation">:</span>
  <span class="token key atrule">db</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>docker compose up -d</code>一键部署启动</p><p><code>docker compose start/stop</code>启动/停止服务</p><p><code>docker compose down</code>停止并删除容器，不会删除存储卷volume</p><h2 id="compose文件结构" tabindex="-1"><a class="header-anchor" href="#compose文件结构" aria-hidden="true">#</a> compose文件结构</h2><p><code>docker-compose.yml</code>通常需要包含以下几个顶级元素：</p><p><code>version</code> 已弃用，早期版本需要此元素。</p><p><code>services</code>必要元素，定义一个或多个容器的运行参数</p><hr><p>在<code>services</code>中可以通过以下元素定义容器的运行参数</p><p><code>image</code> 容器 镜像</p><p><code>ports</code>端口映射</p><p><code>environment</code>环境变量</p><p><code>networks</code>容器使用的网络</p><p><code>volumes</code>容器挂载的存储卷</p><p><code>command</code>容器启动时执行的命令</p><p><code>depends_on</code>定义启动顺序</p><p>复数形式（例如<code>ports</code>,<code>networks</code>,<code>volumes</code>,<code>depends_on</code>）参数需要传入列表</p><hr><p><code>networks</code>创建自定义网络</p><p><code>volumes</code> 创建存储卷</p><h2 id="yaml文件语法" tabindex="-1"><a class="header-anchor" href="#yaml文件语法" aria-hidden="true">#</a> yaml文件语法</h2><ul><li>缩进代表上下级关系</li><li>缩进时不允许使用Tab键，只允许使用空格</li><li><code>:</code> 键值对，后面必须有空格</li><li><code>-</code>列表，后面必须有空格</li><li><code>[ ]</code>数组</li><li><code>#</code>注释</li><li><code>{key:value,k1:v1}</code>map</li><li><code>|</code> 多行文本块</li></ul><p>如果一个文件中包含多个文档</p><ul><li><code>---</code>表示一个文档的开始</li></ul><hr><p>还有一种常见的用法:</p><p>把公共的配置提取出来，用<code>&amp;</code>来建立锚点，<code>&lt;&lt;</code>合并到当前数据，用<code>*</code>引用锚点，例如</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>

<span class="token comment"># Settings and configurations that are common for all containers</span>
<span class="token key atrule">x-minio-common</span><span class="token punctuation">:</span> <span class="token important">&amp;minio-common</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> quay.io/minio/minio<span class="token punctuation">:</span>RELEASE.2022<span class="token punctuation">-</span>08<span class="token punctuation">-</span>13T21<span class="token punctuation">-</span>54<span class="token punctuation">-</span>44Z
  <span class="token key atrule">command</span><span class="token punctuation">:</span> server <span class="token punctuation">-</span><span class="token punctuation">-</span>console<span class="token punctuation">-</span>address &quot;<span class="token punctuation">:</span>9001&quot; http<span class="token punctuation">:</span>//minio<span class="token punctuation">{</span>1<span class="token punctuation">...</span>2<span class="token punctuation">}</span>/data<span class="token punctuation">{</span>1<span class="token punctuation">...</span>2<span class="token punctuation">}</span>
  <span class="token key atrule">expose</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;9000&quot;</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;9001&quot;</span>
  
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">minio1</span><span class="token punctuation">:</span>
    <span class="token key atrule">&lt;&lt;</span><span class="token punctuation">:</span> <span class="token important">*minio-common</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> data1<span class="token punctuation">-</span>1<span class="token punctuation">:</span>/data1
      <span class="token punctuation">-</span> data1<span class="token punctuation">-</span>2<span class="token punctuation">:</span>/data2

  <span class="token key atrule">minio2</span><span class="token punctuation">:</span>
    <span class="token key atrule">&lt;&lt;</span><span class="token punctuation">:</span> <span class="token important">*minio-common</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> data2<span class="token punctuation">-</span>1<span class="token punctuation">:</span>/data1
      <span class="token punctuation">-</span> data2<span class="token punctuation">-</span>2<span class="token punctuation">:</span>/data2

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">data1-1</span><span class="token punctuation">:</span>
  <span class="token key atrule">data1-2</span><span class="token punctuation">:</span>
  <span class="token key atrule">data2-1</span><span class="token punctuation">:</span>
  <span class="token key atrule">data2-2</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编排自己的项目" tabindex="-1"><a class="header-anchor" href="#编排自己的项目" aria-hidden="true">#</a> 编排自己的项目</h2><p>以ruoyi项目为例子，先采用挂载目录的方式部署应用，等我们学完dockfile打包，就可以完整的部署应用了。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.1&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>    

  <span class="token key atrule">ruoyi-app</span><span class="token punctuation">:</span>
    <span class="token comment">#  docker run --name ruoyi-app      \\</span>
    <span class="token comment">#             -p 8080:8080        \\</span>
    <span class="token comment">#             --network ruoyi-net      \\</span>
    <span class="token comment">#             -v /home/app/ruoyi-admin.jar:/usr/local/src/ruoyi-admin.jar   \\</span>
    <span class="token comment">#             -d openjdk:8u342-jre    \\</span>
    <span class="token comment">#             java -jar /usr/local/src/ruoyi-admin.jar</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> openjdk<span class="token punctuation">:</span>8u342<span class="token punctuation">-</span>jre
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8080<span class="token punctuation">:</span><span class="token number">8080</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /home/app/ruoyi<span class="token punctuation">-</span>admin.jar<span class="token punctuation">:</span>/usr/local/src/ruoyi<span class="token punctuation">-</span>admin.jar
    <span class="token key atrule">command</span><span class="token punctuation">:</span> java <span class="token punctuation">-</span>jar /usr/local/src/ruoyi<span class="token punctuation">-</span>admin.jar
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ruoyi<span class="token punctuation">-</span>net
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ruoyi<span class="token punctuation">-</span>db
  
  <span class="token key atrule">ruoyi-db</span><span class="token punctuation">:</span>
    <span class="token comment">#  docker run --name ruoyi-db -p 3303:3306 \\</span>
    <span class="token comment">#             --network ruoyi-net        \\</span>
    <span class="token comment">#             -v ruoyi-data:/var/lib/mysql  \\</span>
    <span class="token comment">#             -v /home/app/sql:/docker-entrypoint-initdb.d   \\</span>
    <span class="token comment">#             -e MYSQL_DATABASE=ry         \\</span>
    <span class="token comment">#             -e MYSQL_ROOT_PASSWORD=123456    \\</span>
    <span class="token comment">#             -d mysql:5.7      \\</span>
    <span class="token comment">#             --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci --skip-character-set-client-handshake</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">5.7</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> MYSQL_ROOT_PASSWORD=123456
      <span class="token punctuation">-</span> MYSQL_DATABASE=ry
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;--character-set-server=utf8mb4&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;--collation-server=utf8mb4_general_ci&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;--skip-character-set-client-handshake&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /home/app/sql<span class="token punctuation">:</span>/docker<span class="token punctuation">-</span>entrypoint<span class="token punctuation">-</span>initdb.d
      <span class="token punctuation">-</span> ruoyi<span class="token punctuation">-</span>data<span class="token punctuation">:</span>/var/lib/mysql
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ruoyi<span class="token punctuation">-</span>net


<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">ruoyi-data</span><span class="token punctuation">:</span>

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">ruoyi-net</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>command</code>支持以下写法：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#推荐使用数组或列表的方式</span>
<span class="token comment">#数组</span>
<span class="token key atrule">command</span><span class="token punctuation">:</span>
	<span class="token punctuation">[</span><span class="token string">&quot;java&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;-jar&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;/usr/local/src/ruoyi-admin.jar&quot;</span>
	<span class="token punctuation">]</span>
<span class="token comment">#列表</span>
<span class="token key atrule">command</span><span class="token punctuation">:</span> 
	<span class="token punctuation">-</span> java
  <span class="token punctuation">-</span> <span class="token punctuation">-</span>jar
  <span class="token punctuation">-</span> /usr/local/src/ruoyi<span class="token punctuation">-</span>admin.jar

<span class="token comment"># shell命令模式</span>
<span class="token key atrule">command</span><span class="token punctuation">:</span> java <span class="token punctuation">-</span>jar /usr/local/src/ruoyi<span class="token punctuation">-</span>admin.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行复杂的脚本</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">command</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> bash
  <span class="token punctuation">-</span> <span class="token string">&quot;-c&quot;</span>
  <span class="token punctuation">-</span> <span class="token punctuation">|</span><span class="token scalar string">
    set -ex
    # Generate mysql server-id from pod ordinal index.
    [[ \`hostname\` =~ -([0-9]+)$ ]] || exit 1
    ordinal=\${BASH_REMATCH[1]}
    echo [mysqld] &gt; /mnt/conf.d/server-id.cnf
    # Add an offset to avoid reserved server-id=0 value.
    echo server-id=$((100 + $ordinal)) &gt;&gt; /mnt/conf.d/server-id.cnf
    # Copy appropriate conf.d files from config-map to emptyDir.
    if [[ $ordinal -eq 0 ]]; then
      cp /mnt/config-map/primary.cnf /mnt/conf.d/
    else
      cp /mnt/config-map/replica.cnf /mnt/conf.d/
    fi       </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>environment</code>支持如下两种写法</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 使用map</span>
<span class="token key atrule">environment</span><span class="token punctuation">:</span>
    <span class="token key atrule">MYSQL_DATABASE</span><span class="token punctuation">:</span> exampledb
    <span class="token key atrule">MYSQL_USER</span><span class="token punctuation">:</span> exampleuser
    <span class="token key atrule">MYSQL_PASSWORD</span><span class="token punctuation">:</span> examplepass
    <span class="token key atrule">MYSQL_RANDOM_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&#39;1&#39;</span>

<span class="token comment">#使用列表</span>
<span class="token key atrule">environment</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> MYSQL_ROOT_PASSWORD=123456
    <span class="token punctuation">-</span> MYSQL_DATABASE=ry
    <span class="token punctuation">-</span> LANG=C.UTF<span class="token punctuation">-</span><span class="token number">8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="容器启动顺序depends-on" tabindex="-1"><a class="header-anchor" href="#容器启动顺序depends-on" aria-hidden="true">#</a> 容器启动顺序depends_on</h2><p>数据库初始化完成之前，不会建立connections。</p><p><img src="https://cdn.nlark.com/yuque/0/2022/png/28915315/1662362432335-8093ea3e-7381-4b02-9972-eaf18abc9764.png" alt="img"></p><p><code>depends_on</code>只能保证容器的启动和销毁顺序，不能确保依赖的容器是否ready。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.9&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">web</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span> .
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> db
      <span class="token punctuation">-</span> redis
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis
  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code>depends_on</code>只能保证<code>web</code>容器在<code>db</code>，<code>redis</code>之后启动，不会关注他们的状态是否启动完成或准备就绪。</p><p>要确保应用服务在数据库初始化完成后再启动，需要配合<code>condition</code>和<code>healthcheck</code>使用。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">web</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span> .
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token key atrule">db</span><span class="token punctuation">:</span>
        <span class="token key atrule">condition</span><span class="token punctuation">:</span> service_healthy
      <span class="token key atrule">redis</span><span class="token punctuation">:</span>
        <span class="token key atrule">condition</span><span class="token punctuation">:</span> service_started
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis
  <span class="token key atrule">db</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> postgres
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>condition</code>有三种状态：</p><p><code>service_started</code>容器已启动</p><p><code>service_healthy</code>容器处于健康状态</p><p><code>service_completed_successfully</code>容器执行完成且成功退出（退出状态码为0）</p><p>我们来改造一下我们自己的docker-compose.yaml文件，完整例子如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">services</span><span class="token punctuation">:</span> 

  <span class="token key atrule">ruoyi-app</span><span class="token punctuation">:</span>
    <span class="token comment">#  docker run --name ruoyi-app      \\</span>
    <span class="token comment">#             -p 8080:8080        \\</span>
    <span class="token comment">#             --network ruoyi-net      \\</span>
    <span class="token comment">#             -v /home/app/ruoyi-admin.jar:/usr/local/src/ruoyi-admin.jar   \\</span>
    <span class="token comment">#             -d openjdk:8u342-jre    \\</span>
    <span class="token comment">#             java -jar /usr/local/src/ruoyi-admin.jar</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> openjdk<span class="token punctuation">:</span>8u342<span class="token punctuation">-</span>jre
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8080<span class="token punctuation">:</span><span class="token number">8080</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ruoyi<span class="token punctuation">-</span>net
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /home/app/ruoyi<span class="token punctuation">-</span>admin.jar<span class="token punctuation">:</span>/usr/local/src/ruoyi<span class="token punctuation">-</span>admin.jar
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;java&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-jar&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/usr/local/src/ruoyi-admin.jar&quot;</span> <span class="token punctuation">]</span>
    <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>
      <span class="token key atrule">test</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;CMD&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;curl&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-f&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://localhost:8080&quot;</span><span class="token punctuation">]</span>
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> 10s
      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 5s
      <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">5</span>
      <span class="token key atrule">start_period</span><span class="token punctuation">:</span> 10s
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token key atrule">ruoyi-db</span><span class="token punctuation">:</span>
        <span class="token key atrule">condition</span><span class="token punctuation">:</span> service_healthy

  <span class="token key atrule">ruoyi-db</span><span class="token punctuation">:</span>
    <span class="token comment">#  docker run --name ruoyi-db -p 3303:3306 \\</span>
    <span class="token comment">#             --network ruoyi-net        \\</span>
    <span class="token comment">#             -v ruoyi-data:/var/lib/mysql  \\</span>
    <span class="token comment">#             -v /home/app/sql:/docker-entrypoint-initdb.d   \\</span>
    <span class="token comment">#             -e MYSQL_DATABASE=ry         \\</span>
    <span class="token comment">#             -e MYSQL_ROOT_PASSWORD=123456    \\</span>
    <span class="token comment">#             -d mysql:5.7      \\</span>
    <span class="token comment">#             --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci --skip-character-set-client-handshake</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">5.7</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> MYSQL_DATABASE=ry
      <span class="token punctuation">-</span> MYSQL_ROOT_PASSWORD=123456
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ruoyi<span class="token punctuation">-</span>data<span class="token punctuation">:</span>/var/lib/mysql
      <span class="token punctuation">-</span> /home/app/sql<span class="token punctuation">:</span>/docker<span class="token punctuation">-</span>entrypoint<span class="token punctuation">-</span>initdb.d
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ruoyi<span class="token punctuation">-</span>net
    <span class="token key atrule">command</span><span class="token punctuation">:</span>
      <span class="token punctuation">[</span>
        <span class="token string">&quot;--character-set-server=utf8mb4&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;--collation-server=utf8mb4_unicode_ci&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;--skip-character-set-client-handshake&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>
      <span class="token key atrule">test</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;CMD&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;mysqladmin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ping&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-h&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-u&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-p$$MYSQL_ROOT_PASSWORD&#39;</span><span class="token punctuation">]</span>
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> 10s
      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 5s
      <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">5</span>
      <span class="token key atrule">start_period</span><span class="token punctuation">:</span> 10s

<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">ruoyi-data</span><span class="token punctuation">:</span>

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">ruoyi-net</span><span class="token punctuation">:</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考文档：</p><p>https://docs.docker.com/compose/</p><p>https://docs.docker.com/compose/compose-file/</p><p>https://docs.docker.com/compose/compose-file/#depends_on</p><p>https://docs.docker.com/compose/startup-order/</p>`,61);function m(b,y){const a=t("ExternalLinkIcon");return p(),c("div",null,[u,d,r,n("p",null,[n("a",k,[s("wordpress"),i(a)]),s("是一个著名的开源博客系统。")]),v])}const g=e(o,[["render",m],["__file","07.html.vue"]]);export{g as default};
