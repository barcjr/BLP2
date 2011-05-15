Ext.define('BLP2.controller.LogbookBrowser', {
  extend: 'Ext.app.Controller',
  
  stores: ['Logbooks'],
  views: ['LogbookBrowser', 'LogbookDetails'],
  requires: ['BLP2.ContestManager'],

  refs: [{
    ref: 'informationPanel',
    selector: 'viewport #main'
  },{
    ref: 'logbookEntry',
    selector: 'viewport #logbook-entry'
  }],

  init: function(){
    var me = this;
    this.control({
      'viewport > #menubar > #change-logbook': {
	click: this.showLogbookBrowser
      },
      'logbook-browser': {
	destroy: function(){ delete me.window; }
      },
      'logbook-browser gridpanel': {
	select: this.onLogbookSelected,
	itemdblclick: this.onLogbookDoubleClick
      },
      'logbook-details button': {
	click: this.onLogbookOpen
      }
    });
  },
  
  showLogbookBrowser: function(){
    if(!this.hasOwnProperty('window')) {
      this.window = new BLP2.view.LogbookBrowser({width: '90%', height: '90%'});
    }

    this.window.show();
  },

  onLogbookSelected: function(view, record){
    var infoPanel = this.window.query("#info")[0];
    var detailsPanel = new BLP2.view.LogbookDetails();
    detailsPanel.init(record);
    infoPanel.removeAll();
    infoPanel.add(detailsPanel);
  },

  onLogbookDoubleClick: function(view, record){
    var fieldPanel = new (BLP2.ContestManager.lookup('contestID').ContactViewClass)();
    this.getLogbookEntry().removeAll(fieldPanel);
    this.getLogbookEntry().add(fieldPanel);
    this.window.close();
  },

  onLogbookOpen: function() {
    var record = this.window.query('gridpanel')[0].selected;
    this.onLogbookDoubleClick(null, record);
  }
});