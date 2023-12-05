const l=JSON.parse('{"key":"v-163d5dbb","path":"/docs/original-files/programming-development/front-end/vue/day04.html","title":"04-组件写法、组件通信、进阶语法(v-model、ref、sync、$nextTick)","lang":"en-US","frontmatter":{"title":"04-组件写法、组件通信、进阶语法(v-model、ref、sync、$nextTick)","date":"2023/11/29"},"headers":[{"level":2,"title":"一、学习目标","slug":"一、学习目标","link":"#一、学习目标","children":[{"level":3,"title":"1.组件的三大组成部分（结构/样式/逻辑）","slug":"_1-组件的三大组成部分-结构-样式-逻辑","link":"#_1-组件的三大组成部分-结构-样式-逻辑","children":[]},{"level":3,"title":"2.组件通信","slug":"_2-组件通信","link":"#_2-组件通信","children":[]},{"level":3,"title":"3.综合案例：小黑记事本（组件版）","slug":"_3-综合案例-小黑记事本-组件版","link":"#_3-综合案例-小黑记事本-组件版","children":[]},{"level":3,"title":"4.进阶语法","slug":"_4-进阶语法","link":"#_4-进阶语法","children":[]}]},{"level":2,"title":"二、scoped解决样式冲突","slug":"二、scoped解决样式冲突","link":"#二、scoped解决样式冲突","children":[{"level":3,"title":"1.默认情况：","slug":"_1-默认情况","link":"#_1-默认情况","children":[]},{"level":3,"title":"2.代码演示","slug":"_2-代码演示","link":"#_2-代码演示","children":[]},{"level":3,"title":"3.scoped原理","slug":"_3-scoped原理","link":"#_3-scoped原理","children":[]},{"level":3,"title":"4.总结","slug":"_4-总结","link":"#_4-总结","children":[]}]},{"level":2,"title":"三、data必须是一个函数","slug":"三、data必须是一个函数","link":"#三、data必须是一个函数","children":[{"level":3,"title":"1、data为什么要写成函数","slug":"_1、data为什么要写成函数","link":"#_1、data为什么要写成函数","children":[]},{"level":3,"title":"2.代码演示","slug":"_2-代码演示-1","link":"#_2-代码演示-1","children":[]},{"level":3,"title":"3.总结","slug":"_3-总结","link":"#_3-总结","children":[]}]},{"level":2,"title":"四、组件通信","slug":"四、组件通信","link":"#四、组件通信","children":[{"level":3,"title":"1.什么是组件通信？","slug":"_1-什么是组件通信","link":"#_1-什么是组件通信","children":[]},{"level":3,"title":"2.组件之间如何通信","slug":"_2-组件之间如何通信","link":"#_2-组件之间如何通信","children":[]},{"level":3,"title":"3.组件关系分类","slug":"_3-组件关系分类","link":"#_3-组件关系分类","children":[]},{"level":3,"title":"4.通信解决方案","slug":"_4-通信解决方案","link":"#_4-通信解决方案","children":[]},{"level":3,"title":"5.父子通信流程","slug":"_5-父子通信流程","link":"#_5-父子通信流程","children":[]},{"level":3,"title":"6.父向子通信代码示例","slug":"_6-父向子通信代码示例","link":"#_6-父向子通信代码示例","children":[]},{"level":3,"title":"7.子向父通信代码示例","slug":"_7-子向父通信代码示例","link":"#_7-子向父通信代码示例","children":[]},{"level":3,"title":"8.总结","slug":"_8-总结","link":"#_8-总结","children":[]}]},{"level":2,"title":"五、什么是props","slug":"五、什么是props","link":"#五、什么是props","children":[{"level":3,"title":"1.Props 定义","slug":"_1-props-定义","link":"#_1-props-定义","children":[]},{"level":3,"title":"2.Props 作用","slug":"_2-props-作用","link":"#_2-props-作用","children":[]},{"level":3,"title":"3.特点","slug":"_3-特点","link":"#_3-特点","children":[]},{"level":3,"title":"4.代码演示","slug":"_4-代码演示","link":"#_4-代码演示","children":[]}]},{"level":2,"title":"六、props校验","slug":"六、props校验","link":"#六、props校验","children":[{"level":3,"title":"1.思考","slug":"_1-思考","link":"#_1-思考","children":[]},{"level":3,"title":"2.作用","slug":"_2-作用","link":"#_2-作用","children":[]},{"level":3,"title":"3.语法","slug":"_3-语法","link":"#_3-语法","children":[]},{"level":3,"title":"4.代码演示","slug":"_4-代码演示-1","link":"#_4-代码演示-1","children":[]}]},{"level":2,"title":"七、props校验完整写法","slug":"七、props校验完整写法","link":"#七、props校验完整写法","children":[{"level":3,"title":"1.语法","slug":"_1-语法","link":"#_1-语法","children":[]},{"level":3,"title":"2.代码实例","slug":"_2-代码实例","link":"#_2-代码实例","children":[]},{"level":3,"title":"3.注意","slug":"_3-注意","link":"#_3-注意","children":[]}]},{"level":2,"title":"八、props&data、单向数据流","slug":"八、props-data、单向数据流","link":"#八、props-data、单向数据流","children":[{"level":3,"title":"1.共同点","slug":"_1-共同点","link":"#_1-共同点","children":[]},{"level":3,"title":"2.区别","slug":"_2-区别","link":"#_2-区别","children":[]},{"level":3,"title":"3.单向数据流：","slug":"_3-单向数据流","link":"#_3-单向数据流","children":[]},{"level":3,"title":"4.代码演示","slug":"_4-代码演示-2","link":"#_4-代码演示-2","children":[]},{"level":3,"title":"5.口诀","slug":"_5-口诀","link":"#_5-口诀","children":[]}]},{"level":2,"title":"九、综合案例-组件拆分","slug":"九、综合案例-组件拆分","link":"#九、综合案例-组件拆分","children":[{"level":3,"title":"1.需求说明","slug":"_1-需求说明","link":"#_1-需求说明","children":[]},{"level":3,"title":"2.拆分基础组件","slug":"_2-拆分基础组件","link":"#_2-拆分基础组件","children":[]}]},{"level":2,"title":"十、综合案例-列表渲染","slug":"十、综合案例-列表渲染","link":"#十、综合案例-列表渲染","children":[]},{"level":2,"title":"十一、综合案例-添加功能","slug":"十一、综合案例-添加功能","link":"#十一、综合案例-添加功能","children":[]},{"level":2,"title":"十二、综合案例-删除功能","slug":"十二、综合案例-删除功能","link":"#十二、综合案例-删除功能","children":[]},{"level":2,"title":"十三、综合案例-底部功能及持久化存储","slug":"十三、综合案例-底部功能及持久化存储","link":"#十三、综合案例-底部功能及持久化存储","children":[]},{"level":2,"title":"十四、非父子通信-event bus 事件总线","slug":"十四、非父子通信-event-bus-事件总线","link":"#十四、非父子通信-event-bus-事件总线","children":[{"level":3,"title":"1.作用","slug":"_1-作用","link":"#_1-作用","children":[]},{"level":3,"title":"2.步骤","slug":"_2-步骤","link":"#_2-步骤","children":[]},{"level":3,"title":"3.代码示例","slug":"_3-代码示例","link":"#_3-代码示例","children":[]},{"level":3,"title":"4.总结","slug":"_4-总结-1","link":"#_4-总结-1","children":[]}]},{"level":2,"title":"十五、非父子通信-provide&inject","slug":"十五、非父子通信-provide-inject","link":"#十五、非父子通信-provide-inject","children":[{"level":3,"title":"1.作用","slug":"_1-作用-1","link":"#_1-作用-1","children":[]},{"level":3,"title":"2.场景","slug":"_2-场景","link":"#_2-场景","children":[]},{"level":3,"title":"3.语法","slug":"_3-语法-1","link":"#_3-语法-1","children":[]},{"level":3,"title":"4.注意","slug":"_4-注意","link":"#_4-注意","children":[]}]},{"level":2,"title":"十六、v-model原理","slug":"十六、v-model原理","link":"#十六、v-model原理","children":[{"level":3,"title":"1.原理：","slug":"_1-原理","link":"#_1-原理","children":[]},{"level":3,"title":"2.作用：","slug":"_2-作用-1","link":"#_2-作用-1","children":[]},{"level":3,"title":"3.注意","slug":"_3-注意-1","link":"#_3-注意-1","children":[]},{"level":3,"title":"4.代码示例","slug":"_4-代码示例","link":"#_4-代码示例","children":[]},{"level":3,"title":"5.v-model使用在其他表单元素上的原理","slug":"_5-v-model使用在其他表单元素上的原理","link":"#_5-v-model使用在其他表单元素上的原理","children":[]}]},{"level":2,"title":"十七、表单类组件封装","slug":"十七、表单类组件封装","link":"#十七、表单类组件封装","children":[{"level":3,"title":"1.需求目标","slug":"_1-需求目标","link":"#_1-需求目标","children":[]},{"level":3,"title":"2.代码演示","slug":"_2-代码演示-2","link":"#_2-代码演示-2","children":[]}]},{"level":2,"title":"十八、v-model简化代码","slug":"十八、v-model简化代码","link":"#十八、v-model简化代码","children":[{"level":3,"title":"1.目标：","slug":"_1-目标","link":"#_1-目标","children":[]},{"level":3,"title":"2.如何简化：","slug":"_2-如何简化","link":"#_2-如何简化","children":[]},{"level":3,"title":"3.代码示例","slug":"_3-代码示例-1","link":"#_3-代码示例-1","children":[]}]},{"level":2,"title":"十九、.sync修饰符","slug":"十九、-sync修饰符","link":"#十九、-sync修饰符","children":[{"level":3,"title":"1.作用","slug":"_1-作用-2","link":"#_1-作用-2","children":[]},{"level":3,"title":"2.场景","slug":"_2-场景-1","link":"#_2-场景-1","children":[]},{"level":3,"title":"3.本质","slug":"_3-本质","link":"#_3-本质","children":[]},{"level":3,"title":"4.语法","slug":"_4-语法","link":"#_4-语法","children":[]},{"level":3,"title":"5.代码示例","slug":"_5-代码示例","link":"#_5-代码示例","children":[]},{"level":3,"title":"6.总结","slug":"_6-总结","link":"#_6-总结","children":[]}]},{"level":2,"title":"二十、ref和$refs","slug":"二十、ref和-refs","link":"#二十、ref和-refs","children":[{"level":3,"title":"1.作用","slug":"_1-作用-3","link":"#_1-作用-3","children":[]},{"level":3,"title":"2.特点：","slug":"_2-特点","link":"#_2-特点","children":[]},{"level":3,"title":"3.语法","slug":"_3-语法-2","link":"#_3-语法-2","children":[]},{"level":3,"title":"4.注意","slug":"_4-注意-1","link":"#_4-注意-1","children":[]},{"level":3,"title":"5.代码示例","slug":"_5-代码示例-1","link":"#_5-代码示例-1","children":[]}]},{"level":2,"title":"二十一、异步更新 & $nextTick","slug":"二十一、异步更新-nexttick","link":"#二十一、异步更新-nexttick","children":[{"level":3,"title":"1.需求","slug":"_1-需求","link":"#_1-需求","children":[]},{"level":3,"title":"2.代码实现","slug":"_2-代码实现","link":"#_2-代码实现","children":[]},{"level":3,"title":"3.问题","slug":"_3-问题","link":"#_3-问题","children":[]},{"level":3,"title":"4.解决方案","slug":"_4-解决方案","link":"#_4-解决方案","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"docs/original-files/programming-development/front-end/vue/day04.md"}');export{l as data};
