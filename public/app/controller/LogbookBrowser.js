Ext.define('BLP2.controller.LogbookBrowser', {
  extend: 'Ext.app.Controller',

  stores: ['Logbooks'],
  models: ['Logbook'],
  views: ['LogbookBrowser'],

  refs: [{
    ref: 'LogbooksPanel',
    selector: 'logbook-browser #logbooks'
  }, {
    ref: 'InformationPanel',
    selector: 'logbook-browser #information'
  }],

  init: function(){
    this.control({
      'logbook-browser #logbooks': {
	select: this.onLogbookSelected
      }
    });
  },

  onLogbookSelected: function(view, record){
    this.getInformationPanel().update('Show info on: ' + record.data.title);
  }
});