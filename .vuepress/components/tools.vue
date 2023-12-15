<!--  -->
<script setup>
import { ref } from 'vue'
const toolsGroup = ref([
    {
        groupName: "框架类库",
        toolsList: [
            {
                title: "React",
                logo: "https://cdn.freebiesupply.com/logos/large/2x/react-logo-png-transparent.png",
                desc: "用于构建用户界面的Javscript库",
                link: "https://react.dev/"
            },
            {
                title: "Vue",
                logo: "https://pic1.zhimg.com/v2-a2b83e07b78e361ae6bc6f4e109e97b9_720w.jpg?source=172ae18b",
                desc: "构建数据驱动的web界面的渐进式框架",
                link: "https://cn.vuejs.org/"
            },
            {
                title: "jQuery",
                logo: "	https://www.jquery123.com/assets/images/jquery-logo-md.png",
                desc: "优秀的JavaScript代码库",
                link: "https://www.jquery123.com/"
            },
            {
                title: "Bootstrap",
                logo: "https://www.bootcss.com/assets/img/navlogo-small.png",
                desc: "基于HTML/CSS/Javscript的前端框架",
                link: "http://www.bootcss.com/"
            },
            {
                title: "React Native",
                logo: "https://cdn.freebiesupply.com/logos/large/2x/react-logo-png-transparent.png",
                desc: "使用React构建原生app的框架",
                link: "https://reactnative.cn/"
            },
            {
                title: "vk-unicloud快速开发框架",
                logo: "https://vkdoc.fsq.pub/image/logo.png",
                desc: "基于unicloud的快速开发框架，三端通用",
                link: "https://vkdoc.fsq.pub/"
            },
        ],
    },
    {
        groupName: "前端门户",
        toolsList: [
            {
                title: "印记中文",
                logo: "https://docschina.org/_next/static/media/docschina-logo.026ff887.svg",
                desc: "印记中文是最权威是技术中文文档社区",
                link: "https://docschina.org/"
            },
            {
                title: "W3cplus",
                logo: "https://tse3-mm.cn.bing.net/th/id/OIP-C.Lf2jjRvG5CIhOf90JACnxgHaFo?rs=1&pid=ImgDetMain",
                desc: "W3cplus是一个致力于推广国内前端行业的技术博客",
                link: "http://www.w3cplus.com/"
            },
        ],
    },
    {
        groupName: "字体图标",
        toolsList: [
            {
                title: "Iconfont",
                logo: "https://tse3-mm.cn.bing.net/th/id/OIP-C.f3yZ6i2HttqJhkAiB-3pjAHaHa?rs=1&pid=ImgDetMain",
                desc: "阿里巴巴矢量图标库",
                link: "https://www.iconfont.cn/"
            },
        ],
    },
    {
        groupName: "在线工具",
        toolsList: [
            {
                title: "爱测速网",
                logo: "https://www.aicesu.cn/static/images/logo.png",
                desc: "各种在线工具，包括密码生成、测网速、二维码生成、json转换等等",
                link: "https://www.aicesu.cn/mima/create.html"
            },
        ],
    },
    {
        groupName: "团队组织",
        toolsList: [
            {
                title: "腾讯 AlloyTeam 团队",
                logo: "",
                desc: "腾讯Web前端团队，代表作品WebQQ，致力于前端技术的研究",
                link: "http://www.alloyteam.com/"
            },
            {
                title: "ISUX",
                logo: "https://isux.tencent.com/static/images/logo.svg",
                desc: "腾讯社交用户体验设计，简称ISUX，腾讯设计团队网站",
                link: "https://isux.tencent.com/"
            },
        ],
    },
    {
        groupName: "游戏框架",
        toolsList: [
            {
                title: "PhaserJS",
                logo: "https://phaser.io/images/img2.png",
                desc: "PC端和移动端HTML5游戏框架。",
                link: "http://phaser.io/"
            },
            {
                title: "Cocos2d-x",
                logo: "https://www.cocos.com/_nuxt/img/logo.b924db5.png",
                desc: "以内容创作为核心的一体化游戏开发工具",
                link: "https://www.cocos.com/"
            },
        ],
    },
    {
        groupName: "书籍推荐",
        toolsList: [
            {
                title: "JavaScript权威指南",
                logo: "",
                desc: "学习 JavaScript 的必备书刊",
                link: "https://book.douban.com/subject/6854549/"
            },
            {
                title: "JavaScript高级程序设计",
                logo: "",
                desc: "红宝书",
                link: "https://book.douban.com/subject/10546125//"
            },
            {
                title: "JavaScript设计模式与开发实践",
                logo: "",
                desc: "本书将教会你如何把经典的设计模式应用到JavaScript语言中",
                link: "https://book.douban.com/subject/26382780/"
            },
            {
                title: "HTTP权威指南",
                logo: "",
                desc: "比较少见的全面介绍HTTP协议的书。",
                link: "https://book.douban.com/subject/10746113/"
            },
        ],
    },
]);
const logMessage = () => {
    console.log(message);
};
</script>

<template>
    <div class="box" v-for="(item,index) in toolsGroup" :key="index">
        <div class="box-title">{{ item.groupName }}</div>
        <div class="list">
            <a :href="value.link" target="_blank" v-for="(value,idx) in item.toolsList" :key="idx">
                <div class="list-item">
                    <div class="list-item-head">
                        <img :src="value.logo" alt="" v-if="value.logo">
                        <span v-else>{{ value.title.substring(0,1) }}</span>
                        {{ value.title }}
                    </div>
                    <div class="list-item-content">
                        {{ value.desc }}
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<style lang='scss' scoped>
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
.box {
    overflow: hidden;
    background: #fff;
    box-shadow: 0px 0px 3px 5px rgba(0, 0, 0, 0.1);
    margin: 20px 5px;
    padding-bottom: 20px;
    border-radius: 10px;
    
    .box-title {
        padding: 12px 0 0 2.1%;
        font-size: 18px;
    }

    .list {
        padding: 10px;
        overflow: hidden;

        .list-item {
            border-radius: 6px;
            background: #fff;
            padding: 10px;
            width: 30%;
            min-width: 200px;
            margin: 22px 0 0 2.1%;
            float: left;
            overflow: hidden;
            border: 1px solid #e4ecf3;
            box-shadow: 1px 2px 3px #f2f6f8;
            transition: all 0.25s linear 0ms;

            .list-item-head {
                height: 40px;
                position: relative;
                font-size: 14px;
                font-weight: 700;
                color: #3273dc;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                padding: 0 .1rem;
                

                &>img {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    vertical-align: middle;
                    margin: 0;
                    display: inline-block;
                    border: 1px #3273dc solid;
                }

                &>span {
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                    font-size: 18px;
                    font-weight: bold;
                    line-height: 40px;
                    text-align: center;
                    color: black;
                    border: 1px #3273dc solid;
                    border-radius: 50%;
                }
            }

            .list-item-content {
                color: gray;
                font-size: 12px;
                padding-top: 10px;
                height: 60px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }

        .list-item:hover {
            transform: translateY(-10px);
        }
        
    }
}

@media (max-width: 480px){
    .box .list .list-item {
        width: 46%;
        float: left;
        min-width: 100px;
        margin-left: 3%;
        margin-top: 12px;
    }
}
@media (min-width: 481px) {
    .box .list .list-item {
        width: 90%;
    }
}
@media (min-width: 768px) {
    .box .list .list-item {
        width: 46%;
    }
}
@media (min-width: 1040px) {
    .box .list .list-item {
        width: 28%;
    }
}
@media (min-width: 1200px){
    .box .list .list-item {
        width: 20%;
    }
}

</style>