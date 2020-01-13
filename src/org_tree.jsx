import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import TreeNode from './org_tree';

//组件
class OrgTree extends Component {
    constructor(props) {
        super(props);
        this.handleExpand = this.handleExpand.bind(this);
        this.collapse = this.collapse.bind(this);
        this.toggleExpand = this.toggleExpand.bind(this);
    }

    componentDidMount() {
        const { expandAll, data } = this.props;
        if(expandAll) this.toggleExpand(data, true);
    }

    componentWillUnmount() {
    }

    handleExpand(e, nodeData) {
        if ('expand' in nodeData) {
            nodeData.expand = !nodeData.expand;
            if (!nodeData.expand && nodeData.children) {
                this.collapse(nodeData.children);
            }
            this.forceUpdate();
        }else {
            nodeData.expand = true;
            this.forceUpdate();
        }
    }

    collapse(list) {
        let _this = this;
        list.forEach(function(child) {
            if (child.expand) {
                child.expand = false;
            }
            child.children && _this.collapse(child.children);
        });
    }

    toggleExpand(data, val) {
        let _this = this;
        if (Array.isArray(data)) {
            data.forEach(function(item) {
                item.expand = val;
                if (item.children) {
                    _this.toggleExpand(item.children, val);
                }
            });
        } else {
            data.expand = val;
            if (data.children) {
                _this.toggleExpand(data.children, val);
            }
        }
        this.forceUpdate();
    }

    render() {
        const { horizontal, node, data } = this.props;
        return <div className="org-tree-container">
            <div className={classnames('org-tree', {
                'horizontal': horizontal
            })}>
                <TreeNode 
                    data={data}
                    node={node}
                    onExpand={(e, nodeData)=> this.handleExpand(e, nodeData)}
                    {...this.props}
                />
            </div>
        </div>;
    }
}

OrgTree.propTypes = {
    data: PropTypes.object,
    node: PropTypes.object,
    horizontal: PropTypes.bool,
    collapsable: PropTypes.bool,
    expandAll: PropTypes.bool,
    renderContent: PropTypes.func
};

OrgTree.defaultProps = {
    node: {
        label: 'label',
        expand: 'expand',
        children: 'children'
    },
    renderContent: function(data) {
        return data.label;
    }
};

export default OrgTree;