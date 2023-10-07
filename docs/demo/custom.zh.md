---
title: 自定义
order: 5
nav:
  title: 示例
---

<code src="../examples/custom.jsx">

## API

参数(prop)              | 说明(descripton)                              | 类型(type)                   | 默认值(default)  
-----------|-----------------------------------------|:----------------------:|:---------------------------------------------------------:
  data              | 树结构数据                                       | `Object`               | {} 
  horizontal        |  是否横向                       | `Boolean` | `false` 
  collapsable       |  是否可折叠           | `Boolean`              | `false`  
  expandAll    |  是否展开全部                      | `Boolean` | `false` 
  labelWidth |  树节点宽度     | `Number` |     `auto` 
  labelClassName |  树节点样式     | `String`  |     `white`
  onClick             |  点击事件    | Function(e:Event, data) 