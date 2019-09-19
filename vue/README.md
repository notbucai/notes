# VueJs

## Vue vuex vue-router 插件注入过程

> 首先调用 Vue.use 后，  
> 内部执行 install 方法   
> install 内部执行 Vue.mixin 将Vue实例化传入的$options属性绑定到各个 组件之中  