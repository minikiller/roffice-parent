/**
 * 公司通知数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.roffice.note.store.NoteStore', {
    extend: 'Ext.data.Store',
    model: 'kalix.roffice.note.model.NoteModel',
    alias: 'store.noteStore',
    xtype: 'noteStore',
    storeId: "noteStore",
    autoLoad: true,
    pageSize: 10,
    proxy: {
        type: "ajax",
        url: '/kalix/camel/rest/notes/list',
        paramsAsJson: true,
        actionMethods: {
            create: 'POST',
            read: 'POST',
            update: 'POST',
            destroy: 'POST'
        },
        reader: {
            type: "json",
            rootProperty: "data",
            totalProperty: 'totalCount'
        }
    }
});