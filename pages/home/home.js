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
  /* 初始化展示列表和下拉时加载数据 */
  displayArticle: function() {
    let that = this
    let length = this.data.articleDisplay.length
    let count = 0
    if((length + 20) < this.data.article.length) {
      count = length + 20
    } else {
      count = this.data.article.length
    }
    for(let i = length; i < count; i++) {
      let param = {}
      let string = 'articleDisplay[' + i + ']'
      param[string] = that.data.article[i]
      this.setData(param)
    }
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
      },
      fail: function() {
        console.log('fail')
      }
    })
  }
})