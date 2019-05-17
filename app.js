const vx = require('/utils/vx.js');
const api = require('/utils/api.js');
const util = require('/utils/util.js');
App({
  onLaunch: function() {
    console.log('app');
    // api.demo({
    //   'code': 1,
    //   'carryToken': true,
    // });
  },
  onShow() {
    
  },
  onHide() {

  },
  globalData: {
    token: "",
    userInfo: null,
    login_index_notice: '如果不是真的喜欢，谁又愿意当舔狗呢？？？欢迎来舔~~~'
  }
})