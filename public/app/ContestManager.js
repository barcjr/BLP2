Ext.define('BLP2.ContestManager', {
  singleton: 'true',
  constructor: function(){
    this.contests = {};
  },
  
  lookup: function(contestID){
    if(this.contests.hasOwnProperty(contestID)){
      return this.contests[contestID];
    }
    
    // Create blank contest
    return nil;
  }
  
});