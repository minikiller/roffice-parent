/**model of contract
 *  @author chenyanxu
 *
 */
Ext.define("roffice.cm.contract.model.ContractModel", {
    extend: "Ext.data.Model",
    fields: [{
        name: "managerid",
        type: "string"
    }, {
        name: "sellerid",
        type: "string"
    }]
});