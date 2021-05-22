import React, { Component } from 'react';

import OrgTree from 'react-org-tree';

class OrgTreeDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
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
            },
            horizontal: false,
            collapsable: false,
            expandAll: true,
            labelClassName: 'bg-white'
        };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        const { data, horizontal, collapsable, expandAll, labelClassName } = this.state;
        
        return (
            <div className="m-t-lg text-center">
                <OrgTree
                    data={data}
                    horizontal={horizontal}
                    collapsable={collapsable}
                    labelClassName={labelClassName}
                    expandAll={expandAll}
                    renderContent={(data) => {
                        return data.label;
                    }}
                    onClick={(e, data) => {
                        //todo
                    }}
                >
                </OrgTree>
            </div>
        );
    }
}

export default OrgTreeDemo;