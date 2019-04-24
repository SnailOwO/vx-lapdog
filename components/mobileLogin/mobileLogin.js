// const { $Toast } = require('../../iview_dist/base/index');
const util = require('../../utils/util.js');
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    authMenu: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    mobile: '',   //手机号
    code: '',   // 验证码
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 事件函数
    sendMsg: function() {
      // util.mLogin(this.data.mobile, this.data.code);
      // console.log('cc');
      if(!this.data.mobile) {
        // $Toast({   
        //   content: '请输入您的手机号',   // totast不能在components中引用
        //   type: 'warning'
        // });
        console.log('请输入您的手机号');
        return false;
        // 手机正则
        let isPhone = util.validatePhone(this.data.mobile);
        if(!isPhone) {
          // $Toast({
          //   content: '请输入合法的手机号',
          //   type: 'warning'
          // });
          console.log('请输入合法的手机号');
          return false;
        }
        console.log('send msg');
      }
      if (!this.data.code) {
        // $Toast({
        //   content: '请输入您的验证码',
        //   type: 'warning'
        // });
        console.log('请输入您的验证码');
        return false;
      }
    },
    login: function() {
      if (!this.data.mobile) {
        console.log('请输入手机号');
        return false;
      }
      let isPhone = util.validatePhone(this.data.mobile);
      if (!isPhone) {
        console.log('请输入合法的手机号');
        return false;
      }
      if (!this.data.code) {
        console.log('请输入您的验证码');
        return false;
      }
    },
    change() {
      this.triggerEvent('toggleMenu', { authMenu: !this.properties.authMenu });
      console.log(this.properties.authMenu);
    },
    // getPhoneNumber(e) {   //个人公众号没有权限
    //   console.log(e);
    // }
  }
})
