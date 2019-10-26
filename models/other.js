const HTTP = require('../util/http.js')
const config = require('../config.js')


class OtherModel extends HTTP {
  async login(params) {
    const { data = [] } = await this.request({
      url: '/wxlogin',
      method: 'POST',
      data: params
    })

    return data
  }
}

module.exports = OtherModel