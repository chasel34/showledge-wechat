//app.js
App({


  // 公共数据
  globalData: {
    username: 'chasel'
  },

  // 公共方法
  redirectTologinPage: function (that) {
    console.log(that.data.username)
    if (that.data.username === null) {
      wx.redirectTo({
        url: '../login/login',
        success: function (res) {
          // success
          console.log('success')
        },
        fail: function () {
          // fail
          console.log('fail')
        },
        complete: function () {
          // complete
        }
      })
    }
  }
})