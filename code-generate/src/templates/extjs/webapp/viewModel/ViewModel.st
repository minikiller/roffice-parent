/**
 * 用户视图模型
 *
 * @author majian
 *         date:2015-7-6
 * @version 1.0.0
 */
Ext.define('kalix.<pomName>.viewModel.<beanName>ViewModel', {
    extend: 'Ext.app.ViewModel',
    requires: [
        'kalix.<pomName>.store.<beanName>Store',
        'kalix.<pomName>.model.<beanName>Model'
    ],
    alias: 'viewmodel.<pomName>ViewModel',
    data: {
        addTitle: '添加公告',
        editTitle: '编辑公告',
        url: '/kalix/camel/rest/<pomName>s',
    },
    /*formulas: {
     dirty: {
     bind: {
     bindTo: "{current<beanName>}",
     deep: true
     },
     get: function(data) {
     console.log(data);
     return data ? data.dirty : false;
     }
     },
     storeDirty: {
     bind: {
     bindTo: "{current<beanName>}",
     deep: true
     },
     get: function() {
     return this.getStore("<pomName>s").isDirty();
     }
     }
     },*/
    /*stores: {
        <pomName>s: {
            type: '<pomName>Store'
        }
     }*/
});