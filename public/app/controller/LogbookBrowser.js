Ext.define('BLP2.controller.LogbookBrowser', {
  extend: 'Ext.app.Controller',

  stores: ['Logbooks'],
  models: ['Logbook'],
  views: ['LogbookBrowser', 'LogbookDetails'],

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
	itemclick: this.onLogbookSelected
      }
    });
  },

  onLogbookSelected: function(view, record){
    var tab = Ext.create('BLP2.view.LogbookDetails');
    tab.init(record);
    this.getInformationPanel().add(tab);
    this.getInformationPanel().setActiveTab(tab);
  }
});