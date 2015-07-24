import should from 'should'
import douban from '../dist/douban'

describe('doubanFM', () => {
  describe('#auth', () => {
    it('it should not return success a fake account', function(done) {
      this.timeout(8000)

      const query = {
        form: {
          email: 'fakeemail@douban.com',
          password: 123123123123
        }
      }

      douban.fm.auth(query)
        .then(() => {
          done(new Error('WFT?'))
        })
        .catch(err => done())
    })
  })

  describe('#songs', () => {
    it('should return a correct a song object from a exist channel', function(done){
      this.timeout(8000)

      // 这里要找出一个频道最后返回的频道数目和相应的列表（16个似乎？）是否对应。
      douban.fm.songs().then(({ body }) =>{
        done()
      })
      .catch(done)
    })
  })

  describe('#channels', () => {
    it('should return a correct a channels list', function(done){
      this.timeout(8000)

      // 这里要找出一个频道最后返回的频道数目和相应的列表（16个似乎？）是否对应。
      douban.fm.channels().then(({ body }) => {
        body.should.be.instanceOf(Array)
        body.length.should.above(0)
        done()
      })
      .catch(done)
    })
  })
})
