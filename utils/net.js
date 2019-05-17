/**
 * 封装http 请求方法
 */
const apiUrl = "https://lapdog.lazyfarmer.top"; //服务器api地址
const http = (params) => {
  //返回promise 对象
  return new Promise((resolve, reject) => {
    console.log(params.carryToken);
    console.log('net.js~wx',wx.getStorageSync('token'));
    params.carryToken = params.carryToken ? params.carryToken : false;
    console.log(params.carryToken);
    //设置后端需要的常用的格式就好，特殊情况调用的时候单独设置
    let defaultHeader = {
      "Accept": 'application/json',
      "Content-Type": "application/x-www-form-urlencoded"
    };
    let token = {};
    if (wx.getStorageSync('token')) {
      token = {
        "Authorization": "Bearer " + wx.getStorageSync('token')
      };
    }
    let flag = params.header ? params.header : defaultHeader;
    let headerObj = params.carryToken ? Object.assign(flag, token) : flag;
    console.log('net.js', headerObj);
    wx.request({
      url: apiUrl + params.url, //服务器url+参数中携带的接口具体地址
      data: params.data, //请求参数
      header: headerObj,
      method: params.method || 'POST',
      dataType: params.dataType, //返回的数据格式,默认为JSON，特殊格式可以在调用的时候传入参数
      responseType: params.responseType || 'text', //响应的数据类型
      success: function(res) {
        console.log('http', res);
        //接口访问正常返回数据
        if (res.statusCode == 200) {
          if (res.data.hasOwnProperty('token')) {
            wx.setStorageSync('token', res.data.token);
            // app.globalData.token = res.data.token;
            getApp().globalData.token = res.data.token;
          }
          resolve(res.data);
        } else if (res.statusCode == 401) { // token验证过期
          //清除所有缓存
          wx.clearStorageSync();
          getApp().globalData.token  = '';
          // 跳转首页
          wx.showModal({
            title: 'LapDog',
            content: res.data.msg ? res.data.msg : '登录状态过期',
            showCancel: false,
            success: function() {
              wx.redirectTo({
                url: '/pages/index/index'
              })
            }
          })
        } else {
          wx.showModal({
            title: 'LapDog',
            content: res.data.msg ? res.data.msg : '系统繁忙',
            showCancel: false
          })
        }
      },
      fail: function(err) {
        wx.showModal({
          title: 'LapDog',
          content: '系统繁忙',
          showCancel: false
        })
        console.log('http', err);
        reject(err);
      },
      complete: function() {}
    })
  })
}

module.exports = {
  http: http,
};