const vx = require('/utils/vx.js');
App({
  onLaunch: function () {
    //展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
    //登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     console.log(res);
    //   }
    // })
    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     console.log(2,res);
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo
    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
    vx.vxLogin();
  },
  globalData: {
    userInfo: null,
    login_way: 'mobile',   //登录方式显示：mobile => 手机, email => 邮箱
    login_index_notice: '如果不是真的喜欢，谁又愿意当舔狗呢？？？欢迎来舔~~~'
  }
})