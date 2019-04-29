// vx login
const app = getApp();
// console.log(app);
var vxLogin = function vxLogin() {
  wx.login({
    success: res => {
      // 发送 res.code 到后台换取 openId, sessionKey, unionId
      console.log(res);
    }
  })
}

var setNavBarText = function(txt) {
  wx.setNavigationBarTitle({
    title: txt
  })
}

// vx 授权认证
// var auth = function auth() {
//   wx.getSetting({
//     success: res => {
//       console.log(2, res);
//       if (res.authSetting['scope.userInfo']) {
//         // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
//         wx.getUserInfo({
//           success: res => {
//             // 可以将 res 发送给后台解码出 unionId
//             console.log(app);
//             app.globalData.userInfo = res.userInfo
//             // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//             // 所以此处加入 callback 以防止这种情况
//             if (app.userInfoReadyCallback) {
//               app.userInfoReadyCallback(res)
//             }
//           }
//         })
//       }
//     }
//   })
// }

module.exports = {
  // auth: auth,
  vxLogin: vxLogin,
  setNavBarText: setNavBarText
};