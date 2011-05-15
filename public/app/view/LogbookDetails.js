Ext.define('BLP2.view.LogbookDetails', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.logbook-details',

  border: false,
  buttons: [{
    text: "Open"
  }],

  init: function(record){
    this.update('Info for: ' + record.data.title);
  }
});
