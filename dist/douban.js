'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _sdk = require('sdk');

var _sdk2 = _interopRequireDefault(_sdk);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _apis = require('./apis');

var apis = _interopRequireWildcard(_apis);

var _rules = require('./rules');

var rules = _interopRequireWildcard(_rules);

var sdk = {};

Object.keys(apis).forEach(function (catagory) {
  sdk[catagory] = new _sdk2['default']('http://www.douban.com', apis[catagory], rules[catagory]);
});

// Init high level APIs for douban.fm
(function () {
  if (!sdk.fm) return;

  // n: new，没有歌曲播放，歌曲队列也没有任何歌曲，需要返回新播放列表
  sdk.fm.fresh = function () {
    var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    params.type = 'n';

    if (!params.channel) return _bluebird2['default'].reject(new Error('douban.fm.fresh(); channel_id is required'));

    return sdk.fm.songs({
      qs: params
    });
  };

  // s: skip，歌曲正在播放，队列中还有歌曲，适用于用户点击下一首 with sid
  // r: rate，歌曲正在播放，标记喜欢当前歌曲 with sid
  // u: unrate，歌曲正在播放，标记取消喜欢当前歌曲 with sid
  // b: bye，不再播放，并放回一个新的歌曲列表, with sid
  // e: end，当前歌曲播放完毕，但是歌曲队列中还有歌曲. with sid
  ['skip', 'rate', 'unrate', 'bye', 'end'].forEach(function (item) {
    sdk.fm[item] = function () {
      var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      if (!params.channel) return _bluebird2['default'].reject(new Error('douban.fm.skip(); channel_id is required'));
      if (!params.sid) return _bluebird2['default'].reject(new Error('douban.fm.skip(); sid is required'));

      params.type = item.charAt(0);
      return sdk.fm.songs({
        qs: params
      });
    };
  });
})();

exports['default'] = sdk;
module.exports = exports['default'];
//# sourceMappingURL=douban.js.map