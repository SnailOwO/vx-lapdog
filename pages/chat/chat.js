// pages/chat/chat.js
const app = getApp();
const vx = require('../../utils/vx.js');
const {
  $Toast
} = require('../../iview_dist/base/index');
const util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tapTimes: 0,
    showMessageBox: false,
    current_time: '00:00',
    tapAry: [
      '这只是一个图标啦',
      '别点了，只是图标啦',
      '疯了，还点？？？'
    ],
    lapName: '',
    lapedName: '',
    lapHead: '/resources/common/lap-head.jpeg',
    lapedHead: '/resources/common/laped-head.jpg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setTime();
    vx.setNavBarText('设置舔狗');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  cue() {
    // 随机点击图标，回答有序的话题
    if (this.data.tapTimes > 2) {
      this.setData({
        tapTimes: 0
      })
      return false;
    }
    let tapTimes = ++this.data.tapTimes;
    this.setData({
      tapTimes: tapTimes
    })
    $Toast({
      content: this.data.tapAry[this.data.tapTimes - 1],
      type: 'warning'
    });
  },
  chooseLapHead() {
    let head = vx.uploadImage();
    this.setData({
      lapHead: head
    })
  },
  chooseLapedHead() {
    let tempFilePaths;
    const _this = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        console.log(res);
        // tempFilePath可以作为img标签的src属性显示图片
        tempFilePaths = res.tempFilePaths;
        _this.setData({
          lapedHead: tempFilePaths
        })
      }
    })
  },
  startLap() {
    if (!this.data.lapName || !this.data.lapedName) {
      $Toast({
        content: '搞咩啊，填名字啊，靓仔!',
        type: 'warning'
      });
      return false;
    }
    // this.demo({
    //   // time: 3000
    // });

    this.setWebSocket();
    // 重新设置时间
    this.setTime();
    // 更改标题
    // wx.setNavigationBarTitle({
    //   title: this.data.lapName ? this.data.lapName : '莫得感情的舔狗'
    // })
    // wx.setNavigationBarColor({
    //   frontColor: '#000000',
    //   backgroundColor: '#f9f9f9',
    //   animation: {
    //     duration: 400,
    //     timingFunc: 'easeIn'
    //   }
    // })
    // wx.redirectTo({
    //   url: '/pages/readyPage/readyPage?lapName=' + this.data.lapName + '&lapedName=' + this.data.lapedName,
    // })
  },
  setWebSocket() {
    // let token = app.globalData.token;
    // let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImUyMzFiOTgyMTdlZjcwNjIwYTA0NGI0ZTlkYWZmYmMyZGE1NmU3ZTBjNTJiNTdiOGJlOTY0ZmY0ZDI5MjM5OWYzYjEzMjljZjA0MGExMzc5In0.eyJhdWQiOiIxIiwianRpIjoiZTIzMWI5ODIxN2VmNzA2MjBhMDQ0YjRlOWRhZmZiYzJkYTU2ZTdlMGM1MmI1N2I4YmU5NjRmZjRkMjkyMzk5ZjNiMTMyOWNmMDQwYTEzNzkiLCJpYXQiOjE1NTc4MTMyNjYsIm5iZiI6MTU1NzgxMzI2NiwiZXhwIjoxNTg5NDM1NjY2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.IicTis0rGv1_aOj6us9x85Xf5Tv9c0P9Bbhcu7lbExkUGr9pB3gZaZItuJ01pnvPTeo6p0hlb2ZlSoE-veH9nMMlOgE3sm1yq5tz0vE7FQZwFfS-y6lOIPffSMi4oe4bXVCk4SP7ozIM_ubCo67Rw-GRudQWjovfwTvaLJsk4rc8s4Hpcb4lIthEZpctuA9DAViCedTsMowAiiLOgwqW5HPw_ZNI5nbSXwBYtSD69BYJja7pMwmFUn8tzXy8aNWzeQfMj2AKY2mh7p6UJonS0NlLfKvdlEjntEdNohO4Mv8qo2VdTCrFbXwrh14f_GsWucifHBevqq4o_mKoRno2X9HJfitXxVj7xpz49rLK0oxbYDGxZDJEeP497epeLXyn3__hH9N0lmKPRc47q2KJtgMMLPls7zM02VeMxLsrNPDsj5wE4TETIfOQhKGAiZhnJzFs4vADKZURkfS0k4-9tZVJGjd7CR94cbcmPXoCWhxD8LZyt5XaKl8wqQAhS5Z79e6GhA7mgKuA05X9LLe3kAiZ4UB4N8ZHL6WjuKnXIYF_WN5Ifn7A6I2tUWMCJG_cfsBcskSfBo68zkWovd-upEOtCcWoyxPv2i3g42yZFqNuP4fJhq4MUAfZ2KicBwE5UdkL75hwb_qktAfO7LmC_1-Q_0uctKs7Yn-NN2ptHko';
    let token = app.globalData.token;
    token = token ? token : '';
    wx.connectSocket({
      // url: 'wss://lapdog.lazyfarmer.top?token=' + token,
      url: 'wss://lapdog.lazyfarmer.top/ws?token=' + token
    })

    wx.onSocketOpen(function(res) {
      console.log('WebSocket连接已打开！')
      wx.sendSocketMessage({
        data: 'Hello,World:' + Math.round(Math.random() * 0xFFFFFF).toString(),
      })
    })

    wx.onSocketMessage(function(res) {
      console.log(res)
    })

    wx.onSocketClose(function(res) {
      console.log('WebSocket连接已关闭！')
    })
  },
  changLapName(e) {
    // console.log('lap', e);
    if (e.detail.detail.value) {
      this.setData({
        lapName: e.detail.detail.value
      })
    }
  },
  changLapedName(e) {
    // console.log('laped', e);
    if (e.detail.detail.value) {
      this.setData({
        lapedName: e.detail.detail.value
      })
    }
  },
  setTime() {
    this.setData({
      current_time: util.fillTime()
    })
  },
  demo(param) {
    console.log(param);
    setTimeout(() => {
      console.log(this.data.current_time);
      console.log('12',param);
      wx.redirectTo({
        url: param.url || '/pages/readyPage/readyPage?lapName=' + this.data.lapName + '&lapedName=' + this.data.lapedName,
      })
    }, param.time || 150);
    // setTimeout(function() {
    //   console.log(this.data.current_time);
    // },150);
  }
})