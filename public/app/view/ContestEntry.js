Ext.define('BLP2.view.ContestEntry', {
  extend: 'Ext.panel.Panel',
  requires: [
    'Ext.form.FieldSet',
    'Ext.form.FieldContainer',
    'Ext.form.field.Text',
    'Ext.layout.container.Anchor',
    'Ext.layout.container.HBox'
  ],

  layout: 'anchor',
  autoScroll: true,
  border: false,
  defaults: {
    xtype: 'fieldset',
    margin: 6,
    padding: 6,
    anchor: '100%',
    layout: 'anchor',
    defaults: {
      anchor: '100%'
    }
  },
  buttons: [{
    text: 'Clear',
  }, {
    text: 'Log',
  }],
  items: [{
    title: 'Exchange'
  }, {
    title: 'People',
    items: [{
      xtype: 'textfield',
      fieldLabel: 'Operator'
    }, {
      xtype: 'textfield',
      fieldLabel: 'Logger'
    }]
  }, {
    title: 'Other',
    items: [{
      xtype: 'fieldcontainer',
      fieldLabel: 'Band/Mode',
      layout: 'hbox',
      defaults: {
        xtype: 'textfield',
        hideLabel: true,
        flex: 1
      },
      items: [{
        fieldLabel: 'Band',
      }, {
        xtype: 'splitter',
        flex: 0
      }, {
        fieldlabel: 'Mode',
      }]
    }, {
      xtype: 'textfield',
      fieldLabel: 'Frequency'
    }, {
      xtype: 'textfield',
      fieldLabel: 'Time'
    }]
  }],

  init: function(contestDef){
    var exchangeFields = this.down('fieldset');
    Ext.each(contestDef['exchangeFields'], function(field, index){
      var widget = Ext.widget(field['type'], {
        fieldLabel: field['label'],
        listeners: {
          specialkey: function(field, e){
            if(e.getKey() == e.TAB){
              var next;
              if(e.shiftKey){
                var last = field.up().query('field');
                next = field.previousSibling() || last[last.length - 1];
              } else {
                next = field.nextSibling() || field.up().down('field');
              }
              next.focus();
              e.stopEvent();
            }
          }
        }
      });
      exchangeFields.add(widget);
    });
  }
});

