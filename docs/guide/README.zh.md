---
nav:
  title: 指南
  order: 0
toc: menu
---

# 快速上手

### 安装

```
# use npm
npm i react-org-tree

# use yarn
yarn add react-org-tree
```

### 第一个例子

<code src="../examples/basic.jsx">

更多在线例子：[查看](/demo)

### API

参数(prop)              | 说明(descripton)                              | 类型(type)                   | 默认值(default)  
-----------|-----------------------------------------|:----------------------:|:---------------------------------------------------------:
  data              | 树结构数据                                       | `Object`               | {} 
  horizontal        |  是否横向                       | `Boolean` | `false` 
  collapsable       |  是否可折叠           | `Boolean`              | `false`  
  expandAll    |  是否展开全部                      | `Boolean` | `false` 
  labelWidth |  树节点宽度     | `Number` |     `auto` 
  labelClassName |  树节点样式     | `String`  |     `white`
  onClick             |  点击事件    | Function(e:Event, data) 
