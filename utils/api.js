import {
  http
} from '../utils/net.js'

var url = {
  userLogin: "/api/wxLogin",
}

module.exports = {
  userLogin(param) {
    return http({
      url: url.userLogin,
      data: param
    })
  }
}