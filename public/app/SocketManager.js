Ext.define('BLP2.SocketManager', {
  singleton: true,

  connect: function(){
    if(typeof this.socket != 'undefined') { return this.socket; }
    this.socket = new io.Socket();
    this.socket.connect();
    this.socket.on('message', function(data){ console.log(data.body); });
    return this.socket;
  },

  disconnect: function(){
    if(typeof this.socket == 'undefined') { return; }
    this.socket.disconnect();
    delete this.socket;
  }
});
