/**
 * @author chenyanxu
 */
Ext.define('kalix.roffice.contract.view.ContractGrid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'kalix.view.components.common.SecurityToolbar',
        'kalix.view.components.common.PagingToolBar',
        'kalix.roffice.contract.controller.ContractGridController',
        'kalix.roffice.contract.store.ContractStore',
        'kalix.admin.dict.component.DictGridColumn',
        'kalix.view.components.common.SecurityActionColumn'
    ],
    alias: 'widget.contractGrid',
    xtype: 'contractGrid',
    controller: {
        type: 'contractGridController',
        storeId: 'contractStore'
    },
    autoLoad: true,
    stripeRows: true,
    store: {
        type: 'contractStore'
    },
    listeners: {
        select: function (target, record, index, eOpts) {
            var vm = this.lookupViewModel();

            vm.set('rec', record);
            vm.set('sel', true);
        }
    },
    columns: [
        {
            xtype: "rownumberer",
            text: "行号",
            width: 50,
            align: 'center'
        },
        {
            text: '编号',
            dataIndex: 'id',
            hidden: true,
            flex: 1
        },
        {
            text: '合同编号',
            dataIndex: 'contractNumber',
            flex: 1
        },
        {
            text: '项目名称',
            dataIndex: 'projectName',
            flex: 1
        }, {
            text: '甲方',
            dataIndex: 'partyA',
            flex: 1
        }, {
            text: '乙方',
            dataIndex: 'partyB',
            flex: 1
        },
        {
            text: '合同金额',
            dataIndex: 'summoney',
            flex: 1
        },
        {
            text: '合同毛利',
            dataIndex: 'grossProfit',
            flex: 1
        },
        {
            text: '合同利润率',
            dataIndex: 'grossProfitRate',
            flex: 1
        },
        {
            text: '已收回款项',
            dataIndex: 'receiveMoney',
            flex: 1
        },
        {
            text: '应收款项',
            dataIndex: 'receivables',
            flex: 1
        },
        {
            text: '预计采购成本',
            dataIndex: 'expectedCost',
            flex: 1
        },
        {
            text: '质保期(年)',
            dataIndex: 'guarantee',
            flex: 1
        },
        {
            text: '合同状态',
            xtype: 'dictGridColumn',
            dictType: 'contractStatus',
            dataIndex: 'contractStatus',
            flex: 1
        },
        {
            text: '签单日期',
            dataIndex: 'contractDate',
            xtype: 'datecolumn',
            flex: 1,
            format: 'Y-m-d'
        }
        ,
        {
            text: '过期日期',
            dataIndex: 'expireDate',
            xtype: 'datecolumn',
            flex: 1,
            format: 'Y-m-d'
        },
        {
            text: '是否归档',
            trueText: '是',
            falseText: '否',
            xtype: 'booleancolumn',
            dataIndex: 'archive',
            flex: 1
        },
        {
            text: '归档日期',
            dataIndex: 'archive_date',
            xtype: 'datecolumn',
            flex: 1,
            format: 'Y-m-d'
        }
        ,
        {
            xtype: 'securityActionColumn',
            permissions: [
                'roffice:cmModule:contractMenu:read',
                'roffice:cmModule:contractMenu:update1',
                'roffice:cmModule:contractMenu:delete'
            ]
        },
        {
            xtype: 'securityActionColumn',
            items: [
                {
                    icon: "resources/images/add.png",
                    permission: 'roffice:cmModule:contractMenu:add1',
                    tooltip: '增加',
                    handler: 'onAdd'
                },
                {
                    icon: "resources/images/edit.png",
                    permission: 'roffice:cmModule:contractMenu:update',
                    tooltip: '编辑',
                    handler: 'onEdit'
                }
            ]
        }
    ],
    tbar: {
        xtype: 'securityToolbar',
        verifyItems: [
            {
                text: '添加',
                xtype: 'button',
                permission: 'roffice:cmModule:contractMenu:add',
                bind: {icon: '{add_image_path}'},
                handler: 'onAdd'
            }
        ]
    },

    /*
     grid 组件不自动绑定与 grid 相关的翻页工具条的 store 配置项
     需要手动指定工具条的 store
     */
    bbar: [{
        id: 'contract-pagingtoolbar',
        xtype: 'pagingToolBarComponent',
        border: false,
        padding: 0,
        listeners: {
            afterrender: function (c, obj) {
                this.setConfig('store', kalix.getApplication().getStore('contractStore'));
            }
        }
    }
    ]

});
