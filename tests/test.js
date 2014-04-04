var Douban = require('../index');
var douban = new Douban;
var should = require("should");

describe('FM API', function() {
  describe('#auth', function() {
    it('假账户应无法正确进行登录授权', function(done) {
      douban.fm.auth({
        form: {
          email: 'fakeemail@douban.com',
          password: 123123123123
        }
      }, function(err, res, body){
        if (err) return done(err);
        // 这里要找出douban.fm授权失败的code代码
        body.err.should.not.equal(0);
        done();
      });
    });
  });
  describe('#channels', function() {
    it('正确返回频道歌曲信息', function(done){
      douban.fm.channels({}, function(err, res, body){
        if (err) return done(err);
        var result = body.songs;
        // 这里要找出一个频道最后返回的频道数目和相应的列表（16个似乎？）是否对应。
        result.length.should.above(0);
      });
    });
  })
});