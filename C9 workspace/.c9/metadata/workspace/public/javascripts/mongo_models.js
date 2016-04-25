{"filter":false,"title":"mongo_models.js","tooltip":"/public/javascripts/mongo_models.js","undoManager":{"mark":71,"position":71,"stack":[[{"start":{"row":0,"column":0},"end":{"row":10,"column":60},"action":"insert","lines":["var mongoose = require('mongoose');","var Schema = mongoose.Schema;","","var userSchema = new Schema({","   name:String,","   email:String,","   password:String,","   phone:Number,","   _enabled:Boolean","});","module.exports = mongoose.model('users', userSchema);       "],"id":1}],[{"start":{"row":10,"column":60},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":11,"column":0},"end":{"row":12,"column":0},"action":"insert","lines":["",""],"id":3}],[{"start":{"row":9,"column":3},"end":{"row":10,"column":0},"action":"insert","lines":["",""],"id":4}],[{"start":{"row":10,"column":0},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":5}],[{"start":{"row":11,"column":0},"end":{"row":24,"column":3},"action":"insert","lines":["var postSchema = new mongoose.Schema({","    timestamp: { type: Number },","    sessionId: { type: String },","    deviceId: { type: String },","    team: { type: String },","    position: {","        x: Number,","        y: Number,","        z: Number","    },","    noteName: { type: String },","    filename: { type: String },","    previousPost: { type: String }","});"],"id":6}],[{"start":{"row":24,"column":3},"end":{"row":25,"column":0},"action":"insert","lines":["",""],"id":7}],[{"start":{"row":3,"column":0},"end":{"row":9,"column":3},"action":"remove","lines":["var userSchema = new Schema({","   name:String,","   email:String,","   password:String,","   phone:Number,","   _enabled:Boolean","});"],"id":8}],[{"start":{"row":20,"column":33},"end":{"row":20,"column":38},"action":"remove","lines":["users"],"id":9},{"start":{"row":20,"column":33},"end":{"row":20,"column":34},"action":"insert","lines":["p"]}],[{"start":{"row":20,"column":34},"end":{"row":20,"column":35},"action":"insert","lines":["o"],"id":10}],[{"start":{"row":20,"column":35},"end":{"row":20,"column":36},"action":"insert","lines":["s"],"id":11}],[{"start":{"row":20,"column":36},"end":{"row":20,"column":37},"action":"insert","lines":["t"],"id":12}],[{"start":{"row":20,"column":37},"end":{"row":20,"column":38},"action":"insert","lines":["s"],"id":13}],[{"start":{"row":20,"column":38},"end":{"row":20,"column":39},"action":"insert","lines":["s"],"id":14}],[{"start":{"row":20,"column":38},"end":{"row":20,"column":39},"action":"remove","lines":["s"],"id":15}],[{"start":{"row":20,"column":44},"end":{"row":20,"column":45},"action":"remove","lines":["r"],"id":16}],[{"start":{"row":20,"column":43},"end":{"row":20,"column":44},"action":"remove","lines":["e"],"id":17}],[{"start":{"row":20,"column":42},"end":{"row":20,"column":43},"action":"remove","lines":["s"],"id":18}],[{"start":{"row":20,"column":41},"end":{"row":20,"column":42},"action":"remove","lines":["u"],"id":19}],[{"start":{"row":20,"column":41},"end":{"row":20,"column":42},"action":"insert","lines":["p"],"id":20}],[{"start":{"row":20,"column":42},"end":{"row":20,"column":43},"action":"insert","lines":["o"],"id":21}],[{"start":{"row":20,"column":43},"end":{"row":20,"column":44},"action":"insert","lines":["s"],"id":22}],[{"start":{"row":20,"column":44},"end":{"row":20,"column":45},"action":"insert","lines":["t"],"id":23}],[{"start":{"row":20,"column":37},"end":{"row":20,"column":38},"action":"remove","lines":["s"],"id":24}],[{"start":{"row":20,"column":37},"end":{"row":20,"column":38},"action":"insert","lines":["S"],"id":25}],[{"start":{"row":20,"column":33},"end":{"row":20,"column":38},"action":"remove","lines":["postS"],"id":26},{"start":{"row":20,"column":33},"end":{"row":20,"column":43},"action":"insert","lines":["postSchema"]}],[{"start":{"row":19,"column":0},"end":{"row":20,"column":0},"action":"insert","lines":["",""],"id":27}],[{"start":{"row":20,"column":0},"end":{"row":27,"column":6},"action":"insert","lines":["var sessionSchema = new mongoose.Schema({","//     timestamp: { type: Number },","//     team: { type: String },","//     sessionId: { type: String },","//     deviceId: { type: String },","//     kind: { type: String },","//     activeNote: { type: String }","// });"],"id":28}],[{"start":{"row":27,"column":6},"end":{"row":28,"column":0},"action":"insert","lines":["",""],"id":29}],[{"start":{"row":21,"column":0},"end":{"row":21,"column":3},"action":"remove","lines":["// "],"id":30},{"start":{"row":22,"column":0},"end":{"row":22,"column":3},"action":"remove","lines":["// "]},{"start":{"row":23,"column":0},"end":{"row":23,"column":3},"action":"remove","lines":["// "]},{"start":{"row":24,"column":0},"end":{"row":24,"column":3},"action":"remove","lines":["// "]},{"start":{"row":25,"column":0},"end":{"row":25,"column":3},"action":"remove","lines":["// "]},{"start":{"row":26,"column":0},"end":{"row":26,"column":3},"action":"remove","lines":["// "]},{"start":{"row":27,"column":0},"end":{"row":27,"column":3},"action":"remove","lines":["// "]}],[{"start":{"row":30,"column":0},"end":{"row":30,"column":65},"action":"insert","lines":["module.exports = mongoose.model('postSchema', postSchema);       "],"id":31}],[{"start":{"row":30,"column":33},"end":{"row":30,"column":43},"action":"remove","lines":["postSchema"],"id":32},{"start":{"row":30,"column":33},"end":{"row":30,"column":34},"action":"insert","lines":["s"]}],[{"start":{"row":30,"column":34},"end":{"row":30,"column":35},"action":"insert","lines":["e"],"id":33}],[{"start":{"row":30,"column":35},"end":{"row":30,"column":36},"action":"insert","lines":["s"],"id":34}],[{"start":{"row":30,"column":36},"end":{"row":30,"column":37},"action":"insert","lines":["s"],"id":35}],[{"start":{"row":30,"column":33},"end":{"row":30,"column":37},"action":"remove","lines":["sess"],"id":36},{"start":{"row":30,"column":33},"end":{"row":30,"column":46},"action":"insert","lines":["sessionSchema"]}],[{"start":{"row":30,"column":49},"end":{"row":30,"column":59},"action":"remove","lines":["postSchema"],"id":37},{"start":{"row":30,"column":49},"end":{"row":30,"column":50},"action":"insert","lines":["s"]}],[{"start":{"row":30,"column":50},"end":{"row":30,"column":51},"action":"insert","lines":["e"],"id":38}],[{"start":{"row":30,"column":51},"end":{"row":30,"column":52},"action":"insert","lines":["s"],"id":39}],[{"start":{"row":30,"column":52},"end":{"row":30,"column":53},"action":"insert","lines":["s"],"id":40}],[{"start":{"row":30,"column":49},"end":{"row":30,"column":53},"action":"remove","lines":["sess"],"id":41},{"start":{"row":30,"column":49},"end":{"row":30,"column":62},"action":"insert","lines":["sessionSchema"]}],[{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"remove","lines":["",""],"id":42}],[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"remove","lines":["",""],"id":43}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":29},"action":"remove","lines":["var Schema = mongoose.Schema;"],"id":44}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"remove","lines":["",""],"id":45}],[{"start":{"row":25,"column":0},"end":{"row":26,"column":0},"action":"insert","lines":["",""],"id":46}],[{"start":{"row":26,"column":0},"end":{"row":27,"column":0},"action":"insert","lines":["",""],"id":47}],[{"start":{"row":27,"column":0},"end":{"row":30,"column":1},"action":"insert","lines":["module.exports = {","    method: function() {},","    otherMethod: function() {}","}"],"id":48}],[{"start":{"row":25,"column":0},"end":{"row":26,"column":0},"action":"remove","lines":["",""],"id":49}],[{"start":{"row":27,"column":4},"end":{"row":27,"column":10},"action":"remove","lines":["method"],"id":50},{"start":{"row":27,"column":4},"end":{"row":27,"column":5},"action":"insert","lines":["p"]}],[{"start":{"row":27,"column":5},"end":{"row":27,"column":6},"action":"insert","lines":["o"],"id":51}],[{"start":{"row":27,"column":6},"end":{"row":27,"column":7},"action":"insert","lines":["s"],"id":52}],[{"start":{"row":27,"column":7},"end":{"row":27,"column":8},"action":"insert","lines":["t"],"id":53}],[{"start":{"row":27,"column":8},"end":{"row":27,"column":9},"action":"insert","lines":["s"],"id":54}],[{"start":{"row":28,"column":4},"end":{"row":28,"column":15},"action":"remove","lines":["otherMethod"],"id":55},{"start":{"row":28,"column":4},"end":{"row":28,"column":5},"action":"insert","lines":["s"]}],[{"start":{"row":28,"column":5},"end":{"row":28,"column":6},"action":"insert","lines":["e"],"id":56}],[{"start":{"row":28,"column":6},"end":{"row":28,"column":7},"action":"insert","lines":["s"],"id":57}],[{"start":{"row":28,"column":7},"end":{"row":28,"column":8},"action":"insert","lines":["s"],"id":58}],[{"start":{"row":28,"column":8},"end":{"row":28,"column":9},"action":"insert","lines":["i"],"id":59}],[{"start":{"row":28,"column":9},"end":{"row":28,"column":10},"action":"insert","lines":["o"],"id":60}],[{"start":{"row":28,"column":10},"end":{"row":28,"column":11},"action":"insert","lines":["n"],"id":61}],[{"start":{"row":30,"column":17},"end":{"row":30,"column":62},"action":"remove","lines":["mongoose.model('postSchema', postSchema);    "],"id":62}],[{"start":{"row":27,"column":23},"end":{"row":27,"column":68},"action":"insert","lines":["mongoose.model('postSchema', postSchema);    "],"id":63}],[{"start":{"row":27,"column":64},"end":{"row":27,"column":68},"action":"remove","lines":["    "],"id":64}],[{"start":{"row":27,"column":63},"end":{"row":27,"column":64},"action":"remove","lines":[";"],"id":65}],[{"start":{"row":31,"column":17},"end":{"row":31,"column":63},"action":"remove","lines":["mongoose.model('sessionSchema', sessionSchema)"],"id":66}],[{"start":{"row":28,"column":25},"end":{"row":28,"column":71},"action":"insert","lines":["mongoose.model('sessionSchema', sessionSchema)"],"id":67}],[{"start":{"row":30,"column":0},"end":{"row":31,"column":25},"action":"remove","lines":["module.exports =    ","module.exports = ;       "],"id":68}],[{"start":{"row":29,"column":1},"end":{"row":29,"column":2},"action":"insert","lines":[";"],"id":69}],[{"start":{"row":28,"column":11},"end":{"row":28,"column":12},"action":"insert","lines":["s"],"id":70}],[{"start":{"row":27,"column":4},"end":{"row":27,"column":9},"action":"remove","lines":["posts"],"id":72},{"start":{"row":27,"column":4},"end":{"row":27,"column":14},"action":"insert","lines":["postSchema"]}],[{"start":{"row":28,"column":4},"end":{"row":28,"column":12},"action":"remove","lines":["sessions"],"id":73},{"start":{"row":28,"column":4},"end":{"row":28,"column":17},"action":"insert","lines":["sessionSchema"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":23,"column":26},"end":{"row":23,"column":26},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1460828103656,"hash":"6dd5d0cf0f9c920d7e745e4cb90d4378d6df7943"}