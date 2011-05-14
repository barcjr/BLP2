Ext.define('BLP2.Contest', {
  constructor: function(contestID, contestDef){
    
  },
  generateModelMap: function(contestDef){
    var contactsModelMap = {
      extend: 'Ext.data.model',
      fields: [],
      
    };
    Ext.each(contestDef[exchangeFields], function(field,index){
      contactsModelMap[fields].push({name: contactsModelMap[index], type: 'string'});
    });
    return contactsModelMap;
  },
  generateModelClass: function(contactsModelMap){
    this.ContactModelClass = new Ext.Class(contactsModelMap);
  },
  generateViewMap: function(contestDef){
    var exchangeViewMap = {
      xtype: 'fieldset',
      title: 'Exchange',
      layout: 'anchor',
      defaults: {
        anchor: '100%'
      }
      
    };
    var contactsViewMap = {
      layout: {
          type: 'anchor',
          padding: 5
      }
    };
    
    Ext.each(contestDef[exchangefields], function(field,index){
      exchangeViewMap[items].push({
        xtype: field[type],
        fieldLabel: field[label]
      });
    });
  }
});