const headers = {
  'User-Agent': 'douban.fm'
}

export const fm = {
  get: {
    headers,
    qs: {
      app_name: 'radio_desktop_win',
      version: 100
    }
  },
  post: {
    headers,
    form: {
      app_name: 'radio_desktop_win',
      version: 100
    }
  }
}