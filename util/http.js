// import { config } from '../config'
const config = require('../config.js')

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
            const {data = {}} = res.data
            resolve(data)
          } else {
            this._error_show('服务器请求失败')
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
}

// export { HTTP }
module.exports = HTTP