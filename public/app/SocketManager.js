Ext.define('BLP2.SocketManager', {
  singleton: true,

  constructor: function(){
    this.sockets = {};
    this.controllers = {};
    return this;
  },

  connect: function(scope, host, options){
    var me = this;

    var scope = scope || "default";
    if(this.sockets.hasOwnProperty(scope)) { return this.sockets[scope]; }

    var socket;
    socket = new io.Socket(host, options);
    socket.connect();
    this.sockets[scope] = socket;

    socket.on('message', function(data){
      me.dispatch(data.controller, data.action, data);
    });

    return socket;
  },

  disconnect: function(scope){
    var scope = scope || "default";
    if(!this.sockets.hasOwnProperty(scope)) { return; }

    this.sockets[scope].disconnect();
    delete this.sockets[scope];
  },

  register: function(controller, actions){
    this.controllers[controller] = actions;
  },

  dispatch: function(controller, action, data){
    console.log([controller, action, data]);
    this.controllers[controller][action](data);
  }
});
