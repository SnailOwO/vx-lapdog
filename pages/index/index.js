//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    authMenu: false,
    current_mobile: '15366196173'
  },
  onLoad: function() {
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
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    // notice bar
    this.setData({
      login_index_notice: app.globalData.login_index_notice,
      // login_way: app.globalData.login_way
    })
  },
  getUserInfo: function(e) {
    // console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    // console.log(e.detail.rawData)
  }
  // toggleMenu(e) {
  //   this.setData({
  //     authMenu: e.detail.authMenu
  //   })
  //   // 获取本地手机号码
  // },
  // cancel() {
  //   this.setData({
  //     authMenu: !this.data.authMenu
  //   })
  // }
})