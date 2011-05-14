Ext.define('BLP2.controller.LogbookBrowser', {
  extend: 'Ext.app.Controller',

  stores: ['Logbooks'],
  models: ['Logbook'],
  views: ['LogbookBrowser', 'LogbookDetails'],
  requires: ['BLP2.ContestManager'],

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
    var fieldPanel = new (BLP2.ContestManager.lookup('contestID').ContactViewClass)();
    this.getInformationPanel().add(fieldPanel);
    this.getInformationPanel().setActiveTab(fieldPanel);
  }
});