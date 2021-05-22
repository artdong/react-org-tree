# react-org-tree

[![npm version][npm-image]][npm-url] [![mnt-image](https://img.shields.io/maintenance/yes/2021.svg?style=flat-square)](../../commits/master) [![GitHub stars](https://img.shields.io/github/stars/artdong/react-org-tree.svg?style=flat-square)](https://github.com/artdong/react-org-tree/stargazers) [![GitHub forks](https://img.shields.io/github/forks/artdong/react-org-tree.svg?style=flat-square)](https://github.com/artdong/react-org-tree/network) [![npm download][download-image]][download-url] [![dumi](https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square)](https://github.com/umijs/dumi) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/artdong/react-org-tree/blob/master/LICENSE)

[npm-image]: http://img.shields.io/npm/v/react-org-tree.svg?style=flat-square
[npm-url]: http://npmjs.org/package/react-org-tree
[download-image]: https://img.shields.io/npm/dm/react-org-tree.svg?style=flat-square
[download-url]: https://npmjs.org/package/react-org-tree
[bundlephobia-url]: https://bundlephobia.com/result?p=react-org-tree
[bundlephobia-image]: https://badgen.net/bundlephobia/minzip/react-org-tree

> A simple organization tree component based on react

> If you are using vue, see [vue-org-tree](https://github.com/hukaibaihu/vue-org-tree)

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

## Example

http://localhost:8000/demo/

## License

react-org-tree is released under the MIT license.

#### 请作者喝一杯咖啡

<p align='center'>
  <a href="https://www.buymeacoffee.com/artd" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/arial-violet.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" >
  </a>
</p>