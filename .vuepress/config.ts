import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
    title: "小花花幼儿园",
    description: "小花花幼儿园院长的知识笔记库",
    // 部署在nginx或者仓库上，则需要注意配置前置路径，以防访问不到静态资源
    // base: "/blog/",
    // dest: './dist',
    // port: 7777,
    theme: recoTheme({
        style: "@vuepress-reco/style-default",
        logo: "/logo2.png",
        author: "vangiNew",
        authorAvatar: "/avatar.jpg",
        // docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
        // docsBranch: "main",
        // docsDir: "example",
        lastUpdatedText: "最后更新时间",
        // series 为原 sidebar
        series: {
            "/docs/others/": [
                {
                    text: "module one",
                    children: ["donate"],
                },
                {
                    text: "module two",
                    children: ["mark-home"],
                },
            ],
            // "/docs/front-end/": [
            //     "/docs/front-end/guide.html",
            //     {
            //         text: "Vue",
            //         children: [
            //             "/docs/front-end/Vue/day01.html",
            //             "/docs/front-end/Vue/day02.html",
            //             "/docs/front-end/Vue/day03.html",
            //             "/docs/front-end/Vue/day04.html",
            //             "/docs/front-end/Vue/day05.html",
            //             "/docs/front-end/Vue/day06.html",
            //             "/docs/front-end/Vue/day07.html",
            //             "/docs/front-end/Vue/智慧商城项目.html",
            //             "/docs/front-end/Vue/day11-Vue3入门.html",
            //             "/docs/front-end/Vue/Pinia.html",
            //             "/docs/front-end/Vue/大事件管理系统.html",
            //         ],
            //         collapsible: true // 默认展开，true 为折叠
            //     },
            // ]
        },
        // 自动设置series
        autoSetSeries: true,
        // 顶部导航
        navbar: [
            {
                text: "博客",
                icon: "Blog",
                children: [
                    { text: "分类", link: "/categories/reco/1/" },
                    { text: "标签", link: "/tags/tag1/1/" },
                    { text: "博客列表", link: "/posts" },
                    { text: "时间轴", link: "/timeline" },
                ],
            },
            {
                text: "文档",
                icon: "Book",
                children: [
                    { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
                    { text: "Vue基础", link: "/docs/front-end/Vue/day01.html" },
                ],
            },
            { text: "友情链接", icon: "Launch", link: "/friendship-link" },
        ],
        // 自动设置分类
        autoSetBlogCategories: false,
        // 自动将分类和标签添加至头部导航条
        // autoAddCategoryToNavbar: {
        //     location: 0, // 默认 0
        //     categoryText: '分类', // 默认 categories
        //     tagText: '标签' // 默认 tags
        // },
        // 公告内容
        bulletin: {
            body: [
                {
                    type: "text",
                    content: `🎉🎉🎉 vuepress应用reco 主题 2.x 个人知识博客。`,
                    style: "font-size: 12px;",
                },
                {
                    type: "hr",
                },
                {
                    type: "title",
                    content: "本站为小花花幼儿园院长个人博客，站内文章均为站长个人原创，若需转载，请注明出处，并附上原文链接，否则视为侵权。",
                    style: "font-size: 12px;",
                },
                {
                  type: "hr",
                },
                {
                  type: "text",
                  content: `
                  <ul>
                    <li>QQ：616481584</li>
                    <li><a target="_blank" href="https://gitee.com/vangi">gitee<a/></li>
                  </ul>`,
                  style: "font-size: 12px;",
                },
                {
                    type: "hr",
                },
                {
                    type: "buttongroup",
                    children: [
                        {
                            text: "打赏",
                            link: "/docs/others/donate.html",
                        },
                    ],
                },
            ],
        },
        // commentConfig: {
        //   type: 'valie',
        //   // options 与 1.x 的 valineConfig 配置一致
        //   options: {
        //     // appId: 'xxx',
        //     // appKey: 'xxx',
        //     // placeholder: '填写邮箱可以收到回复提醒哦！',
        //     // verify: true, // 验证码服务
        //     // notify: true,
        //     // recordIP: true,
        //     // hideComments: true // 隐藏评论
        //   },
        // },
        // 自定义目录标题
        catalogTitle: '锚(喵！)',
        // 友情链接
        friendshipLinks: [
            {
                title: 'vuepress-recovuepress-reco',
                logo: 'https://avatars.githubusercontent.com/u/54167020?s=200&v=4',
                link: 'https://github.com/vuepress-reco'
            }
        ],
    }),
    // debug: true,
});
