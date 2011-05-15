Ext.define('BLP2.controller.LogbookBrowser', {
  extend: 'Ext.app.Controller',
  
  stores: ['Logbooks'],
  views: ['LogbookBrowser'],
  requires: ['BLP2.ContestManager'],

  refs: [{
    ref: 'informationPanel',
    selector: 'viewport #main'
  }],

  init: function(){
    this.control({
      'viewport > #menubar > #change-logbook': {
	click: this.showLogbookBrowser
      },
      'logbook-browser gridpanel': {
	itemclick: this.onLogbookSelected
      }
    });
  },
  
  showLogbookBrowser: function(){
    var browser = new BLP2.view.LogbookBrowser({width: '90%', height: '90%'});
    browser.show();
  },

  onLogbookSelected: function(view, record){
    var fieldPanel = new (BLP2.ContestManager.lookup('contestID').ContactViewClass)();
    this.getInformationPanel().add(fieldPanel);
    this.getInformationPanel().setActiveTab(fieldPanel);
  }
});