Ext.define('BLP2.view.LogbookBrowser', {
  extend: 'Ext.window.Window',
  alias: 'widget.logbook-browser',
  requires: [
    'Ext.layout.container.Border',
    'Ext.layout.container.Fit',
    'Ext.grid.Panel',
    'BLP2.store.Logbooks'
  ],

  title: 'Logbook Browser',
  layout: 'border',
  constrainHeader: true,

  items: [{
    region: 'west',
    width: '25%',
    split: true,
    xtype: 'gridpanel',
    title: 'Logbooks',
    store: 'Logbooks',
    preventHeader: true,
    hideHeaders: true,

    columns: [{
      header: 'Title',
      dataIndex: 'title',
      flex: 1
    }]
  }, {
    region: 'center',
    xtype: 'panel',
    itemId: 'info',
    layout: 'fit',
    title: 'Information',
    preventHeader: true,
    items: [{
      xtype: 'container'
    }]
  }]
});