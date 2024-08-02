import{_ as n,o as s,c as a,a as e}from"./app-811e6f26.js";const t={},p=e(`<h2 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> dockerfile</h2><p><code>dockerfile</code>通常包含以下几个常用命令：</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> ubuntu:18.04</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>
<span class="token instruction"><span class="token keyword">COPY</span> . .</span>
<span class="token instruction"><span class="token keyword">RUN</span> make .</span>
<span class="token instruction"><span class="token keyword">CMD</span> python app.py</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>FROM</code> 打包使用的基础镜像</p><p><code>WORKDIR</code>相当于<code>cd</code>命令，进入工作目录</p><p><code>COPY</code> 将宿主机的文件复制到容器内</p><p><code>RUN</code>打包时执行的命令，相当于打包过程中在容器中执行shell脚本，通常用来安装应用程序所需要的依赖、设置权限、初始化配置文件等</p><p><code>CMD</code>运行镜像时执行的命令</p><p><code>EXPOSE</code>指定容器在运行时监听的网络端口，它并不会公开端口，仅起到声明的作用，公开端口需要容器运行时使用-p参数指定。</p><h2 id="制作自己的镜像" tabindex="-1"><a class="header-anchor" href="#制作自己的镜像" aria-hidden="true">#</a> 制作自己的镜像</h2><p>参考我们之前的配置，制作dockerfile文件</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token key atrule">ruoyi-java</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> openjdk<span class="token punctuation">:</span>8u342<span class="token punctuation">-</span>jre
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8080<span class="token punctuation">:</span><span class="token number">8080</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /home/app/ruoyi<span class="token punctuation">-</span>admin.jar<span class="token punctuation">:</span>/usr/local/src/ruoyi<span class="token punctuation">-</span>admin.jar
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;java&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-jar&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/usr/local/src/ruoyi-admin.jar&quot;</span> <span class="token punctuation">]</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ruoyi<span class="token punctuation">-</span>net
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ruoyi<span class="token punctuation">-</span>db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写dockerfile文件</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> openjdk:8u342-jre</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>
<span class="token instruction"><span class="token keyword">COPY</span> ./ruoyi-admin.jar .</span>
<span class="token instruction"><span class="token keyword">CMD</span> [ <span class="token string">&quot;java&quot;</span>, <span class="token string">&quot;-jar&quot;</span>, <span class="token string">&quot;ruoyi-admin.jar&quot;</span> ]</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>docker build .</code> 打包</p><p><img src="https://cdn.nlark.com/yuque/0/2022/png/28915315/1663056309700-928c449d-f90b-4afb-8337-627ad49472a4.png" alt="img"></p><p><code>docker images</code> 查看镜像id</p><p><img src="https://cdn.nlark.com/yuque/0/2022/png/28915315/1663056372495-f17eb375-6895-4730-a38b-cf8faba773ec.png" alt="img"></p><p><code>docker tag 79d007b05ff6 ruoyi-app:4.7.4-jar</code> 设置镜像的标签</p><p><img src="https://cdn.nlark.com/yuque/0/2022/png/28915315/1663056775981-00641c13-8fd6-41ec-ab0a-a22a1415f8b7.png" alt="img"></p><h2 id="image镜像与layer层" tabindex="-1"><a class="header-anchor" href="#image镜像与layer层" aria-hidden="true">#</a> image镜像与layer层</h2><p>image文件由一系列层构建而成，dockerfile每一个命令都会生成一个层。每一层都是只读的。</p><p>例如前面我们制作镜像，就产生了4个层。</p><p><img src="https://cdn.nlark.com/yuque/0/2022/png/28915315/1663056309700-928c449d-f90b-4afb-8337-627ad49472a4.png" alt="img"></p><p>也可以使用<code>docker image history ruoyi-java:4.7.4</code>命令查看</p><p><img src="https://cdn.nlark.com/yuque/0/2022/png/28915315/1663056432477-b4c75843-bfe5-4233-9163-b3503243e020.png" alt="img"></p><p>创建容器时，会创建一个新的可写层，通常称为“容器层”。对正在运行的容器所做的所有更改（如写入新文件、修改现有文件和删除文件）都将写入容器层，而不会修改镜像。</p><p><img src="https://cdn.nlark.com/yuque/0/2022/png/28915315/1660987376201-3819b565-8608-449f-920e-0a5016b4de76.png" alt="img"></p><h2 id="多阶段构建" tabindex="-1"><a class="header-anchor" href="#多阶段构建" aria-hidden="true">#</a> 多阶段构建</h2><p>在构建基于 Java 的应用程序时，需要一个 JDK 将源代码编译为 Java 字节码。但是，在生产中不需要该 JDK。</p><p>多阶段构建可以将生成时依赖与运行时依赖分开，减小整个image文件大小。</p><h3 id="maven-tomcat-示例" tabindex="-1"><a class="header-anchor" href="#maven-tomcat-示例" aria-hidden="true">#</a> Maven/Tomcat 示例</h3><p>使用 Maven来构建应用，在最终的image中不需要包含maven。我们可以使用多阶段构建，每一个阶段从<code>FROM</code>开始，最终的image只会从最后一个阶段构建，不会包含前面阶段产生的层，因此可以减少镜像体积。</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> maven <span class="token keyword">AS</span> build</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /source</span>
<span class="token instruction"><span class="token keyword">COPY</span> . .</span>
<span class="token instruction"><span class="token keyword">RUN</span> mvn package</span>

<span class="token instruction"><span class="token keyword">FROM</span>  openjdk:8u342-jre</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">build</span></span> /source/ruoyi-admin/target/ruoyi-admin.jar .</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 80</span>
<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">&quot;java&quot;</span>,<span class="token string">&quot;-jar&quot;</span>,<span class="token string">&quot;ruoyi-admin.jar&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>docker build -t ruoyi-jar:4.7.4 .</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># project name</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;app&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>

  <span class="token key atrule">ruoyi-java</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> ruoyi<span class="token punctuation">-</span>jar<span class="token punctuation">:</span>4.7.4
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;--server.port=8080&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;--ruoyi.profile=/home/ruoyi/uploadPath&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;--spring.datasource.druid.master.url=jdbc:mysql://ruoyi-db:3306/ry?useUnicode=true&amp;characterEncoding=utf8&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;--spring.datasource.druid.master.username=root&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;--spring.datasource.druid.master.password=123456&quot;</span>
    <span class="token punctuation">]</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8080<span class="token punctuation">:</span><span class="token number">8080</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ruoyi<span class="token punctuation">-</span>net
    <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>
      <span class="token key atrule">test</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;CMD&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;curl&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-f&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;http://localhost:8080&quot;</span> <span class="token punctuation">]</span>
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> 10s
      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 5s
      <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">5</span>
      <span class="token key atrule">start_period</span><span class="token punctuation">:</span> 10s
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token key atrule">ruoyi-db</span><span class="token punctuation">:</span>
        <span class="token key atrule">condition</span><span class="token punctuation">:</span> service_healthy

  <span class="token key atrule">ruoyi-db</span><span class="token punctuation">:</span>
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
    <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>
      <span class="token key atrule">test</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;CMD&quot;</span><span class="token punctuation">,</span> <span class="token string">&#39;mysqladmin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ping&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-h&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-u&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-p$$MYSQL_ROOT_PASSWORD&#39;</span> <span class="token punctuation">]</span>
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> 10s
      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 5s
      <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">5</span>
      <span class="token key atrule">start_period</span><span class="token punctuation">:</span> 10s


<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">ruoyi-data</span><span class="token punctuation">:</span>

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">ruoyi-net</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="entrypoint和cmd的区别" tabindex="-1"><a class="header-anchor" href="#entrypoint和cmd的区别" aria-hidden="true">#</a> <code>ENTRYPOINT</code>和<code>CMD</code>的区别</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dockerfile\`应该至少包含一个\`ENTRYPOINT\`或\`CMD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>ENTRYPOINT</code>指定容器启动时执行的默认程序,一般运行容器时不会被替换或覆盖。</p><p>​ 除非使用<code>--entrypoint</code>进行指定。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--entrypoint</span> /bin/bash redis 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>CMD</code>可以在启动容器时被替换和覆盖。</p><p>例如<code>docker run -it --rm mysql:5.7 /bin/bash</code></p><p>如果镜像中<code>ENTRYPOINT</code>和<code>CMD</code>都存在，则<code>CMD</code>将作为<code>ENTRYPOINT</code>的参数使用。</p><p>参考文档：</p><p>https://docs.docker.com/get-started/09_image_best/</p><p>https://docs.docker.com/language/java/build-images/</p><p>https://docs.docker.com/storage/storagedriver/</p><p>https://docs.docker.com/develop/develop-images/dockerfile_best-practices/</p><p>https://docs.docker.com/engine/reference/run/#cmd-default-command-or-options</p>`,50),c=[p];function i(o,l){return s(),a("div",null,c)}const r=n(t,[["render",i],["__file","08.html.vue"]]);export{r as default};
