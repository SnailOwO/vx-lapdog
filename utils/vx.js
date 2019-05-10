const api = require('../utils/api.js');
/**
 *  单独封装微信API，以便使用promise 
 */
const login = () => {
  return new Promise((resolve, reject) => {
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        resolve({
          code: res.code
        });
        console.log('wxApi:login', res);
      },
      fail: err => {
        reject(err);
        console.log('wxApi:login', err);
      }
    })
  })
}

// wx api 获取授权
const getSetting = () => {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success: res => {
        resolve(res);
      },
      fail: err => {
        reject(err);
      }
    })
  })
}

// wx api 获取用户信息
const getUserInfo = () => {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({
      success: res => {
        resolve(res);
        console.log('wx getUserInfo',res);
      },
      fail: err => {
        reject(err);
        console.log('wx getUserInfo', err);
      }
    })
  })
}

const setNavBarText = function(txt) {
  wx.setNavigationBarTitle({
    title: txt
  })
}

// 单独一张 todo:改为回调的形式，支持更改头像 ??
const uploadImage = function() {
  let tempFilePaths;
  wx.chooseImage({
    count: 1,
    sizeType: ['original', 'compressed'],
    sourceType: ['album', 'camera'],
    success(res) {
      console.log(res);
      // tempFilePath可以作为img标签的src属性显示图片
      tempFilePaths = res.tempFilePaths;
      return tempFilePaths ? tempFilePaths : '';
    }
  })
}
/***********************************************************/

// 自定义 wx api
// const loginWithCode = () => {
//   login().then((res) => {
//     api.userLogin(res.code).then(data => {
//       console.log('loginWithCode', data);
//     }).catch(err => {
//       console.log('loginWithCode', err);
//     });
//   })
// }

module.exports = {
  login: login,
  getSetting: getSetting,
  getUserInfo: getUserInfo,
  // uploadImage: uploadImage,
  setNavBarText: setNavBarText,
  // loginWithCode: loginWithCode
};