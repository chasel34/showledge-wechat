Page({
  data: {
    scrollIntoView: null,
    showCommentInput: false,
    focus: true
  },

  // 事件处理函数
  displayCommentList:function() {
    this.setData({
      scrollIntoView: 'comment-list'
    })
  },

  displayCommentInput: function(e) {
    var that = this
    if(e.currentTarget.id === 'scrollView') {
      this.setData({
      showCommentInput: false
    })
    }
    else if(e.currentTarget.id === 'commentInput') {
      this.setData({
      showCommentInput: true
    })
    }
  }
})