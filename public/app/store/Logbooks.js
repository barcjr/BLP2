Ext.define('BLP2.store.Logbooks', {
  extend: 'Ext.data.Store',
  requires: ['BLP2.model.Logbook'],

  model: 'BLP2.model.Logbook',

  data: [{
    title: 'BARC Jr. Field Day 2011'
  }, {
    title: 'Something else!'
  }]
}, function(){
  //new BLP2.store.Logbooks({storeId: 'Logbooks'});
});
