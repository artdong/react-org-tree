import React from 'react';

// 判断是否叶子节点
const isLeaf = (data, prop) => {
    const node = prop.node;
    return !(Array.isArray(data[node.children]) && data[node.children].length > 0);
};
  
// 创建 node 节点
export const renderNode = (data, prop) => {
    const node = prop.node;
    const cls = ['org-tree-node'];
    const childNodes = [];
  
    if (isLeaf(data, prop)) {
        cls.push('is-leaf');
    }
  
    childNodes.push(renderLabel(data, prop));
  
    if (data[node.expand]) {
        childNodes.push(renderChildren(data.children, prop));
    }
  
    return React.createElement('div', {
        key: data.id,
        className: cls.join(' ')
    }, childNodes);
};
  
// 创建 label 节点
export const renderLabel = (data, prop) => {
    const node = prop.node;
    const label = data[node.label];
    const renderContent = prop.renderContent;
  
    const childNodes = [];
    if (typeof renderContent === 'function') {
        let vnode = renderContent(data);
  
        vnode && childNodes.push(vnode);
    } else {
        childNodes.push(label);
    }
  
    const cls = ['org-tree-node-label-inner'];
  
    return React.createElement('div', {
        className: 'org-tree-node-label',
    }, [React.createElement('div', {
        className: cls.join(' ')
    }, childNodes)]);
};
  
// 创建 node 子节点
export const renderChildren = (list, prop) => {
    if (Array.isArray(list) && list.length) {
        const children = list.map(item => {
            return renderNode(item, prop);
        });
  
        return React.createElement('div', {
            className: 'org-tree-node-children'
        }, children);
    }
    return '';
};
  
export const render = (props) => {
    return renderNode(props.data, props);
};
  
export default render;
  