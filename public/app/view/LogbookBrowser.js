Ext.define('BLP2.view.LogbookBrowser', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.logbook-browser',
  requires: [
    'Ext.layout.container.Border',
    'Ext.grid.Panel',
    'Ext.tab.Panel',
    'BLP2.model.Logbook',
    'BLP2.store.Logbooks'
  ],

  layout: 'border',
  items: [{
    id: 'logbooks',
    region: 'west',
    width: '25%',
    split: true,
    collapsible: true,
    xtype: 'gridpanel',
    title: 'Logbooks',
    store: 'Logbooks',
    preventHeader: true,
    buttons: [{
      text: 'Refresh'
    }, {
      text: 'Remove'
    }, {
      text: 'Add'
    }],

    columns: [{
      header: 'Title',
      dataIndex: 'title',
      flex: 1
    }]
  }, {
    id: 'information',
    region: 'center',
    xtype: 'tabpanel',
    title: 'Information',
    preventHeader: true,
    items: [{
      xtype: 'panel',
      title: 'Welcome'
    }]
  }]
});