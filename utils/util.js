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

const fillTime = function() {
  let cur_date = new Date();
  let cur_min = cur_date.getMinutes();
  let cur_hour = cur_date.getHours();
  if (cur_min < 10) {
    cur_min = '0' + cur_min;
  }
  return cur_hour + ':' + cur_min;
}

// 是否登录
const isLogin = function() {
  // console.log(getApp().globalData.userInfo);
  return getApp().globalData.userInfo ? true : false;
}

module.exports = {
  isLogin: isLogin,
  fillTime: fillTime,
  formatTime: formatTime,
  validatePhone: validatePhone
}