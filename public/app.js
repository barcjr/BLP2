Ext.Loader.setConfig({
  enabled: true,
  paths: {'Ext': '/extjs/src'}
});

Ext.application({
  name: 'BLP2',
  autoCreateViewport: true,
  controllers: ['LogbookBrowser'],
  requires: ['BLP2.SocketManager'],
  launch: function(){
    var socket = BLP2.SocketManager.connect();
    BLP2.SocketManager.register('debug', {
      echo: function(data){ console.log(data); },
      alert: function(data){ alert(data.body); }
    });
  }
});
