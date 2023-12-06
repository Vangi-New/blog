import{_ as n,o as a,c as e,a as s}from"./app-42da9379.js";const i="/assets/20231206152211-1085afff.png",l="/assets/20231206152502-0623ae8e.png",d="/assets/20231206152547-0b0820f3.png",t="/assets/20231206161215-3559b938.png",r="/assets/20231206161307-8e9167f8.png",c="/assets/20231206162858-059f72e6.png",o="/assets/20231206163045-4b629d7d.png",u="/assets/20231206163711-a4f78dd1.png",p={},m=s(`<h2 id="git分布式版本控制工具" tabindex="-1"><a class="header-anchor" href="#git分布式版本控制工具" aria-hidden="true">#</a> Git分布式版本控制工具</h2><h2 id="_1-、目标" tabindex="-1"><a class="header-anchor" href="#_1-、目标" aria-hidden="true">#</a> 1 、目标</h2><ul><li>了解Git基本概念</li><li>能够概述git工作流程</li><li>能够使用Git常用命令</li><li>熟悉Git代码托管服务</li><li>能够使用idea操作git</li></ul><h2 id="_2-、概述" tabindex="-1"><a class="header-anchor" href="#_2-、概述" aria-hidden="true">#</a> 2 、概述</h2><h3 id="_2-1、开发中的实际场景" tabindex="-1"><a class="header-anchor" href="#_2-1、开发中的实际场景" aria-hidden="true">#</a> 2.1、开发中的实际场景</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>场景一：备份

   小明负责的模块就要完成了，就在即将Release之前的一瞬间，电脑突然蓝屏，硬盘光荣牺牲！几个月
来的努力付之东流
场景二：代码还原

 这个项目中需要一个很复杂的功能，老王摸索了一个星期终于有眉目了，可是这被改得面目全非的
代码已经回不到从前了。什么地方能买到哆啦A梦的时光机啊？
场景三：协同开发

 小刚和小强先后从文件服务器上下载了同一个文件：Analysis.java。小刚在Analysis.java

文件中的第30行声明了一个方法，叫count<span class="token punctuation">(</span><span class="token punctuation">)</span>，先保存到了文件服务器上；小强在Analysis.java文件中的
第50行声明了一个方法，叫sum<span class="token punctuation">(</span><span class="token punctuation">)</span>，也随后保存到了文件服务器上，于是，count<span class="token punctuation">(</span><span class="token punctuation">)</span>方法就只存在于小刚的记
忆中了

 

场景四：追溯问题代码的编写人和编写时间！

  老王是另一位项目经理，每次因为项目进度挨骂之后，他都不知道该扣哪个程序员的工资！就拿这
次来说吧，有个Bug调试了30多个小时才知道是因为相关属性没有在应用初始化时赋值！可是二胖、王东、刘
流和正经牛都不承认是自己干的！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2、版本控制器的方式" tabindex="-1"><a class="header-anchor" href="#_2-2、版本控制器的方式" aria-hidden="true">#</a> 2.2、版本控制器的方式</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>a、集中式版本控制工具

 集中式版本控制工具，版本库是集中存放在中央服务器的，team里每个人work时从中央服务器下载代
码，是必须联网才能工作，局域网或互联网。个人修改后然后提交到中央版本库。

 举例：SVN和CVS
b、分布式版本控制工具

 分布式版本控制系统没有“中央服务器”，每个人的电脑上都是一个完整的版本库，这样工作的时候，无
需要联网了，因为版本库就在你自己的电脑上。多人协作只需要各自的修改推送给对方，就能互相看到对方的
修改了。

 举例：Git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3、svn" tabindex="-1"><a class="header-anchor" href="#_2-3、svn" aria-hidden="true">#</a> 2.3、SVN</h3><p><img src="`+i+`" alt="68187588702"></p><h1 id="黑马程序员-北京昌平校区" tabindex="-1"><a class="header-anchor" href="#黑马程序员-北京昌平校区" aria-hidden="true">#</a> 黑马程序员 北京昌平校区</h1><h3 id="_2-4、git" tabindex="-1"><a class="header-anchor" href="#_2-4、git" aria-hidden="true">#</a> 2.4、Git</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Git是分布式的,Git不需要有中心服务器，我们每台电脑拥有的东西都是一样的。我们使用Git并且有个
中心服务器，仅仅是为了方便交换大家的修改，但是这个服务器的地位和我们每个人的PC是一样的。我们可以
把它当做一个开发者的pc就可以就是为了大家代码容易交流不关机用的。没有它大家一样可以工作，只不
过“交换”修改不方便而已。
git是一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理。Git是
Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。
同生活中的许多伟大事物一样，Git 诞生于一个极富纷争大举创新的年代。Linux 内核开源项目有着为数众
多的参与者。 绝大多数的 Linux 内核维护工作都花在了提交补丁和保存归档的繁琐事务上（ <span class="token number">1991</span> － <span class="token number">2002</span>
年间）。 到 <span class="token number">2002</span> 年，整个项目组开始启用一个专有的分布式版本控制系统 BitKeeper 来管理和维护代
码。
到了 <span class="token number">2005</span> 年，开发 BitKeeper 的商业公司同 Linux 内核开源社区的合作关系结束，他们收回了
Linux 内核社区免费使用 BitKeeper 的权力。 这就迫使 Linux 开源社区（特别是 Linux 的缔造者
Linus Torvalds）基于使用 BitKeeper 时的经验教训，开发出自己的版本系统。 他们对新的系统制订
了若干目标：
速度
简单的设计
对非线性开发模式的强力支持（允许成千上万个并行开发的分支）
完全分布式
有能力高效管理类似 Linux 内核一样的超大规模项目（速度和数据量）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+'" alt="68187588702"></p><h3 id="_2-5、git工作流程图" tabindex="-1"><a class="header-anchor" href="#_2-5、git工作流程图" aria-hidden="true">#</a> 2.5、Git工作流程图</h3><p><img src="'+d+`" alt="68187588702"></p><p>命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>. clone（克隆）: 从远程仓库中克隆代码到本地仓库
<span class="token number">2</span>. checkout （检出）:从本地仓库中检出一个仓库分支然后进行修订
<span class="token number">3</span>. add（添加）: 在提交前先将代码提交到暂存区
<span class="token number">4</span>. commit（提交）: 提交到本地仓库。本地仓库中保存修改的各个历史版本
<span class="token number">5</span>. fetch <span class="token punctuation">(</span>抓取<span class="token punctuation">)</span> ： 从远程库，抓取到本地仓库，不进行任何的合并动作，一般操作比较少。
<span class="token number">6</span>. pull <span class="token punctuation">(</span>拉取<span class="token punctuation">)</span> ： 从远程库拉到本地库，自动进行合并<span class="token punctuation">(</span>merge<span class="token punctuation">)</span>，然后放到到工作区，相当于
fetch+merge
<span class="token number">7</span>. push（推送） <span class="token builtin class-name">:</span> 修改完成后，需要和团队成员共享代码时，将代码推送到远程仓库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-、git安装与常用命令" tabindex="-1"><a class="header-anchor" href="#_3-、git安装与常用命令" aria-hidden="true">#</a> 3 、Git安装与常用命令</h2><p>本教程里的git命令例子都是在Git Bash中演示的，会用到一些基本的linux命令，在此为大家提前列举：</p><ul><li>ls/ll 查看当前目录</li><li>cat 查看文件内容</li><li>touch 创建文件</li><li>vi vi编辑器（使用vi编辑器是为了方便展示效果，学员可以记事本、editPlus、notPad++等其它编辑器）</li></ul><h3 id="_3-1、-git环境配置" tabindex="-1"><a class="header-anchor" href="#_3-1、-git环境配置" aria-hidden="true">#</a> 3.1、 Git环境配置</h3><h4 id="_3-1-1-下载与安装" tabindex="-1"><a class="header-anchor" href="#_3-1-1-下载与安装" aria-hidden="true">#</a> 3.1.1 下载与安装</h4><p>下载地址： https://git-scm.com/download</p><p>双击下载的安装文件来安装Git。安装完成后在电脑桌面（也可以是其他目录）点击右键，如果能够看 到关于git的两个菜单则说明Git安装成功</p><p>备注：</p><p>Git GUI：Git提供的图形界面工具</p><p>Git Bash：Git提供的命令行工具</p><p>当安装Git后首先要做的事情是设置用户名称和email地址。这是非常重要的，因为每次Git提交都会使用 该用户信息</p><h4 id="_3-1-2基本配置" tabindex="-1"><a class="header-anchor" href="#_3-1-2基本配置" aria-hidden="true">#</a> 3.1.2基本配置</h4><ol><li>打开Git Bash</li><li>设置用户信息</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name “itcast”

<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email “hello@itcast.cn”
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看配置信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name

<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-1-3-为常用指令配置别名-可选" tabindex="-1"><a class="header-anchor" href="#_3-1-3-为常用指令配置别名-可选" aria-hidden="true">#</a> 3.1.3 为常用指令配置别名（可选）</h4><p>有些常用的指令参数非常多，每次都要输入好多参数，我们可以使用别名。</p><ol><li>打开用户目录，创建.bashrc文件</li></ol><p>部分windows系统不允许用户创建点号开头的文件，可以打开gitBash,执行 touch ~/.bashrc</p><ol start="2"><li>在.bashrc文件中输入如下内容：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#用于输出git提交日志</span>

<span class="token builtin class-name">alias</span> git-log<span class="token operator">=</span><span class="token string">&#39;git log --pretty=oneline --all --graph --abbrev-commit&#39;</span>

<span class="token comment">#用于输出当前目录所有文件及基本信息</span>

<span class="token builtin class-name">alias</span> <span class="token assign-left variable">ll</span><span class="token operator">=</span><span class="token string">&#39;ls -al&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>打开gitBash，执行source ~/.bashrc</li></ol><h4 id="_3-1-4-解决gitbash乱码问题" tabindex="-1"><a class="header-anchor" href="#_3-1-4-解决gitbash乱码问题" aria-hidden="true">#</a> 3.1.4 解决GitBash乱码问题</h4><ol><li>打开GitBash执行下面命令</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> core.quotepath <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li><code>\${git_home}/etc/bash.bashrc</code> 文件最后加入下面两行</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>

<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">LC_ALL</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2、获取本地仓库" tabindex="-1"><a class="header-anchor" href="#_3-2、获取本地仓库" aria-hidden="true">#</a> 3.2、获取本地仓库</h3><p>要使用Git对我们的代码进行版本控制，首先需要获得本地仓库</p><p>1 ）在电脑的任意位置创建一个空目录（例如test）作为我们的本地Git仓库</p><p>2 ）进入这个目录中，点击右键打开Git bash窗口</p><p>3 ）执行命令git init</p><p>4 ）如果创建成功后可在文件夹下看到隐藏的.git目录。</p><p><img src="`+t+'" alt="68187588702"></p><h3 id="_3-3、基础操作指令" tabindex="-1"><a class="header-anchor" href="#_3-3、基础操作指令" aria-hidden="true">#</a> 3.3、基础操作指令</h3><p>Git工作目录下对于文件的 <strong>修改</strong> (增加、删除、更新)会存在几个状态，这些 <strong>修改</strong> 的状态会随着我们执行Git 的命令而发生变化。</p><p><img src="'+r+`" alt="68187588702"></p><p>本章节主要讲解如何使用命令来控制这些状态之间的转换：</p><ol><li>git add (工作区 --&gt; 暂存区)</li><li>git commit (暂存区 --&gt; 本地仓库)</li></ol><h4 id="_3-3-1、查看修改的状态-status" tabindex="-1"><a class="header-anchor" href="#_3-3-1、查看修改的状态-status" aria-hidden="true">#</a> 3.3.1、查看修改的状态（status）</h4><ul><li>作用：查看的修改的状态（暂存区、工作区）</li><li>命令形式：git status</li></ul><h4 id="_3-3-2、添加工作区到暂存区-add" tabindex="-1"><a class="header-anchor" href="#_3-3-2、添加工作区到暂存区-add" aria-hidden="true">#</a> 3.3.2、添加工作区到暂存区(add)</h4><ul><li>作用：添加工作区一个或多个文件的修改到暂存区</li><li>命令形式：git add 单个文件名|通配符 <ul><li>将所有修改加入暂存区：git add.</li></ul></li></ul><h4 id="_3-3-3、提交暂存区到本地仓库-commit" tabindex="-1"><a class="header-anchor" href="#_3-3-3、提交暂存区到本地仓库-commit" aria-hidden="true">#</a> 3.3.3、<em>提交暂存区到本地仓库(commit)</em>*</h4><ul><li>作用：提交暂存区内容到本地仓库的当前分支</li><li>命令形式：git commit -m &#39;注释内容&#39;</li></ul><h4 id="_3-3-4、查看提交日志-log" tabindex="-1"><a class="header-anchor" href="#_3-3-4、查看提交日志-log" aria-hidden="true">#</a> 3.3.4、<em>查看提交日志(log)</em>*</h4><p><strong>在3.1.3中配置的别名</strong> git <strong>-</strong> log <strong>就包含了这些参数，所以后续可以直接使用指令</strong> git <strong>-</strong> log</p><ul><li>作用:查看提交记录</li><li>命令形式：git log [option] <ul><li>options <ul><li>--all 显示所有分支</li><li>--pretty=oneline 将提交信息显示为一行</li><li>--abbrev-commit 使得输出的commitId更简短</li><li>--graph 以图的形式显示</li></ul></li></ul></li></ul><h4 id="_3-3-5、版本回退" tabindex="-1"><a class="header-anchor" href="#_3-3-5、版本回退" aria-hidden="true">#</a> 3.3.5、版本回退</h4><ul><li>作用：版本切换</li><li>命令形式：git reset --hard commitID <ul><li>commitID 可以使用git-log或git log指令查看</li></ul></li><li>如何查看已经删除的记录？ <ul><li>git reflog</li><li>这个指令可以看到已经删除的提交记录</li></ul></li></ul><h4 id="_3-3-6、添加文件至忽略列表" tabindex="-1"><a class="header-anchor" href="#_3-3-6、添加文件至忽略列表" aria-hidden="true">#</a> 3.3.6、添加文件至忽略列表</h4><p>一般我们总会有些文件无需纳入Git 的管理，也不希望它们总出现在未跟踪文件列表。 通常都是些自动 生成的文件，比如日志文件，或者编译过程中创建的临时文件等。 在这种情况下，我们可以在工作目录 中创建一个名为 .gitignore 的文件（文件名称固定），列出要忽略的文件模式。下面是一个示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># no .a files</span>
*.a
<span class="token comment"># but do track lib.a, even though you&#39;re ignoring .a files above</span>
<span class="token operator">!</span>lib.a
<span class="token comment"># only ignore the TODO file in the current directory, not subdir/TODO</span>
/TODO
<span class="token comment"># ignore all files in the build/ directory</span>
build/
<span class="token comment"># ignore doc/notes.txt, but not doc/server/arch.txt</span>
doc/*.txt
<span class="token comment"># ignore all .pdf files in the doc/ directory</span>
doc/**/*.pdf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="练习-基础操作" tabindex="-1"><a class="header-anchor" href="#练习-基础操作" aria-hidden="true">#</a> 练习:基础操作</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#####################仓库初始化######################</span>
<span class="token comment"># 创建目录（git_test01）并在目录下打开gitbash</span>
略
<span class="token comment"># 初始化git仓库</span>
<span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#####################创建文件并提交#####################</span>
<span class="token comment"># 目录下创建文件 file01.txt</span>
略
<span class="token comment"># 将修改加入暂存区</span>
<span class="token function">git</span> add.
<span class="token comment"># 将修改提交到本地仓库，提交记录内容为：commit 001</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;commit 001&#39;</span>
<span class="token comment"># 查看日志</span>
<span class="token function">git</span> log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">####################修改文件并提交######################</span>
<span class="token comment"># 修改file01的内容为：count=</span>
略
<span class="token comment"># 将修改加入暂存区</span>
<span class="token function">git</span> add.
<span class="token comment"># # 将修改提交到本地仓库，提交记录内容为：update file</span>
<span class="token function">git</span> commit <span class="token parameter variable">--m</span> <span class="token string">&#39;update file01&#39;</span>
<span class="token comment"># 查看日志</span>
<span class="token function">git</span> log
<span class="token comment"># 以精简的方式显示提交记录</span>
git-log
<span class="token comment">####################将最后一次修改还原##################</span>
<span class="token comment"># 查看提交记录</span>
git-log
<span class="token comment"># 找到倒数第 2 次提交的commitID</span>
略
<span class="token comment"># 版本回退</span>
<span class="token function">git</span> reset commitID <span class="token parameter variable">--hard</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4、分支" tabindex="-1"><a class="header-anchor" href="#_3-4、分支" aria-hidden="true">#</a> 3.4、分支</h3><p>几乎所有的版本控制系统都以某种形式支持分支。 使用分支意味着你可以把你的工作从开发主线上分离开来进行重大的Bug修改、开发新的功能，以免影响开发主线。</p><h4 id="_3-4-1、查看本地分支" tabindex="-1"><a class="header-anchor" href="#_3-4-1、查看本地分支" aria-hidden="true">#</a> <strong>3.4.1、查看本地分支</strong></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>命令：git branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-4-2、创建本地分支" tabindex="-1"><a class="header-anchor" href="#_3-4-2、创建本地分支" aria-hidden="true">#</a> <strong>3.4.2、创建本地分支</strong></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>命令：git branch 分支名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-4-4、切换分支-checkout" tabindex="-1"><a class="header-anchor" href="#_3-4-4、切换分支-checkout" aria-hidden="true">#</a> *<em>3.4.4、<em>切换分支(checkout)</em></em></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>命令：git checkout 分支名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们还可以直接切换到一个不存在的分支（创建并切换）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>命令：git checkout <span class="token parameter variable">-b</span> 分支名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-4-6、合并分支-merge" tabindex="-1"><a class="header-anchor" href="#_3-4-6、合并分支-merge" aria-hidden="true">#</a> *<em>3.4.6、<em>合并分支(merge)</em></em></h4><p>一个分支上的提交可以合并到另一个分支</p><p>命令：git merge 分支名称</p><h4 id="_3-4-7、删除分支" tabindex="-1"><a class="header-anchor" href="#_3-4-7、删除分支" aria-hidden="true">#</a> <strong>3.4.7、删除分支</strong></h4><p><strong>不能删除当前分支，只能删除其他分支</strong></p><p><code>git branch -d b1</code> 删除分支时，需要做各种检查</p><p><code>git branch -D b1</code> 不做任何检查，强制删除</p><h4 id="_3-4-8、解决冲突" tabindex="-1"><a class="header-anchor" href="#_3-4-8、解决冲突" aria-hidden="true">#</a> <strong>3.4.8、解决冲突</strong></h4><p>当两个分支上对文件的修改可能会存在冲突，例如同时修改了同一个文件的同一行，这时就需要手动解 决冲突，解决冲突步骤如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>. 处理文件中冲突的地方
<span class="token number">2</span>. 将解决完冲突的文件加入暂存区<span class="token punctuation">(</span>add<span class="token punctuation">)</span>
<span class="token number">3</span>. 提交到仓库<span class="token punctuation">(</span>commit<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>冲突部分的内容处理如下所示：</p><p><img src="`+c+'" alt=""></p><h4 id="_3-4-9、开发中分支使用原则与流程" tabindex="-1"><a class="header-anchor" href="#_3-4-9、开发中分支使用原则与流程" aria-hidden="true">#</a> 3.4.9、开发中分支使用原则与流程</h4><p>几乎所有的版本控制系统都以某种形式支持分支。 使用分支意味着你可以把你的工作从开发主线上分离</p><p>开来进行重大的Bug修改、开发新的功能，以免影响开发主线。</p><p>在开发中，一般有如下分支使用原则与流程：</p><ul><li>master （生产） 分支 线上分支，主分支，中小规模项目作为线上运行的应用对应的分支； develop（开发）分支是从master创建的分支，一般作为开发部门的主要开发分支，如果没有其他并行开发不同期上线 要求，都可以在此版本进行开发，阶段开发完成后，需要是合并到master分支,准备上线。</li><li>feature/xxxx分支 从develop创建的分支，一般是同期并行开发，但不同期上线时创建的分支，分支上的研发任务完成后合并到develop分支。</li><li>hotfix/xxxx分支， 从master派生的分支，一般作为线上bug修复使用，修复完成后需要合并到master、test、develop分支。</li><li>还有一些其他分支，在此不再详述，例如test分支（用于代码测试）、pre分支（预上线分支）等等。</li></ul><h4 id="练习-分支操作" tabindex="-1"><a class="header-anchor" href="#练习-分支操作" aria-hidden="true">#</a> 练习:分支操作</h4><p><img src="'+o+`" alt=""></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">###########################创建并切换到dev01分支，在dev01分支提交</span>
<span class="token comment"># [master]创建分支dev</span>
<span class="token function">git</span> branch dev
<span class="token comment"># [master]切换到dev</span>
<span class="token function">git</span> checkout dev
<span class="token comment"># [dev01]创建文件file02.txt</span>
略
<span class="token comment"># [dev01]将修改加入暂存区并提交到仓库,提交记录内容为：add file02 on dev</span>
<span class="token function">git</span> add.
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;add file02 on dev&#39;</span>
<span class="token comment"># [dev01]以精简的方式显示提交记录</span>
git-log
<span class="token comment">###########################切换到master分支，将dev01合并到master分支</span>
<span class="token comment"># [dev01]切换到master分支</span>
<span class="token function">git</span> checkout master
<span class="token comment"># [master]合并dev01到master分支</span>
<span class="token function">git</span> merge dev
<span class="token comment"># [master]以精简的方式显示提交记录</span>
git-log
<span class="token comment"># [master]查看文件变化(目录下也出现了file02.txt)</span>
略
<span class="token comment">##########################删除dev01分支</span>
<span class="token comment"># [master]删除dev01分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> dev
<span class="token comment"># [master]以精简的方式显示提交记录</span>
git-log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-、git远程仓库" tabindex="-1"><a class="header-anchor" href="#_4-、git远程仓库" aria-hidden="true">#</a> 4 、Git远程仓库</h2><h3 id="_4-1、-常用的托管服务-远程仓库" tabindex="-1"><a class="header-anchor" href="#_4-1、-常用的托管服务-远程仓库" aria-hidden="true">#</a> 4.1、 常用的托管服务[远程仓库]</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>前面我们已经知道了Git中存在两种类型的仓库，即本地仓库和远程仓库。那么我们如何搭建Git远程仓库
呢？我们可以借助互联网上提供的一些代码托管服务来实现，其中比较常用的有GitHub、码云、GitLab等。
gitHub（ 地址：https://github.com/ ）是一个面向开源及私有软件项目的托管平台，因为只支持
Git 作为唯一的版本库格式进行托管，故名gitHub
码云（地址： https://gitee.com/ ）是国内的一个代码托管平台，由于服务器在国内，所以相比于
GitHub，码云速度会更快
GitLab （地址： https://about.gitlab.com/ ）是一个用于仓库管理系统的开源项目，使用Git作
为代码管理工具，并在此基础上搭建起来的web服务,一般用于在企业、学校等内部网络搭建git私服。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2、-注册码云" tabindex="-1"><a class="header-anchor" href="#_4-2、-注册码云" aria-hidden="true">#</a> 4.2、 注册码云</h3><p>要想使用码云的相关服务，需要注册账号（地址： https://gitee.com/signup ）</p><h3 id="_4-3、-创建远程仓库" tabindex="-1"><a class="header-anchor" href="#_4-3、-创建远程仓库" aria-hidden="true">#</a> 4.3、 创建远程仓库</h3><p>仓库创建完成后可以看到仓库地址，选择ssh即可看到仓库的ssh地址</p><h3 id="_4-4、配置ssh公钥" tabindex="-1"><a class="header-anchor" href="#_4-4、配置ssh公钥" aria-hidden="true">#</a> 4.4、配置SSH公钥</h3><ul><li>生成SSH公钥 <ul><li>ssh-keygen -t rsa</li><li>不断回车 <ul><li>如果公钥已经存在，则自动覆盖</li></ul></li></ul></li><li>Gitee设置账户共公钥 <ul><li>获取公钥 <ul><li>cat ~/.ssh/id_rsa.pub</li></ul></li><li><img src="`+u+'" alt=""></li></ul></li><li>验证是否配置成功 <ul><li>ssh -T git@gitee.com</li></ul></li></ul><h3 id="_4-5、操作远程仓库" tabindex="-1"><a class="header-anchor" href="#_4-5、操作远程仓库" aria-hidden="true">#</a> 4.5、操作远程仓库</h3><h4 id="_4-5-1、添加远程仓库" tabindex="-1"><a class="header-anchor" href="#_4-5-1、添加远程仓库" aria-hidden="true">#</a> 4.5.1、添加远程仓库</h4><p>此操作是先初始化本地库，然后与已创建的远程库进行对接 。</p><ul><li>命令： git remote add &lt;远端名称&gt; &lt;仓库路径&gt; <ul><li>远端名称，默认是origin，取决于远端服务器设置</li><li>仓库路径，从远端服务器获取此URL</li><li>例如: git remote add origin git@gitee.com:czbk_zhang_meng/git_test.git</li></ul></li></ul><h4 id="_4-5-2、查看远程仓库" tabindex="-1"><a class="header-anchor" href="#_4-5-2、查看远程仓库" aria-hidden="true">#</a> 4.5.2、查看远程仓库</h4><ul><li>命令：git remote</li></ul><h4 id="_4-5-3、推送到远程仓库" tabindex="-1"><a class="header-anchor" href="#_4-5-3、推送到远程仓库" aria-hidden="true">#</a> 4.5.3、推送到远程仓库</h4><ul><li>命令：git push [-f] [--set-upstream] [远端名称 [本地分支名][:远端分支名] ] <ul><li>如果远程分支名和本地分支名称相同，则可以只写本地分支 <ul><li>git push origin master</li></ul></li><li>-f 表示强制覆盖</li><li>--set-upstream 推送到远端的同时并且建立起和远端分支的关联关系。 <ul><li>git push --set-upstream origin master</li></ul></li><li>如果 当前分支已经和远端分支关联 ，则可以省略分支名和远端名。 <ul><li>git push 将master分支推送到已关联的远端分支。</li></ul></li></ul></li></ul><h4 id="_4-5-4、-本地分支与远程分支的关联关系" tabindex="-1"><a class="header-anchor" href="#_4-5-4、-本地分支与远程分支的关联关系" aria-hidden="true">#</a> 4.5.4、 本地分支与远程分支的关联关系</h4><ul><li>查看关联关系我们可以使用 git branch -vv命令</li></ul><h4 id="_4-5-5、从远程仓库克隆" tabindex="-1"><a class="header-anchor" href="#_4-5-5、从远程仓库克隆" aria-hidden="true">#</a> 4.5.5、从远程仓库克隆</h4><p>如果已经有一个远端仓库，我们可以直接clone到本地。</p><ul><li>命令: <code>git clone &lt;仓库路径&gt; [本地目录]</code><ul><li>本地目录可以省略，会自动生成一个目录</li></ul></li></ul><h4 id="_4-5-6、从远程仓库中抓取和拉取" tabindex="-1"><a class="header-anchor" href="#_4-5-6、从远程仓库中抓取和拉取" aria-hidden="true">#</a> 4.5.6、从远程仓库中抓取和拉取</h4><p>远程分支和本地的分支一样，我们可以进行merge操作，只是需要先把远端仓库里的更新都下载到本 地，再进行操作。</p><ul><li><p>抓取 命令：git fetch [remote name] [branch name]</p><ul><li><strong>抓取指令就是将仓库里的更新都抓取到本地，不会进行合并</strong></li><li>如果不指定远端名称和分支名，则抓取所有分支。</li></ul></li><li><p>拉取 命令：<code>git pull [remote name] [branch name]</code></p><ul><li>拉取指令就是将远端仓库的修改拉到本地并自动进行合并，等同于fetch+merge</li><li>如果不指定远端名称和分支名，则抓取所有并更新当前分支。</li></ul></li></ul><h4 id="_4-5-7、解决合并冲突" tabindex="-1"><a class="header-anchor" href="#_4-5-7、解决合并冲突" aria-hidden="true">#</a> 4.5.7、解决合并冲突</h4><p>在一段时间，A、B用户修改了同一个文件，且修改了同一行位置的代码，此时会发生合并冲突。</p><p>A用户在本地修改代码后优先推送到远程仓库，此时B用户在本地修订代码，提交到本地仓库后，也需要推送到远程仓库，此时B用户晚于A用户， 故需要先拉取远程仓库的提交，经过合并后才能推送到远端分支 ,如下图所示。</p><p>在B用户拉取代码时，因为A、B用户同一段时间修改了同一个文件的相同位置代码，故会发生合并冲突。</p><p>远程分支也是分支，所以合并时冲突的解决方式也和解决本地分支冲突相同相同 ，在此不再赘述。</p>',136),v=[m];function h(b,g){return a(),e("div",null,v)}const _=n(p,[["render",h],["__file","heima-tutorial.html.vue"]]);export{_ as default};
