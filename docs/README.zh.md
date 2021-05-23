---
title: react-org-tree
hero:
  title: react-org-tree
  desc: 一个基于react的组织树组件
  actions:
    - text: 快速开始 →
      link: /guide
features:
  - title: 语言
    desc: 基于最流行的react框架.
  - title: 功能
    desc: 可以横向、纵向展示，支持展开、折叠，自定义颜色，自定义大小等.
  - title: 生产可用
    desc: 已经发布到npm上，可使用npm或者yarn安装.
footer: MIT Licensed | Copyright © 2020-present<br />Powered by [artdong](https://github.com/artdong)
---

# react-org-tree

### 📦 安装

```
# use npm
npm i react-org-tree

# use yarn
yarn add react-org-tree
```
### 🔨 示例

``` js
import OrgTree from 'react-org-tree';

const horizontal = false; // true：横向  false：纵向
const collapsable = true; // true：可折叠 false：不可折叠 
const expandAll = true; // true: 全部展开 false：全部折叠 

const data = {
    id: 0,
    label: 'XXX股份有限公司',
    children: [{
        id: 1,
        label: '技术部',
        children: [{
            id: 4,
            label: '后端工程师'
        }, {
            id: 5,
            label: '前端工程师'
        }, {
            id: 6,
            label: '运维工程师'
        }]
    }, {
        id: 2,
        label: '人事部'
    }, {
        id: 3,
        label: '销售部'
    }]
}

<OrgTree
    data={data}
    horizontal={horizontal}
    collapsable={collapsable}
    expandAll={expandAll}
>
```

See details：[Getting Started](/guide)

### 支持赞助

<p align='center'>
  <a href="https://www.buymeacoffee.com/artd" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/arial-violet.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" >
  </a>
</p>