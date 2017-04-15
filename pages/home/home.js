Page({
  data: {
    home: {},  
    swiperImg: [],
    article: [],
    articleDisplay: []
  },
  onLoad: function() {
    this.fetchData()
  },
  displayArticle: function() {
    let that = this
    let length = this.data.articleDisplay.length
    for(let i = length; i < length + 20; i++) {
      this.setData({
        'articleDisplay[1]': this.data.article[i] 
      })
    }
    console.log(param)
    console.log(this.data.param)
  },
  fetchData: function() {
    let that = this
    wx.request({
      url: 'http://127.0.0.1:8080/api/home',
      success: function(res) {
        that.setData({
          home: res.data.data
        })
        that.setData({
          swiperImg: that.data.home.swiperImg
        })
        that.setData({
          article: that.data.home.article
        })
        that.displayArticle()
        console.log(that.data.article)
        console.log(that.data.articleDisplay)
      },
      fail: function() {
        console.log('fail')
      },
      complete: function() {
        console.log('complete')
      }
    })
  }
})