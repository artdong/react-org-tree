# react-org-tree

[![npm version](https://badge.fury.io/js/react-org-tree.svg)](https://badge.fury.io/js/react-org-tree)
[![mnt-image](https://img.shields.io/maintenance/yes/2020.svg)](../../commits/master)
[![GitHub stars](https://img.shields.io/github/stars/artdong/react-org-tree.svg)](https://github.com/artdong/react-org-tree/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/artdong/react-org-tree.svg)](https://github.com/artdong/react-org-tree/network)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/artdong/react-org-tree/blob/master/LICENSE)

> A simple organization tree component based on react

### Installation

```
# use npm
npm i react-org-tree

# use yarn
yarn add react-org-tree
```
### Usage

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

### Preview

`横向(horizontal)`

<img src="https://upload-images.jianshu.io/upload_images/3100736-1b67a2ff46365c3a.png" width="939px" style="display:inline;">

`纵向(vertical)`

<img src="https://upload-images.jianshu.io/upload_images/3100736-efc4287df27b79fc.png" width="854px" style="display:inline;">

`部分展开(expand)`

<img src="https://upload-images.jianshu.io/upload_images/3100736-ba7d1e5f955f2d7f.png" width="673px" style="display:inline;">

`全部展开(expandAll)`

<img src="https://upload-images.jianshu.io/upload_images/3100736-9a338b3b8b6ee580.png" width="773px" style="display:inline;">






