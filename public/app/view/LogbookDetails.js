Ext.define('BLP2.view.LogbookDetails', {
  extend: 'Ext.panel.Panel',

  closable: true,

  init: function(record){
    this.setTitle(record.data.title);
  }
});
