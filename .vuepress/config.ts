import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
    title: "自爆吧",
    description: "Just playing around",
    // 部署在nginx或者仓库上，则需要注意配置前置路径，以防访问不到静态资源
    base: "/test-documentation/",
    // dest: './dist',
    // port: 7777,
    theme: recoTheme({
        style: "@vuepress-reco/style-default",
        logo: "/logo2.png",
        author: "vangiNew",
        authorAvatar: "/26.jpg",
        docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
        docsBranch: "main",
        docsDir: "example",
        lastUpdatedText: "",
        // series 为原 sidebar
        series: {
            "/docs/theme-reco/": [
                {
                    text: "module one",
                    children: ["home", "theme"],
                },
                {
                    text: "module two",
                    children: ["api", "plugin"],
                },
            ],
        },
        navbar: [
            { text: "Home", link: "/" },
            {
                text: "博客",
                children: [
                    { text: "分类", link: "/categories/reco/1/" },
                    { text: "标签", link: "/tags/tag1/1/" },
                    { text: "博客列表", link: "/posts" },
                    { text: "时间轴", link: "/timeline" },
                ],
            },
            {
                text: "文档",
                children: [
                    { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
                ],
            },
            { text: "友情链接", link: "/friendship-link" },
        ],
        // 自动设置分类
        autoSetBlogCategories: false,
        // 自动将分类和标签添加至头部导航条
        // autoAddCategoryToNavbar: {
        //     location: 0, // 默认 0
        //     categoryText: '分类', // 默认 categories
        //     tagText: '标签' // 默认 tags
        // },
        // 自动设置分类
        autoSetSeries: false,
        bulletin: {
            body: [
                {
                    type: "text",
                    content: `🎉🎉🎉 vuepress应用reco 主题 2.x 个人知识博客demo版本。`,
                    style: "font-size: 12px;",
                },
                {
                    type: "hr",
                },
                {
                    type: "title",
                    content: "我的身份",
                },
                {
                    type: "text",
                    content: `
          <ul>
            <li>QQ：616481584</li>
            <li>wechat：1061561395</li>
            <li>phone：962687802</li>
          </ul>`,
                    style: "font-size: 12px;",
                },
                // {
                //   type: "hr",
                // },
                // {
                //   type: "title",
                //   content: "GitHub",
                // },
                // {
                //   type: "text",
                //   content: `
                //   <ul>
                //     <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
                //     <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
                //   </ul>`,
                //   style: "font-size: 12px;",
                // },
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
                title: 'vuepress-recovuepress-recovuepress-recovuepress-reco',
                logo: 'https://avatars.githubusercontent.com/u/54167020?s=200&v=4',
                link: 'https://github.com/vuepress-reco'
            }
        ],
    }),
    // debug: true,
});
