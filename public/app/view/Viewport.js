Ext.define('BLP2.view.Viewport', {
  extend: 'Ext.container.Viewport',
  requires: [
    'Ext.layout.container.Border',
    'Ext.tab.Panel',
    'Ext.toolbar.TextItem',
    'Ext.toolbar.Toolbar',
    'Ext.toolbar.Spacer'
  ],

  layout: 'border',
  items: [{
    region: 'north',
    xtype: 'toolbar',
    itemId: 'menubar',
    items: [{
      xtype: 'tbfill'
    }, {
      itemId: 'change-logbook',
      text: 'Change Logbook'
    }]
  }, {
    region: 'south',
    xtype: 'toolbar',
    items: [{
      xtype: 'tbtext',
      text: 'Status goes here!'
    }]
  }, {
    region: 'west',
    width: '25%',
    split: true,
    xtype: 'panel',
    title: 'Waterfall Panel'
  }, {
    region: 'east',
    width: '25%',
    split: true,
    xtype: 'panel',
    title: 'Logbook Entry',
    itemId: 'logbook-entry',
    layout: 'fit'
  }, {
    region: 'center',
    xtype: 'tabpanel',
    itemId: 'main',
    items: [{
      xtype: 'panel',
      title: 'Introduction'
    }]
  }]
});
