Ext.define('BLP2.view.Viewport', {
  extend: 'Ext.container.Viewport',
  requires: [
    'Ext.layout.container.Card',
    'BLP2.view.LogbookBrowser'
  ],

  layout: 'card',
  items: [{
    id: 'logbook-browser',
    xtype: 'logbook-browser'
  }]
});