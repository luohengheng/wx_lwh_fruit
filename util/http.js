// import { config } from '../config'
const config = require('../config.js')

const sucCode = 'S10000';
const logoutCode = 'E99999';

class HTTP {

  request({ url = '/', method = 'GET', data = {}, header = {}}) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: config.base_url + url,
        method,
        data,
        header: {
          'content-type': 'application/json',
          ...header
        },
        success: res => {
          const code = res.statusCode.toString()

          if (code.startsWith('2')) {
            const {data = {}, code=''} = res.data

            if (code === sucCode) {
              resolve(data)
            } else if (code === logoutCode) {
              this._clearToken()
              //todo 有个问题
              // reject(res)
            }
            
          } else {
            this._error_show('服务器请求失败')
            reject(res)
          }
        },
        fail: res => {
          this._error_show('服务器连接失败')
          reject(res)
        }
      })
    })
  }

  _error_show(err_msg) {
    wx.showToast({
      title: err_msg || '未知错误',
      icon: 'none',
      duration: 2000
    })
  }

  _clearToken() {
    this._error_show('token失效，请重新登录')
    wx.removeStorage({
      key: 'token',
      success: function(res) {},
    })

    wx.switchTab({
      url: '/pages/me/index',
    })
  }
}

// export { HTTP }
module.exports = HTTP