---
title: react-org-tree
hero:
  title: react-org-tree
  desc: A simple organization tree component based on react
  actions:
    - text: Get Started →
      link: /guide
features:
  - title: Support
    desc: It‘s based on react framework.
  - title: Features
    desc: Includes horizontal, vertical, expand, expandAll and so on.
  - title: Production-Ready
    desc: Has been published on npm.
footer: MIT Licensed | Copyright © 2020-present<br />Powered by [artdong](https://github.com/artdong)
---

# react-org-tree

### 📦 Installation

```
# use npm
npm i react-org-tree

# use yarn
yarn add react-org-tree
```
### 🔨 Usage

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

### Good deal，red lucky money

<p align='center'>
<img src='https://upload-images.jianshu.io/upload_images/3100736-e1e4b012ad617601.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240' width='280' alt='Build errors'>
</p>

### Support，buy me a coffee

<p align='center'>
<img src='https://upload-images.jianshu.io/upload_images/3100736-46a28aed4ded25e4.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240' width='280' alt='Build errors'>
</p>