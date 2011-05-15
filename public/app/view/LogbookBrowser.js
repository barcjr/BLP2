Ext.define('BLP2.view.LogbookBrowser', {
  extend: 'Ext.window.Window',
  alias: 'widget.logbook-browser',
  requires: [
    'Ext.layout.container.Border',
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

    columns: [{
      header: 'Title',
      dataIndex: 'title',
      flex: 1
    }]
  }, {
    region: 'center',
    xtype: 'panel',
    title: 'Information',
    preventHeader: true
  }]
});