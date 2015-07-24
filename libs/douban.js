import SDK from 'sdk'
import Promise from 'bluebird'
import * as apis from './apis'
import * as rules from './rules'

let sdk = {}

Object.keys(apis).forEach(catagory => {
  sdk[catagory] = new SDK(
    'http://www.douban.com', 
    apis[catagory], 
    rules[catagory]
  )
})

// Init high level APIs for douban.fm
;(() => {
  if (!sdk.fm)
    return

  // n: new，没有歌曲播放，歌曲队列也没有任何歌曲，需要返回新播放列表
  sdk.fm.fresh = (params = {}) => {
    params.type = 'n'

    if (!params.channel)
      return Promise.reject(new Error('douban.fm.fresh(); channel_id is required'))

    return sdk.fm.songs({
      qs: params
    })
  }

  // s: skip，歌曲正在播放，队列中还有歌曲，适用于用户点击下一首 with sid
  // r: rate，歌曲正在播放，标记喜欢当前歌曲 with sid
  // u: unrate，歌曲正在播放，标记取消喜欢当前歌曲 with sid
  // b: bye，不再播放，并放回一个新的歌曲列表, with sid
  // e: end，当前歌曲播放完毕，但是歌曲队列中还有歌曲. with sid
  ;['skip', 'rate', 'unrate', 'bye', 'end'].forEach(item => {
    sdk.fm[item] = (params = {}) => {
      if (!params.channel)
        return Promise.reject(new Error('douban.fm.skip(); channel_id is required'))
      if (!params.sid)
        return Promise.reject(new Error('douban.fm.skip(); sid is required'))

      params.type = item.charAt(0)
      return sdk.fm.songs({
        qs: params
      })
    }
  })
})();

export default sdk
