var headers = {
  'User-Agent': 'douban.fm'  
}

exports.fm = {
  get: {
    headers: headers,
    qs: {
      app_name: 'radio_desktop_win',
      version: 100,
      type: 'n'
    }
  },
  post: {
    headers: headers,
    form: {
      app_name: 'radio_desktop_win',
      version: 100
    }
  }
}