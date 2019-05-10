//login
//获取应用实例
const app = getApp();
const util = require('../../utils/util.js');
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    authMenu: false,
    current_mobile: '',
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    // 获取用户的信息
    this.firstLoad();
    //console.log(app.globalData.userInfo);
    // notice bar
    this.setData({
      login_index_notice: app.globalData.login_index_notice,
      // login_way: app.globalData.login_way
    })
  },
  getUserInfo: function (e) {
    console.log(e.detail.userInfo)
    if (!util.isLogin) {
      this.setData({
        userInfo: e.detail.userInfo
      });
    }
    wx.redirectTo({
      url: '/pages/index/index'
    })
  },
  firstLoad: function () {
    // 获取用户的信息
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          console.log('ccc');
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  }
})