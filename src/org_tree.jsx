import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import TreeNode from './org_tree.js';

//组件
class OrgTree extends Component {
    constructor(props) {
        super(props);
        this.collapse = this.collapse.bind(this);
        this.toggleExpand = this.toggleExpand.bind(this);
    }

    componentDidMount() {
        const { data } = this.props;
        this.toggleExpand(data, true);
    }

    componentWillUnmount() {
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
        const { data, node, horizontal, renderContent } = this.props;
        return <div className="org-tree-container">
            <div className={classnames('org-tree', {
                'horizontal': horizontal
            })}>
                <TreeNode 
                    data={data}
                    node={node}
                    renderContent={renderContent}
                />
            </div>
        </div>;
    }
}

OrgTree.propTypes = {
    data: PropTypes.object,
    node: PropTypes.object,
    horizontal: PropTypes.bool,
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