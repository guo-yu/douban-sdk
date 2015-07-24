const errors = {
  invalidate_email: '抱歉，您的豆瓣帐号似乎出错了',
  wrong_email: '抱歉，您的豆瓣帐号似乎出错了',
  wrong_password: '抱歉，您的豆瓣密码似乎出错了'
}

export let fm = {
  auth: {
    method: 'post',
    url: '/j/app/login',
    callback: function(res, body, next) {
      if (body.r != 0) 
        return next(errors[body.err])

      return next(null)
    }
  },
  songs: {
    url: '/j/app/radio/people',
    callback: function(res, body, next) {
      if (body.r != 0) 
        return next(body.err)

      return next(null, body.song)
    }
  },
  channels: {
    url:'/j/app/radio/channels',
    callback: function(res, body, next) {
      if (!body.channels) 
        return next(new Error(body.err))

      return next(null, body.channels)
    }
  }
}
