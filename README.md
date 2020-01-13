# react-org-tree

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
>
```

### Preview

`horizontal`

<img src="https://github.com/artdong/react-org-tree/blob/master/img/1.png" width="939px" style="display:inline;">

`vertical`

<img src="https://github.com/artdong/react-org-tree/blob/master/img/2.png" width="854px" style="display:inline;">






