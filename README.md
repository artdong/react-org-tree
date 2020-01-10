# react-org-tree

> A simple organization tree chart based on react

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

const horizontal = false;
const data = {
    id: 0,
    label: 'XXX股份有限公司',
    children: [{
        id: 1,
        label: '技术部',
        children: [{
            id: 3,
            label: '后端'
        }, {
            id: 4,
            label: '前端'
        }]
    }, {
        id: 2,
        label: '人事部'
    }]
}

<OrgTree
    data={data}
    horizontal={horizontal}
>
```




