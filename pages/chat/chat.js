// pages/chat/chat.js
const vx = require('../../utils/vx.js');
const {
  $Toast
} = require('../../iview_dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tapTimes: 0,
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
    vx.setNavBarText('设置舔狗');
    this.setData({
      current_time: this.fillTime()
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    let token = wx.getStorageSync('token');
    token.access_token = '23333';
    console.log(token);
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
  fillTime() {
    let cur_date = new Date();
    let cur_min = cur_date.getMinutes();
    let cur_hour = cur_date.getHours();
    if (cur_min < 10) {
      cur_min = '0' + cur_min;
    }
    return cur_hour + ':' + cur_min;
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
        content: '搞咩啊，填名字了啊，靓仔!',
        type: 'warning'
      });
      return false;
    }
    wx.redirectTo({
      url: '/pages/readyPage/readyPage?lapName=' + this.data.lapName + '&lapedName=' + this.data.lapedName,
    })
  },
  changLapName(e) {
    // console.log('lap', e);
    if (e.detail.detail.value) {
      this.setData({
        lapName: e.detail.detail.value
      })
    }
    // console.log(this.data.lapName);
  },
  changLapedName(e) {
    // console.log('laped', e);
    if (e.detail.detail.value) {
      this.setData({
        lapedName: e.detail.detail.value
      })
    }
    // console.log(this.data.lapedName);
  }
})