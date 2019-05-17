import {
  http
} from '../utils/net.js'

var url = {
  demo: '/api/demo',
  userLogin: "/api/wxLogin",
}

module.exports = {
  userLogin(param) {
    return http({
      url: url.userLogin,
      data: param
    })
  },
  demo() {   // 模拟debug
    return http({
      url: url.demo,
      carryToken: true,
      method: 'get'
    })
  }
}