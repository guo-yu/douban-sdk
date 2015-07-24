'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _sdk = require('sdk');

var _sdk2 = _interopRequireDefault(_sdk);

var _apis = require('./apis');

var apis = _interopRequireWildcard(_apis);

var _rules = require('./rules');

var rules = _interopRequireWildcard(_rules);

var sdk = {};

Object.keys(apis).forEach(function (catagory) {
  sdk[catagory] = new _sdk2['default']('http://www.douban.com', apis[catagory], rules[catagory]);
});

exports['default'] = sdk;
module.exports = exports['default'];
//# sourceMappingURL=douban.js.map