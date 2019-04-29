//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
   
  },
  onLoad: function() {
    console.log('index');
  },
  onReady:function() {
    console.log('ready');
    this.customRouter();
  },
  customRouter() {
    //todo: 路由需要自定义封装 
    if (!app.globalData.userInfo) {
      wx.redirectTo({
        url: '/pages/login/login'
      })
    } else {
      wx.switchTab({
        url: '/pages/mine/mine'
      })
    }
  },
  onShow: function() {
    console.log('show');
  },
  onHide: function() {
    console.log('hide');
  },
  onUnload: function() {
    console.log('unload');
  }
})