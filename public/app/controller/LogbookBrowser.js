Ext.define('BLP2.controller.LogbookBrowser', {
  extend: 'Ext.app.Controller',
  
  stores: ['Logbooks'],
  views: ['LogbookBrowser'],
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
    this.window.query('#info')[0].update('Show info on ' + record.data.title);
  },

  onLogbookDoubleClick: function(view, record){
    var fieldPanel = new (BLP2.ContestManager.lookup('contestID').ContactViewClass)();
    this.getLogbookEntry().removeAll(fieldPanel);
    this.getLogbookEntry().add(fieldPanel);
    this.window.close();
  }
});