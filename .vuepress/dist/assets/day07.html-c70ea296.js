const l=JSON.parse('{"key":"v-23b87332","path":"/docs/front-end/Vue/day07.html","title":"07-Vuex","lang":"en-US","frontmatter":{"title":"07-Vuex","date":"2023/11/29"},"headers":[{"level":2,"title":"一、Vuex 概述","slug":"一、vuex-概述","link":"#一、vuex-概述","children":[{"level":3,"title":"1.是什么","slug":"_1-是什么","link":"#_1-是什么","children":[]},{"level":3,"title":"2.使用场景","slug":"_2-使用场景","link":"#_2-使用场景","children":[]},{"level":3,"title":"3.优势","slug":"_3-优势","link":"#_3-优势","children":[]},{"level":3,"title":"4.注意：","slug":"_4-注意","link":"#_4-注意","children":[]}]},{"level":2,"title":"二、需求: 多组件共享数据","slug":"二、需求-多组件共享数据","link":"#二、需求-多组件共享数据","children":[{"level":3,"title":"1.创建项目","slug":"_1-创建项目","link":"#_1-创建项目","children":[]},{"level":3,"title":"2.创建三个组件, 目录如下","slug":"_2-创建三个组件-目录如下","link":"#_2-创建三个组件-目录如下","children":[]},{"level":3,"title":"3.源代码如下","slug":"_3-源代码如下","link":"#_3-源代码如下","children":[]}]},{"level":2,"title":"三、vuex 的使用 - 创建仓库","slug":"三、vuex-的使用-创建仓库","link":"#三、vuex-的使用-创建仓库","children":[{"level":3,"title":"1.安装 vuex","slug":"_1-安装-vuex","link":"#_1-安装-vuex","children":[]},{"level":3,"title":"2.新建 store/index.js 专门存放 vuex","slug":"_2-新建-store-index-js-专门存放-vuex","link":"#_2-新建-store-index-js-专门存放-vuex","children":[]},{"level":3,"title":"3.创建仓库 store/index.js","slug":"_3-创建仓库-store-index-js","link":"#_3-创建仓库-store-index-js","children":[]},{"level":3,"title":"4 在 main.js 中导入挂载到 Vue 实例上","slug":"_4-在-main-js-中导入挂载到-vue-实例上","link":"#_4-在-main-js-中导入挂载到-vue-实例上","children":[]},{"level":3,"title":"5.测试打印Vuex","slug":"_5-测试打印vuex","link":"#_5-测试打印vuex","children":[]}]},{"level":2,"title":"四、核心概念 - state 状态","slug":"四、核心概念-state-状态","link":"#四、核心概念-state-状态","children":[{"level":3,"title":"1.目标","slug":"_1-目标","link":"#_1-目标","children":[]},{"level":3,"title":"2.提供数据","slug":"_2-提供数据","link":"#_2-提供数据","children":[]},{"level":3,"title":"3.访问Vuex中的数据","slug":"_3-访问vuex中的数据","link":"#_3-访问vuex中的数据","children":[]},{"level":3,"title":"4.通过$store访问的语法","slug":"_4-通过-store访问的语法","link":"#_4-通过-store访问的语法","children":[]},{"level":3,"title":"5.代码实现","slug":"_5-代码实现","link":"#_5-代码实现","children":[]}]},{"level":2,"title":"五、通过辅助函数  - mapState获取 state中的数据","slug":"五、通过辅助函数-mapstate获取-state中的数据","link":"#五、通过辅助函数-mapstate获取-state中的数据","children":[{"level":3,"title":"1.第一步：导入mapState (mapState是vuex中的一个函数)","slug":"_1-第一步-导入mapstate-mapstate是vuex中的一个函数","link":"#_1-第一步-导入mapstate-mapstate是vuex中的一个函数","children":[]},{"level":3,"title":"2.第二步：采用数组形式引入state属性","slug":"_2-第二步-采用数组形式引入state属性","link":"#_2-第二步-采用数组形式引入state属性","children":[]},{"level":3,"title":"3.第三步：利用展开运算符将导出的状态映射给计算属性","slug":"_3-第三步-利用展开运算符将导出的状态映射给计算属性","link":"#_3-第三步-利用展开运算符将导出的状态映射给计算属性","children":[]}]},{"level":2,"title":"六、开启严格模式及Vuex的单项数据流","slug":"六、开启严格模式及vuex的单项数据流","link":"#六、开启严格模式及vuex的单项数据流","children":[{"level":3,"title":"1.目标","slug":"_1-目标-1","link":"#_1-目标-1","children":[]},{"level":3,"title":"2.直接在组件中修改Vuex中state的值","slug":"_2-直接在组件中修改vuex中state的值","link":"#_2-直接在组件中修改vuex中state的值","children":[]},{"level":3,"title":"3.开启严格模式","slug":"_3-开启严格模式","link":"#_3-开启严格模式","children":[]}]},{"level":2,"title":"七、核心概念-mutations","slug":"七、核心概念-mutations","link":"#七、核心概念-mutations","children":[{"level":3,"title":"1.定义mutations","slug":"_1-定义mutations","link":"#_1-定义mutations","children":[]},{"level":3,"title":"2.格式说明","slug":"_2-格式说明","link":"#_2-格式说明","children":[]},{"level":3,"title":"3.组件中提交 mutations","slug":"_3-组件中提交-mutations","link":"#_3-组件中提交-mutations","children":[]},{"level":3,"title":"4.练习","slug":"_4-练习","link":"#_4-练习","children":[]},{"level":3,"title":"5.总结","slug":"_5-总结","link":"#_5-总结","children":[]}]},{"level":2,"title":"八、带参数的 mutations","slug":"八、带参数的-mutations","link":"#八、带参数的-mutations","children":[{"level":3,"title":"1.目标：","slug":"_1-目标-2","link":"#_1-目标-2","children":[]},{"level":3,"title":"2.语法","slug":"_2-语法","link":"#_2-语法","children":[]}]},{"level":2,"title":"九、练习-mutations的减法功能","slug":"九、练习-mutations的减法功能","link":"#九、练习-mutations的减法功能","children":[{"level":3,"title":"1.步骤","slug":"_1-步骤","link":"#_1-步骤","children":[]},{"level":3,"title":"2.代码实现","slug":"_2-代码实现","link":"#_2-代码实现","children":[]}]},{"level":2,"title":"十、练习-Vuex中的值和组件中的input双向绑定","slug":"十、练习-vuex中的值和组件中的input双向绑定","link":"#十、练习-vuex中的值和组件中的input双向绑定","children":[{"level":3,"title":"1.目标","slug":"_1-目标-3","link":"#_1-目标-3","children":[]},{"level":3,"title":"2.实现步骤","slug":"_2-实现步骤","link":"#_2-实现步骤","children":[]},{"level":3,"title":"3.代码实现","slug":"_3-代码实现","link":"#_3-代码实现","children":[]}]},{"level":2,"title":"十一、辅助函数- mapMutations","slug":"十一、辅助函数-mapmutations","link":"#十一、辅助函数-mapmutations","children":[]},{"level":2,"title":"十二、核心概念 - actions","slug":"十二、核心概念-actions","link":"#十二、核心概念-actions","children":[{"level":3,"title":"1.定义actions","slug":"_1-定义actions","link":"#_1-定义actions","children":[]},{"level":3,"title":"2.组件中通过dispatch调用","slug":"_2-组件中通过dispatch调用","link":"#_2-组件中通过dispatch调用","children":[]}]},{"level":2,"title":"十三、辅助函数 -mapActions","slug":"十三、辅助函数-mapactions","link":"#十三、辅助函数-mapactions","children":[]},{"level":2,"title":"十四、核心概念 - getters","slug":"十四、核心概念-getters","link":"#十四、核心概念-getters","children":[{"level":3,"title":"1.定义getters","slug":"_1-定义getters","link":"#_1-定义getters","children":[]},{"level":3,"title":"2.使用getters","slug":"_2-使用getters","link":"#_2-使用getters","children":[]}]},{"level":2,"title":"十五、使用小结","slug":"十五、使用小结","link":"#十五、使用小结","children":[]},{"level":2,"title":"十六、核心概念 - module","slug":"十六、核心概念-module","link":"#十六、核心概念-module","children":[{"level":3,"title":"1.目标","slug":"_1-目标-4","link":"#_1-目标-4","children":[]},{"level":3,"title":"2.问题","slug":"_2-问题","link":"#_2-问题","children":[]},{"level":3,"title":"3.模块定义 - 准备 state","slug":"_3-模块定义-准备-state","link":"#_3-模块定义-准备-state","children":[]}]},{"level":2,"title":"十七、获取模块内的state数据","slug":"十七、获取模块内的state数据","link":"#十七、获取模块内的state数据","children":[{"level":3,"title":"1.目标：","slug":"_1-目标-5","link":"#_1-目标-5","children":[]},{"level":3,"title":"2.使用模块中的数据","slug":"_2-使用模块中的数据","link":"#_2-使用模块中的数据","children":[]},{"level":3,"title":"3.代码示例","slug":"_3-代码示例","link":"#_3-代码示例","children":[]}]},{"level":2,"title":"十八、获取模块内的getters数据","slug":"十八、获取模块内的getters数据","link":"#十八、获取模块内的getters数据","children":[{"level":3,"title":"1.目标：","slug":"_1-目标-6","link":"#_1-目标-6","children":[]},{"level":3,"title":"2.语法：","slug":"_2-语法-1","link":"#_2-语法-1","children":[]},{"level":3,"title":"3.代码演示","slug":"_3-代码演示","link":"#_3-代码演示","children":[]}]},{"level":2,"title":"十九、获取模块内的mutations方法","slug":"十九、获取模块内的mutations方法","link":"#十九、获取模块内的mutations方法","children":[{"level":3,"title":"1.目标：","slug":"_1-目标-7","link":"#_1-目标-7","children":[]},{"level":3,"title":"2.注意：","slug":"_2-注意","link":"#_2-注意","children":[]},{"level":3,"title":"3.调用方式：","slug":"_3-调用方式","link":"#_3-调用方式","children":[]},{"level":3,"title":"4.代码实现","slug":"_4-代码实现","link":"#_4-代码实现","children":[]}]},{"level":2,"title":"二十、获取模块内的actions方法","slug":"二十、获取模块内的actions方法","link":"#二十、获取模块内的actions方法","children":[{"level":3,"title":"1.目标：","slug":"_1-目标-8","link":"#_1-目标-8","children":[]},{"level":3,"title":"2.注意：","slug":"_2-注意-1","link":"#_2-注意-1","children":[]},{"level":3,"title":"3.调用语法：","slug":"_3-调用语法","link":"#_3-调用语法","children":[]},{"level":3,"title":"4.代码实现","slug":"_4-代码实现-1","link":"#_4-代码实现-1","children":[]}]},{"level":2,"title":"二十一、Vuex模块化的使用小结","slug":"二十一、vuex模块化的使用小结","link":"#二十一、vuex模块化的使用小结","children":[{"level":3,"title":"1.直接使用","slug":"_1-直接使用","link":"#_1-直接使用","children":[]},{"level":3,"title":"2.借助辅助方法使用","slug":"_2-借助辅助方法使用","link":"#_2-借助辅助方法使用","children":[]}]},{"level":2,"title":"二十二、综合案例 - 创建项目","slug":"二十二、综合案例-创建项目","link":"#二十二、综合案例-创建项目","children":[]},{"level":2,"title":"二十三、综合案例-构建vuex-cart模块","slug":"二十三、综合案例-构建vuex-cart模块","link":"#二十三、综合案例-构建vuex-cart模块","children":[]},{"level":2,"title":"二十四、综合案例-准备后端接口服务环境(了解)","slug":"二十四、综合案例-准备后端接口服务环境-了解","link":"#二十四、综合案例-准备后端接口服务环境-了解","children":[]},{"level":2,"title":"二十五、综合案例-请求动态渲染数据","slug":"二十五、综合案例-请求动态渲染数据","link":"#二十五、综合案例-请求动态渲染数据","children":[{"level":3,"title":"1.目标","slug":"_1-目标-9","link":"#_1-目标-9","children":[]}]},{"level":2,"title":"二十六、综合案例-修改数量","slug":"二十六、综合案例-修改数量","link":"#二十六、综合案例-修改数量","children":[]},{"level":2,"title":"二十七、综合案例-底部总价展示","slug":"二十七、综合案例-底部总价展示","link":"#二十七、综合案例-底部总价展示","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"docs/front-end/Vue/day07.md"}');export{l as data};
