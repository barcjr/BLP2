Ext.define('BLP2.SocketManager', {
  singleton: true,

  connect: function(scope, host, options){
    var scope = scope || "default";
    if(typeof this.sockets == 'undefined') { this.sockets = {}; }
    if(typeof this.sockets[scope] != 'undefined') { return this.sockets[scope]; }
    var socket;
    socket = new io.Socket(host, options);
    socket.connect();
    socket.on('message', function(data){ console.log(data.body); });
    this.sockets[scope] = socket;
    return socket;
  },

  disconnect: function(scope){
    var scope = scope || "default";
    if(typeof this.sockets[scope] == 'undefined') { return; }
    this.sockets[scope].disconnect();
    delete this.sockets[scope];
  }
});
