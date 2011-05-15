Ext.define('BLP2.controller.LogbookBrowser', {
  extend: 'Ext.app.Controller',
  
  stores: ['Logbooks'],
  views: ['LogbookBrowser'],

  init: function(){
    this.control({
      'viewport > #menubar > #change-logbook': {
	click: this.showLogbookBrowser
      }
    });
  },
  
  showLogbookBrowser: function(){
    var browser = new BLP2.view.LogbookBrowser({width: '90%', height: '90%'});
    browser.show();
  }
});