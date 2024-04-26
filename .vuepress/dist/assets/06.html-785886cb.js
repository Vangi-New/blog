import{_ as i,o as s,c as a,a as e,b as n}from"./app-73d38b75.js";const d={},r=e(`<p>本例子我们使用docker来部署一个应用系统，RuoYi是一款用java编写的，基于SpringBoot+Bootstrap的后台管理系统。</p><p>ruoyi官方文档：http://doc.ruoyi.vip/ruoyi/</p><p>源码下载：https://gitee.com/y_project/RuoYi/tree/v4.7.4/</p><p>将源码编译打包成ruoyi-admin.jar文件，放到宿主机/home/app目录下，/home/app/sql目录下是数据库初始化脚本。</p><p>配置文件中修改了端口、数据库连接信息。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#application.yml</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token comment"># 服务器的HTTP端口，默认为80</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>

<span class="token punctuation">---</span>
<span class="token comment">#application-druid.yml</span>
	<span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//ruoyi<span class="token punctuation">-</span>db<span class="token punctuation">:</span>3306/ry<span class="token punctuation">?</span>useUnicode=true<span class="token important">&amp;characterEncoding=utf8</span>
  <span class="token key atrule">username</span><span class="token punctuation">:</span> root
  <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建网络和存储卷</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>docker volume create ruoyi-data
docker network create ruoyi-net
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署mysql并初始化数据库" tabindex="-1"><a class="header-anchor" href="#部署mysql并初始化数据库" aria-hidden="true">#</a> 部署mysql并初始化数据库</h2><p>我们在创建数据库容器的时候，需要做三件事：</p><ul><li>创建数据库<code>ry</code></li><li>设置字符集为<code>utf-8</code></li><li>执行数据库初始化脚本</li></ul><p>使用<code>MYSQL_DATABASE</code>环境变量创建数据库</p><p>设置字符集<code>--character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci</code></p><p>容器使用<code>/docker-entrypoint-initdb.d</code>目录下的脚本初始化数据库，脚本可以是<code>.sh\`\`.sql</code>和</p><p><code>.sql.gz</code>这三种格式。</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>docker run -e MYSQL_ROOT_PASSWORD=123456 \\
           -e MYSQL_DATABASE=ry \\
					 -v /home/app/sql:/docker-entrypoint-initdb.d \\
           -v ruoyi-data:/var/lib/mysql  \\
        	 --network ruoyi-net \\
           --name ruoyi-db \\
           -d mysql:5.7 \\
           --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署应用" tabindex="-1"><a class="header-anchor" href="#部署应用" aria-hidden="true">#</a> 部署应用</h2><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>docker run -p 8080:8080 \\
					 -v /home/app/ruoyi-admin.jar:/usr/local/src/ruoyi-admin.jar \\
        	 --network ruoyi-net \\
           --name ruoyi-java \\
					 -d openjdk:8u342-jre \\
           java -jar /usr/local/src/ruoyi-admin.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解决乱码问题" tabindex="-1"><a class="header-anchor" href="#解决乱码问题" aria-hidden="true">#</a> 解决乱码问题：</h2><p>乱码问题是容器中mysql默认字符集引起的，我们需要将默认字符集改为<code>utf8mb4</code>。</p><p>参考：https://github.com/docker-library/mysql/issues/131</p><p>可以进入容器，使用以下命令查看数据库字符集</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">docker</span> exec -it ruoyi-db mysql -uroot -p

&gt;show variables like <span class="token string">&#39;%character%&#39;</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),l=n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"注意"),n("p",null,"由于删除容器不会删除存储卷，修改字符集需要删除存储卷，不然已经导入的数据字符集不会发生改变")],-1),c=e(`<p>删除容器和卷</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>docker stop ruoyi-db
docker rm ruoyi-db
docker volume rm ruoyi-data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过以下两种解决方法：</p><h3 id="_1-修改运行参数" tabindex="-1"><a class="header-anchor" href="#_1-修改运行参数" aria-hidden="true">#</a> 1.修改运行参数</h3><p>使用环境变量<code>LANG=C.UTF-8</code>设置客户端字符集</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>docker run  -e MYSQL_ROOT_PASSWORD=123456 \\
            -e MYSQL_DATABASE=ry \\
            -e LANG=C.UTF-8 \\
            -v /home/app/sql:/docker-entrypoint-initdb.d \\
            -v ruoyi-data:/var/lib/mysql  \\
            --network ruoyi-net \\
            --name ruoyi-db \\
            -d mysql:5.7 \\
            --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>或者</strong></p><p>使用--skip-character-set-client-handshake忽略客户端字符集，使用客户端和服务端字符集一致</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>docker run  -e MYSQL_ROOT_PASSWORD=123456 \\
            -e MYSQL_DATABASE=ry \\
            -v /home/app/sql:/docker-entrypoint-initdb.d \\
            -v ruoyi-data:/var/lib/mysql  \\
            --network ruoyi-net \\
            --name ruoyi-db \\
            -d mysql:5.7 \\
            --skip-character-set-client-handshake --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-修改配置文件" tabindex="-1"><a class="header-anchor" href="#_2-修改配置文件" aria-hidden="true">#</a> 2.修改配置文件</h3><p>修改<code>/home/mysql/mysql.cnf</code></p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>[mysqld]
character-set-server=utf8mb4
collation-server=utf8mb4_general_ci
init-connect=&#39;SET NAMES utf8mb4&#39;

[client]
default-character-set=utf8mb4

[mysql]
default-character-set=utf8mb4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将配置文件挂载到容器中</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>docker run -e MYSQL_ROOT_PASSWORD=123456 \\
           -e MYSQL_DATABASE=ry \\
           -v /home/mysql/mysql.cnf:/etc/mysql/conf.d/mysql.cnf:ro  \\
					 -v /home/app/sql:/docker-entrypoint-initdb.d \\
           -v ruoyi-data:/var/lib/mysql  \\
        	 --network ruoyi-net \\
           --name ruoyi-db \\
           -d mysql:5.7 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),t=[r,l,c];function o(u,v){return s(),a("div",null,t)}const p=i(d,[["render",o],["__file","06.html.vue"]]);export{p as default};
