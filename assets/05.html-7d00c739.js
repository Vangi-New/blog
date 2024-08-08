import{_ as e,o as n,c as i,a as d}from"./app-6c7fecab.js";const a={},l=d(`<p>将数据存储在容器中，一旦容器被删除，数据也会被删除。同时也会使容器变得越来越大，不方便恢复和迁移。</p><p>将数据存储到容器之外，这样删除容器也不会丢失数据。一旦容器故障，我们可以重新创建一个容器，将数据挂载到容器里，就可以快速的恢复。</p><h2 id="存储方式" tabindex="-1"><a class="header-anchor" href="#存储方式" aria-hidden="true">#</a> 存储方式</h2><p>docker 提供了以下存储选项</p><p><img src="https://cdn.nlark.com/yuque/0/2022/png/28915315/1660706155357-ef4e6649-4ed5-4958-b68d-ba9530acf4b0.png" alt="img"></p><ul><li><strong>volume 卷</strong></li></ul><p><strong>卷</strong>存储在主机文件系统分配一块专有存储区域，<em>由 Docker</em>（在 Linux 上）管理，并且与主机的核心功能隔离。非 Docker 进程不能修改文件系统的这一部分。卷是在 Docker 中持久保存数据的最佳方式。</p><ul><li><strong>bind mount 绑定挂载</strong></li></ul><p><strong>绑定挂载</strong>可以将主机文件系统上目录或文件<em>装载到容器中</em>，但是主机上的非 Docker 进程可以修改它们，同时在<strong>容器</strong>中也可以更改<strong>主机</strong>文件系统，包括创建、修改或删除文件或目录，使用不当，可能会带来安全隐患。</p><ul><li><strong>tmpfs</strong> <strong>临时挂载</strong></li></ul><p><strong>tmpfs挂载</strong>仅存储在主机系统的内存中，从不写入主机系统的文件系统。当容器停止时，数据将被删除。</p><h2 id="绑定挂载-bind-mount" tabindex="-1"><a class="header-anchor" href="#绑定挂载-bind-mount" aria-hidden="true">#</a> 绑定挂载（bind mount）</h2><p>绑定挂载适用以下场景：</p><ul><li><p>将配置文件从主机共享到容器。</p></li><li><p>在 Docker 主机上的开发环境和容器之间共享源代码或编译目录。</p></li><li><ul><li>例如，可以将 Maven 的<code>target/</code>目录挂载到容器中，每次在主机上用 Maven打包项目时，容器内都可以使用新编译的程序包。</li></ul></li></ul><h3 id="v" tabindex="-1"><a class="header-anchor" href="#v" aria-hidden="true">#</a> -v</h3><p>绑定挂载将主机上的目录或者文件装载到容器中。绑定挂载会覆盖容器中的目录或文件。</p><p>如果宿主机目录不存在，docker会自动创建这个目录。但是docker只自动创建文件夹，不会创建文件。</p><p>例如，mysql的配置文件和数据存储目录使用主机的目录。可以将配置文件设置为只读（read-only）防止容器更改主机中的文件。</p><p>使用 <code>:ro</code> 设置为只读</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>docker run -e MYSQL_ROOT_PASSWORD=123456 \\
           -v /home/mysql/mysql.cnf:/etc/mysql/conf.d/mysql.cnf:ro  \\
           -v /home/mysql/data:/var/lib/mysql  \\
           -d mysql:5.7 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tmpfs-临时挂载" tabindex="-1"><a class="header-anchor" href="#tmpfs-临时挂载" aria-hidden="true">#</a> --tmpfs 临时挂载</h3><p>临时挂载将数据保留在主机内存中，当容器停止时，文件将被删除。</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>docker run -d -it --tmpfs /tmp nginx:1.22-alpine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="volume-卷" tabindex="-1"><a class="header-anchor" href="#volume-卷" aria-hidden="true">#</a> volume 卷</h2><p>卷 是docker 容器存储数据的首选方式，卷有以下优势：</p><ul><li>卷可以在多个正在运行的容器之间共享数据。仅当显式删除卷时，才会删除卷。</li><li>当你想要将容器数据存储在外部网络存储上或云提供商上，而不是本地时。</li><li>卷更容易备份或迁移，当您需要备份、还原数据或将数据从一个 Docker 主机迁移到另一个 Docker 主机时，卷是更好的选择。</li></ul><h3 id="创建和挂载卷" tabindex="-1"><a class="header-anchor" href="#创建和挂载卷" aria-hidden="true">#</a> 创建和挂载卷</h3><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>docker volume create my-data

docker run -e MYSQL_ROOT_PASSWORD=123456 \\
           -v /home/mysql/conf.d/my.cnf:/etc/mysql/conf.d/my.cnf:ro  \\
           -v my-data:/var/lib/mysql  \\
           -d mysql:5.7 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建nfs卷</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>docker volume create --driver local \\
    --opt type=nfs \\
    --opt o=addr=192.168.1.1,rw \\
    --opt device=:/path/to/dir \\
    vol-nfs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30),r=[l];function s(c,o){return n(),i("div",null,r)}const m=e(a,[["render",s],["__file","05.html.vue"]]);export{m as default};
