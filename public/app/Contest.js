Ext.define('BLP2.Contest', {
  requires: ['Ext.layout.container.Anchor',
  'Ext.form.FieldSet',
  'Ext.form.field.Text'],
  constructor: function(contestID, contestDef){
    this.generateModelClass(this.generateModelMap(contestDef));
    this.generateViewClass(this.generateViewMap(contestDef));
    
  },
  generateModelMap: function(contestDef){
    var contactsModelMap = {
      extend: 'Ext.data.Model',
      fields: [],
      
    };
    Ext.each(contestDef['exchangeFields'], function(field,index){
      contactsModelMap['fields'].push({name: contactsModelMap[index], type: 'string'});
    });
    return contactsModelMap;
  },
  generateModelClass: function(contactsModelMap){
    this.ContactModelClass = new Ext.Class(contactsModelMap);
  },
  generateViewMap: function(contestDef){
    var viewPanel = {
      extend: 'Ext.panel.Panel',
      items: [],
      layout: 'fit'
      
    };
    var exchangeViewMap = {
      xtype: 'fieldset',
      title: 'Exchange',
      layout: 'anchor',
      defaults: {
        anchor: '100%'
      },
      items:[],
      
    };
    var contactsViewMap = {
      layout: 'anchor'
    };
    
    Ext.each(contestDef['exchangeFields'], function(field,index){
      exchangeViewMap['items'].push({
        xtype: field['type'],
        fieldLabel: field['label']
      });
    });
    
    exchangeViewMap['items'].push(contactsViewMap);
    viewPanel['items'].push(exchangeViewMap);
    return viewPanel;
  },
  generateViewClass: function(viewModelMap){
    this.ContactViewClass = new Ext.Class(viewModelMap);
  },
});