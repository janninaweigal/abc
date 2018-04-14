const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var sliderDatas = [
      {
        url: '',
        src: '../../img/b.png'
      },
      {
        url: '',
        src: '../../img/a.png'
      },
      {
        url: '',
        src: '../../img/c.png'
      }
    ]
    this.setData({ 'sliderDatas': sliderDatas })
    var moudles = [
      {
        url: '/pages/home/home',
        src: '/img/service.png',
        text: '买菜'
      },
      {
        url: '/pages/deliver/deliver',
        src: '/img/service1.png',
        text: '送货'
      },
      {
        url: '/pages/home/home',
        src: '/img/service2.png',
        text: '待开发'
      },
      {
        url: '/pages/home/home',
        src: '/img/more.png',
        text: '更多'
      }
    ]
    this.setData({ 'moudles': moudles })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  toown: function () {
    wx.navigateTo({
      url: '../home/home'
    })
  },
  tolists: function () {
    wx.navigateTo({
      url: '../home/home'
    })
  }
})