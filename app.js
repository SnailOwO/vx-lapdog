const vx = require('/utils/vx.js');
const api = require('/utils/api.js');
App({
  onLaunch: function() {
    console.log('app');
    let _this = this;
    let token = wx.getStorageSync('token');
    console.log('app launch',token);
    token = token ? token : {};
    if (!Object.keys(token).length) {
      vx.login().then((jscode) => {
        vx.getSetting().then((res) => {
          if (res.authSetting['scope.userInfo']) {
            vx.getUserInfo().then((info) => {
              console.log('2333333333333',info);
              _this.globalData.userInfo = info.userInfo;
              if (this.userInfoReadyCallback) {
                _this.userInfoReadyCallback(info);
              }
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
  globalData: {
    userInfo: null,
    login_index_notice: '如果不是真的喜欢，谁又愿意当舔狗呢？？？欢迎来舔~~~'
  }
})