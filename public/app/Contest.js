Ext.define('BLP2.Contest', {
  requires: [
    'Ext.layout.container.Anchor',
    'Ext.layout.container.HBox',
    'Ext.form.FieldSet',
    'Ext.form.FieldContainer',
    'Ext.form.field.Text'
  ],
  constructor: function(contestID, contestDef){
    this.generateModelClass(this.generateModelMap(contestDef));
    this.generateViewClass(this.generateViewMap(contestDef));
    
  },
  generateModelMap: function(contestDef){
    var contactsModelMap = {
      extend: 'Ext.data.Model',
      fields: []
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
      layout: 'anchor',
      autoScroll: true,
      border: false,
      defaults: {
	margin: 6,
	padding: 6
      },
      buttons: [{
	text: 'Clear',
      }, {
	text: 'Log',
      }]
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
    
    var peopleViewMap = {
      xtype: 'fieldset',
      title: 'People',
      layout: 'anchor',
      defaults:{ 
        anchor: '100%'
      },
      items:[{
        xtype: 'textfield',
        fieldLabel: 'Operator'
      },  {
          xtype: 'textfield',
          fieldLabel: 'Logger'
        },
      
      ]
    };
    
    var otherViewMap = {
      xtype: 'fieldset',
      columnWidth: 0.5,
      title: 'Other',
      defaultType: 'textfield',
      defaults: {
        anchor: '100%'
      },
      layout: 'anchor',
      items: [{
	xtype: 'fieldcontainer',
	layout: 'hbox',
	fieldLabel: 'Band/Mode',
	items: [{
          xtype: 'textfield',
          fieldLabel: 'Band',
	  hideLabel: true,
	  flex: 1
        }, {
	  xtype: 'splitter',
	}, {
	  xtype: 'textfield',
	  fieldLabel: 'Mode',
	  hideLabel: true,
	  flex: 1
	}]
      } , {
	xtype: 'textfield',
	fieldLabel: 'Frequency',
      }, {
	xtype: 'textfield',
	fieldLabel: 'Time',
      }]
    };
    
    Ext.each(contestDef['exchangeFields'], function(field,index){
      exchangeViewMap['items'].push({
        xtype: field['type'],
        fieldLabel: field['label']
      });
    });
    
    viewPanel['items'].push(exchangeViewMap);
    viewPanel['items'].push(peopleViewMap);
    viewPanel['items'].push(otherViewMap);
    return viewPanel;
  },
  generateViewClass: function(viewModelMap){
    this.ContactViewClass = new Ext.Class(viewModelMap);
  },
});