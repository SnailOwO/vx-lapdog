const app = getApp();
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 验证手机号
const validatePhone = phone => {
  let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
  if (!reg.test(phone)) {
    return false;
  } else {
    return true;
  }
}

// const mLogin = (phone, code) => {
//   console.log('ccc');
//   if (!phone) {
//     $Toast({
//       content: '请输入手机号',
//       type: 'warning'
//     });
//     return false;
//   }
//   let isPhone = validatePhone(phone);
//   if (!isPhone) {
//     $Toast({
//       content: '请输入合法的手机号',
//       type: 'warning'
//     });
//     console.log('请输入合法的手机号');
//     return false;
//   }
//   if (!code) {
//     console.log('请输入您的验证码');
//     return false;
//   }
// }

// 是否登录
const isLogin = function() {
  return app.globalData.userInfo ? true : false;
}

module.exports = {
  // mLogin: mLogin,
  isLogin: isLogin,
  formatTime: formatTime,
  validatePhone: validatePhone
}