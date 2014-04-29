var SDK = require('sdk');
var apis = require('./apis');
var rules = require('./rules');
var host = 'http://www.douban.com';

module.exports = Douban;

function Douban(configs) {
  var self = this;
  self.configs = configs;
  Object.keys(apis).forEach(function(catagory) {
    self[catagory] = new SDK(host, apis[catagory], rules[catagory]);
  });
}