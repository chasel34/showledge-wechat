Page({
  data: {
    followButtonText: ['已关注','已关注','已关注','已关注'], //关注按钮文字
    followButtonStyle: ['followButtonStyle2','followButtonStyle2','followButtonStyle2','followButtonStyle2'], //关注按钮样式

    followerButtonText: ['+ 关注','+ 关注','+ 关注','+ 关注'], //关注按钮文字
    followerButtonStyle: ['followButtonStyle1','followButtonStyle1','followButtonStyle1','followButtonStyle1'], //关注按钮样式



    // 页面配置
    userScroll: false,
    showLastTab: false,



    window_width: 375,// 单位是px
    tab_config: {
      tabs: [{name: '学习动态', counts: 34}, {name: '学习笔记', counts: 4},{name: '知识地图', counts: 10}, {name: '学习榜样', counts: 134},{name: '关注者', counts: 4}, {name: '收藏库', counts: 334}],// tabs
      fixed: false, // tabbar是否固定宽度
      active_tab: 0, //当前激活的tab
      item_width: 90,// 单位是px
      tab_left: 0, // 如果tabbar不是固定宽度，则目前左移的位置
      underline: {
        offset: 0 //下划线的位移
      }
    },
    swipe_config: {
      swipes: ['demo-text-1', 'demo-text-2'],// 不同面板的内容
      indicator_dots: false, // 不显示小圆点
      autoplay: false,// 自动切换
      interval: 2000,// 自动切换频率
      duration: 500, // 切换时间
      current: 0 // 当前激活的panel
    }
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    let that = this;
    try {
      let {window_width, tab_config} = that.data;
      var res = wx.getSystemInfoSync()
      window_width = res.windowWidth;

      if (tab_config.fixed) {
        tab_config.item_width = window_width / tab_config.tabs.length;
      }

      that.setData({ "window_width": window_width, "tab_config": tab_config });

    } catch (e) {

    }

    if(this.data.window_width > 350) {
      this.setData({
        showLastTab: true
      })
    }
  },
  // 更换页面到指定page ，从0开始
  updateSelectedPage(page) {
    let that = this;
    // console.log("====_updateSelectedPage");
    let {window_width, tab_config, swipe_config } = this.data;
    let underline_offset = (tab_config.item_width + 4) * page;

    tab_config.active_tab = page;
    swipe_config.current = page;
    tab_config.underline.offset = underline_offset;
    if (!tab_config.fixed) {
      // 如果tab不是固定的 就要 检测tab是否被遮挡
      let show_item_num = Math.floor(window_width / tab_config.item_width); // 一个界面完整显示的tab item个数
      let min_left_item = tab_config.item_width * (page - show_item_num + 1); // 最小scroll-left 
      let max_left_item = tab_config.item_width * page; //  最大scroll-left
      if (tab_config.tab_left < min_left_item || tab_config.tab_left > max_left_item) {
        // 如果被遮挡，则要移到当前元素居中位置
        tab_config.tab_left = max_left_item - (window_width - tab_config.item_width) / 2;
      }
    }
    that.setData({
      "tab_config": tab_config,
      "swipe_config": swipe_config
    });
  },
  handlerTabTap(e) {
    let that = this;
    that.updateSelectedPage(e.currentTarget.dataset.index);
  },
  swiperChange(e) {
    let that = this;
    // console.log("===== swiperChange " + e.detail.current);
    that.updateSelectedPage(e.detail.current);
  },
  onScroll(e) {
    let that = this;
  },

  pageScrollToLower: function() {
    this.setData({
      userScroll: true
    })
  },

  swiperTapScrollToTop: function() {
    this.setData({
      userScroll: false
    })
  },

  followButtonTap: function(e) {
    console.log(e)
    count = e.currentTarget.dataset.count
    console.log(this.data.followButtonText[count])

    let param = {}
    let string1 = 'followButtonText[' + count + ']'
    let string2 = 'followButtonStyle[' + count + ']'

    if(this.data.followButtonText[count] === '已关注') {
      param[string1] = '+ 关注'
      param[string2] = 'followButtonStyle1'
      this.setData(param)
    }
    else {
      param[string1] = '已关注'
      param[string2] = 'followButtonStyle2'
      this.setData(param)
    }
  },

   followerButtonTap: function(e) {
    console.log(e)
    count = e.currentTarget.dataset.count
    console.log(this.data.followButtonText[count])

    let param = {}
    let string1 = 'followerButtonText[' + count + ']'
    let string2 = 'followerButtonStyle[' + count + ']'

    if(this.data.followerButtonText[count] === '已关注') {
      param[string1] = '+ 关注'
      param[string2] = 'followButtonStyle1'
      this.setData(param)
    }
    else {
      param[string1] = '已关注'
      param[string2] = 'followButtonStyle2'
      this.setData(param)
    }
  }
})