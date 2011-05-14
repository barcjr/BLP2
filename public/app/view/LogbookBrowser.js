

Ext.define('BLP2.view.LogbookBrowser', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.logbook-browser',
  requires: [
    'Ext.layout.container.Border',
    'Ext.data.TreeStore',
    'Ext.tree.Panel'
  ],

  layout: 'border',
  items: [{
    region: 'west',
    width: '25%',
    split: true,
    xtype: 'treepanel',
    root: {
      text: "BARC Jr. Field Day 2011",
      leaf: true
    }
  }, {
    region: 'center',
    xtype: 'panel'
  }]
});