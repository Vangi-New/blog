import{_ as d,r as o,o as n,c,b as e,e as t,d as a,a as i}from"./app-3fbdf476.js";const s={},h=e("h2",{id:"docker-是什么",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker-是什么","aria-hidden":"true"},"#"),t(" Docker 是什么")],-1),l=e("p",null,"Docker 是一个应用打包、分发、部署的工具 你也可以把它理解为一个轻量的虚拟机，它只虚拟你软件需要的运行环境，多余的一点都不要， 而普通虚拟机则是一个完整而庞大的系统，包含各种不管你要不要的软件。",-1),p={href:"https://www.bilibili.com/video/BV11L411g7U1",target:"_blank",rel:"noopener noreferrer"},_=e("h2",{id:"跟普通虚拟机的对比",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#跟普通虚拟机的对比","aria-hidden":"true"},"#"),t(" 跟普通虚拟机的对比")],-1),u={href:"https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/6/html/Resource_Management_Guide/ch01.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://lwn.net/Articles/528078/",target:"_blank",rel:"noopener noreferrer"},g=i('<p>因此，容器相比于虚拟机更加轻量化，它体积小，启动快，占用资源少，性能好。</p><p>虚拟机使用虚拟化技术，应用程序运行在完整的操作系统（OS）之上，因此占用的资源更多，安装更复杂。</p><p>但是由于容器与宿主机共享内核，所以在隔离性和安全性方面不如虚拟机。</p><table><thead><tr><th>特性</th><th>普通虚拟机</th><th>Docker</th></tr></thead><tbody><tr><td>跨平台</td><td>通常只能在桌面级系统运行，例如 Windows/Mac，无法在不带图形界面的服务器上运行</td><td>支持的系统非常多，各类 windows 和 Linux 都支持</td></tr><tr><td>性能</td><td>性能损耗大，内存占用高，因为是把整个完整系统都虚拟出来了</td><td>性能好，只虚拟软件所需运行环境，最大化减少没用的配置</td></tr><tr><td>自动化</td><td>需要手动安装所有东西</td><td>一个命令就可以自动部署好所需环境</td></tr><tr><td>稳定性</td><td>稳定性不高，不同系统差异大</td><td>稳定性好，不同系统都一样部署方式</td></tr></tbody></table><h2 id="打包、分发、部署" tabindex="-1"><a class="header-anchor" href="#打包、分发、部署" aria-hidden="true">#</a> 打包、分发、部署</h2><p><strong>打包</strong>：就是把你软件运行所需的依赖、第三方库、软件打包到一起，变成一个安装包 <strong>分发</strong>：你可以把你打包好的“安装包”上传到一个镜像仓库，其他人可以非常方便的获取和安装 <strong>部署</strong>：拿着“安装包”就可以一个命令运行起来你的应用，自动模拟出一摸一样的运行环境，不管是在 Windows/Mac/Linux。 <img src="https://cos.easydoc.net/46901064/files/kv7rlicu.png" alt="image.png"></p><h2 id="docker-部署的优势" tabindex="-1"><a class="header-anchor" href="#docker-部署的优势" aria-hidden="true">#</a> Docker 部署的优势</h2><blockquote><h4 id="一键部署-开箱即用" tabindex="-1"><a class="header-anchor" href="#一键部署-开箱即用" aria-hidden="true">#</a> 一键部署，开箱即用</h4><p>容器使用基于image镜像的部署模式，image中包含了运行应用程序所需的一切：代码、运行时、系统工具、系统库和配置文件。</p><p>无论是单个程序还是多个程序组成的复杂服务，或者分布式系统，都可以使用 <code>docker run</code> 或 <code>docker compose up</code>命令一键部署，省去了大量搭建、配置环境、调试和排查错误的时间。</p><h4 id="一次打包-到处运行" tabindex="-1"><a class="header-anchor" href="#一次打包-到处运行" aria-hidden="true">#</a> 一次打包，到处运行</h4><p>Docker 为容器创建了行业标准，使容器成为了软件交付过程中的一种标准化格式，将软打包成容器镜(image)，能够使软件在不同环境下运行一致，应用程序可以快速可靠地从一个环境移植到另外一个环境，并确保在所有的部署目标（例如开发、测试、生产环境）上都按预期运行，从而避免了“在我电脑上是好的，怎么到你那却不能用了？”的问题。</p></blockquote><h2 id="docker-通常用来做什么" tabindex="-1"><a class="header-anchor" href="#docker-通常用来做什么" aria-hidden="true">#</a> Docker 通常用来做什么</h2><ul><li>应用分发、部署，方便传播给他人安装。特别是开源软件和提供私有部署的应用</li><li>快速安装测试/学习软件，用完就丢（类似小程序），不把时间浪费在安装软件上。例如 Redis / MongoDB / ElasticSearch / ELK</li><li>多个版本软件共存，不污染系统，例如 Python2、Python3，Redis4.0，Redis5.0</li><li>Windows 上体验/学习各种 Linux 系统</li></ul><h2 id="重要概念-镜像、容器" tabindex="-1"><a class="header-anchor" href="#重要概念-镜像、容器" aria-hidden="true">#</a> 重要概念：镜像、容器</h2><p><strong>镜像</strong>：可以理解为软件安装包，可以方便的进行传播和安装。 <strong>容器</strong>：软件安装后的状态，每个软件运行环境都是独立的、隔离的，称之为容器。</p>',12);function f(b,m){const r=o("ExternalLinkIcon");return n(),c("div",null,[h,l,e("blockquote",null,[e("p",null,[t("本文档课件配套 "),e("a",p,[t("视频教程"),a(r)])])]),_,e("p",null,[t("容器包括应用程序及其所有依赖项。容器运行时，与宿主机共享操作系统内核，容器在linux内核层面（使用 "),e("a",u,[t("Cgroups"),a(r)]),t(" 和 "),e("a",k,[t("namespaces"),a(r)]),t("）来实现进程间的隔离，容器在主机操作系统上的用户空间中作为独立进程运行。")]),g])}const w=d(s,[["render",f],["__file","01.html.vue"]]);export{w as default};
