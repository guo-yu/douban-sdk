var SDK = require('sdk');
var apis = require('./apis');
var rules = require('./rules');
var errors = require('./errors');
var host = 'http://www.douban.com';

module.exports = Douban;

function Douban(configs) {
  this.configs = configs;
  Object.keys(apis).forEach(function(catagory) {
    this[catagory] = new SDK(host, apis[catagory], rules[catagory]);
  });
}