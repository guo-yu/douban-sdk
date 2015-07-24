const errors = {
  invalidate_email: '抱歉，您的豆瓣帐号似乎出错了',
  wrong_email: '抱歉，您的豆瓣帐号似乎出错了',
  wrong_password: '抱歉，您的豆瓣密码似乎出错了'
}

export let fm = {
  /**
  *
  * @query: 
  *   app_name: radio_desktop_win
  *   version: 100,
  *   email,
  *   password
  *   
  * @return
  *   user_id
  *   err: 'ok',
  *   token,
  *   expire.
  *   r: 0,
  *   user_name,
  *   email
  *
  **/
  auth: {
    method: 'post',
    url: '/j/app/login',
    callback: function(res, body, next) {
      if (body.r != 0) 
        return next(errors[body.err])

      return next(null)
    }
  },

  /**
  *
  * @query: 
  *   none
  *   
  * @return
  *   [{
  *     name,
  *     seq_id, <Int>
  *     abbr_en,
  *     channel_id <Int>
  *     name_en
  *   }]
  *
  **/
  channels: {
    url:'/j/app/radio/channels',
    callback: function(res, body, next) {
      if (!body.channels) 
        return next(new Error(body.err))

      return next(null, body.channels)
    }
  },

  /**
  *
  * @query: 
  *   app_name: radio_desktop_win,
  *   version: 100,
  *   channel: channel_id
  *   type: 需要调用的接口类型，也是使用下表的报告类型
  *     b: bye，不再播放，并放回一个新的歌曲列表, with sid
  *     e: end，当前歌曲播放完毕，但是歌曲队列中还有歌曲. with sid
  *     n: new，没有歌曲播放，歌曲队列也没有任何歌曲，需要返回新播放列表,
  *     p: playing，歌曲正在播放，队列中还有歌曲，需要返回新的播放列表,
  *     s: skip，歌曲正在播放，队列中还有歌曲，适用于用户点击下一首 with sid
  *     r: rate，歌曲正在播放，标记喜欢当前歌曲 with sid
  *     u: unrate，歌曲正在播放，标记取消喜欢当前歌曲 with sid
  *
  *   // Optional:
  *   user_id,
  *   expire,
  *   token,
  *   sid, 在需要针对单曲操作时需要
  *   h, 最近播放列表 单次报告曲目播放状态，其格式是 |sid:报告类型|sid:报告类型,
  *   
  * @return
  *   {
  *     r: 0,
  *     version_max: 100,
  *     song: [{
  *       "album": "/subject/5952615/",
          "picture": "http://img3.douban.com/mpic/s4616653.jpg",
          "ssid": "e1b2",
          "artist": "Bruno Mars / B.o.B",
          "url": "http://mr3.douban.com/201308250247/4a3de2e8016b5d659821ec76e6a2f35d/view/song/small/p1562725.mp3",
          "company": "EMI",
          "title": "Nothin' On You",
          "rating_avg": 4.04017,
          "length": 267,
          "subtype": "",
          "public_time": "2011",
          "sid": "1562725",
          "aid": "5952615",
          "sha256": "2422b6fa22611a7858060fd9c238e679626b3173bb0d161258b4175d69f17473",
          "kbps": "64",
          "albumtitle": "2011 Grammy Nominees",
          "like": 1
  *     }]
  *   }
  *
  **/
  songs: {
    url: '/j/app/radio/people',
    callback: function(res, body, next) {
      if (body.r != 0) 
        return next(body.err)

      return next(null, body.song)
    }
  }
}
