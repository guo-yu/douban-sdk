var errors = require('./errors');

exports.fm = {
  auth: {
    method: 'post',
    url: '/j/app/login',
    callback: function(err, res, result, next) {
      if (result.r == 0) return next(null, result);
      return next(errors[result.err]);
    }
  },
  songs: {
    url: '/j/app/radio/people',
    callback: function(err, res, result, next) {
      if (result.r == 0) return next(null, result.song, result);
      return next(result.err);
    }
  },
  channels: {
    url:'/j/app/radio/channels',
    callback: function(err, res, result, next) {
      if (!result.channels) return next(new Error(result.err));
      return next(null, result.channels);
    }
  }
}