//index.js
//获取应用实例
const app = getApp();
const util = require('../../utils/util.js');
Page({
  data: {
   
  },
  onLoad: function() {
    console.log('index');
  },
  onReady:function() {
    console.log('index ready');
  },
  customRouter() {
    //todo: 路由需要自定义封装 
    console.log('index.js', app.globalData.token);
    console.log('index.js', util.isLogin());
    if (!util.isLogin() || !app.globalData.token) {   //todo: 当前页面无需跳转
      console.log('1');
      wx.redirectTo({
        url: '/pages/login/login'
      })
    } else {
      console.log('2');
      wx.switchTab({
        url: '/pages/mine/mine'
      })
    }
  },
  onShow: function(options) {
    console.log('index show');
    // 路由跳转
    this.customRouter();
    // 建立websocket
  },
  onHide: function() {
    console.log('index hide');
  },
  onUnload: function() {
    console.log('index unload');
  }
})