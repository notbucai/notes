## BFC (块格式化上下文)
  > 详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)  
  > so 浮动 / 清楚浮动 / 外边距重叠解决  都是这货

## FOUC (Flash of Unstyled Content) -文档样式闪烁-
  >  详见 [什么是FOUC？如何避免FOUC？](https://www.cnblogs.com/xianyulaodi/p/5198603.html)  
  > 如果使用import方法对css进行导入,会导致某些页面在Windows 下的Internet Explorer出现一些奇怪的现象:
    以无样式显示页面内容的瞬间闪烁,

     这种现象称之为文档样式短暂失效(Flash of Unstyled Content),简称为FOUC.

##  Reset CSS和Normalize CSS的区别
  > Reset CSS: 将各个浏览器的默认样式重置
  > Normalize CSS: 保留各个浏览器的样式,只是让它们更加统一通用了

## 相邻兄弟选择器、后代选择器和子选择器
后代选择器：包括父元素的子元素以及孙子元素（代表符号：空格）  
子选择器：包括父元素的子元素（仅仅是子元素）（代表符号：>）  
相邻兄弟选择器：紧跟在目标元素后面的第一个兄弟元素（代表符号：+）  

## height和line-height
* height：元素content area的高度  
* line-height：元素中，多行文字基线的距离

> 只设置line-height可能会导致内容坍塌