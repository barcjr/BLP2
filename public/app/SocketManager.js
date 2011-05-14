Ext.define('BLP2.SocketManager', {
  singleton: true,

  constructor: function(){
    this.sockets = {};
    return this;
  },

  connect: function(scope, host, options){
    var scope = scope || "default";
    if(this.sockets.hasOwnProperty()) { return this.sockets[scope]; }

    var socket;
    socket = new io.Socket(host, options);
    socket.connect();
    this.sockets[scope] = socket;

    socket.on('message', function(data){ console.log(data.body); });

    return socket;
  },

  disconnect: function(scope){
    var scope = scope || "default";
    if(!this.sockets.hasOwnProperty()) { return; }

    this.sockets[scope].disconnect();
    delete this.sockets[scope];
  }
});
