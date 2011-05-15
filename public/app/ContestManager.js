Ext.define('BLP2.ContestManager', {
  singleton: true,
  requires: ['BLP2.Contest'],
  constructor: function(){
    this.contests = {};
  },
  
  lookup: function(contestID){
    if(this.contests.hasOwnProperty(contestID)){
      return this.contests[contestID];
    }
    
    // Create blank contest
    return new BLP2.Contest('ARRLFieldDay',{
      "id": "ARRLFieldDay",
      "name": "ARRL Field Day",
      "exchangeFields": [{
        "label": "Call Sign",
        "type": "textfield",
        "behaviors": {
          "required": true,
          "uppercase": true,
          "format": "[A-Z0-9]+"
        }
      }, {
        "label": "Category",
        "type": "textfield",
        "behaviors": {
          "required": true,
          "uppercase": true,
          "format": "\d+[A-F]"
        }
      }, {
        "label": "Section",
        "type": "textfield",
        "data": "sections",
        "behaviors": {
          "required": true,
          "uppercase": true
        }
      }],
      "behaviors": {
        "autofill": {"Call Sign": ["Category", "Section"]},
        "bandLimits": {"exclude": ["60m", "30m", "17m", "12m"]},
        "radioModes": ["Voice", "CW", "Digital"],
        "dupeCheck": ["Call Sign", "Band", "Mode"],
        "reservation": ["Band", "Mode"]
      },
      "data": {
        "sections": "ARRLSections.json"
      }
    });
  }
  
});