//login
//获取应用实例
const app = getApp();
const vx = require('../../utils/vx.js');
const api = require('../../utils/api.js');
const util = require('../../utils/util.js');
const {
  $Toast
} = require('../../iview_dist/base/index');
Page({
      data: {
        userInfo: {},
        hasUserInfo: false,
        authMenu: false,
        current_mobile: '',
        canIUse: wx.canIUse('button.open-type.getUserInfo')
      },
      onLoad: function() {
        // 获取用户的信息
        this.firstLoad();
        // notice bar
        this.setData({
          login_index_notice: app.globalData.login_index_notice,
        })
      },
      onShow() {
        // 因为网络请求的问题，导致onShow方法被加载后，token还未被赋值
        if (!app.globalData.token || !util.isLogin) {
        // if (!util.isLogin) {
            console.log('show');
            let _this = app;
            vx.login().then((jscode) => {
              vx.getSetting().then((res) => {
                if (res.authSetting['scope.userInfo']) { //TODO：未授权的情况下
                  vx.getUserInfo().then((info) => {
                    _this.globalData.userInfo = info.userInfo;
                    api.userLogin({
                      code: jscode.code,
                      iv: info.iv,
                      signature: info.signature,
                      encryptedData: info.encryptedData
                    });
                  });
                }
              });
            })
          }
        },
        getUserInfo: function(e) {
            api.demo();
            // console.log(e.detail.userInfo)
            // console.log(util.isLogin());
            // console.log(app.globalData.token);
            // app.globalData.token = wx.getStorageSync('token');
            // if (util.isLogin() && app.globalData.token) {
            // if (util.isLogin()) {
            //   wx.redirectTo({
            //     url: '/pages/index/index'
            //   })
            // } else {
            //   $Toast({
            //     content: '获取微信授权用户信息失败'
            //   });
            // }
          },
          firstLoad: function() {
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