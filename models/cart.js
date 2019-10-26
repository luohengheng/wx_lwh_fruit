const HTTP = require('../util/http.js')
const config = require('../config.js')


class CartModel extends HTTP {
  async genOrder(params) {
    const token = wx.getStorageSync('token')
    const res = await this.request({
      url: '/genOrder',
      method: 'POST',
      data: params,
      header: {
        Authorization: token
      }
    })
    console.log(11111, res)
    return res.data
    
  }
}

module.exports = CartModel