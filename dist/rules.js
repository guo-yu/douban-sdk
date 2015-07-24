'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var headers = {
  'User-Agent': 'douban.fm'
};

// get had a `type: 'n'`
var fm = {
  get: {
    headers: headers,
    qs: {
      app_name: 'radio_desktop_win',
      version: 100
    }
  },
  post: {
    headers: headers,
    form: {
      app_name: 'radio_desktop_win',
      version: 100
    }
  }
};
exports.fm = fm;
//# sourceMappingURL=rules.js.map