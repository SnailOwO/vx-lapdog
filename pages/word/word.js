// pages/word/word.js
const util = require('../../utils/vx.js'); 
const { $Toast } = require('../../iview_dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 1,
    wordAry: [1]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    util.setNavBarText('上传舔狗语录');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  add() {   //todo:增加key去记录删除第几个
    if(this.data.current >= 10) {
      $Toast({
        content: '抱歉,一次最多增加10条',
        type: 'warning'
      });
      return false;
    }
    this.setData({
      current: this.data.current + 1,
      wordAry: this.data.wordAry.concat([this.data.current + 1])
    })
  },
  cancel(e) {
    // console.log(e);
    // 删除数组
    let cur_del_val = e.target.dataset.num;
    let cur_del_index = this.data.wordAry.indexOf(cur_del_val);
    this.data.wordAry.splice(cur_del_index,1);
    this.setData({
      current: this.data.current - 1,
      wordAry: this.data.wordAry
    })
  }
})