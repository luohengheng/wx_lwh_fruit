const HTTP = require('../util/http.js')
const config = require('../config.js')


class HomeModel extends HTTP {

  async getHomeMsg() {
    const {data = []} = await this.request({
      url: '/getHomeInfo',
      method: 'POST',
    })
    return data
  }


  async getHomeSwipe() {
    let { data = [] } = await this.request({
      url: '/getHomeShuffle',
      method: 'POST',
    })
    data = data.map(i => {
      return {
        ...i,
        shuffle_figure: `${config.base_image_url}/${i.shuffle_figure}`
      }
    })
    return data
  }

  async getHomeBanner() {
    const { data = [] } = await this.request({
      url: '/getHomeBanner',
      method: 'POST',
      data: {
        pageSize: 1,
        pageNum: 6
      }
    })
  
    return data
  }
}

module.exports = HomeModel