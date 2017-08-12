var app = getApp()

Page({

  //方法
  formSumit: function (e) {
    // console.log(e)
    // console.log(e.detail.value.username)
    app.globalData.username = e.detail.value.username
    wx.switchTab({
      url: '../home/home',
      success: function (res) {
        // success
        console.log('success')
      },
      fail: function (res) {
        // fail
        console.log('fail')
      },
      complete: function () {
        // complete
      }
    })
  }
})