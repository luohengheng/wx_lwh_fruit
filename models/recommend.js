const HTTP = require('../util/http.js')
const config = require('../config.js')

class RecommendModal extends HTTP{

  async getRecommendList() {
    let { data = [] } = await this.request({
      url: '/getRecommedList',
      method: 'POST',
    })

    data = data.map(i => {
      return {
        ...i,
        image_url: `${config.base_image_url}/${i.md5_name}`
      }
    })

    const typeList = []
    data.forEach(i => {
      if (!typeList.find(ii => ii === i.type_name)) {
        typeList.push(i.type_name)
      }
    })

    return typeList.map(i => {
      const item = data.filter(ii => ii.type_name === i)
      return {
        typeName: i,
        item
      }
    })
  }

  async getFruitDetail(params) {
    let { data = [] } = await this.request({
      url: '/getFruitDetail',
      method: 'POST',
      data: params
    })

    data = data.map(i => {
      return {
        ...i,
        image_url: `${config.base_image_url}/${i.md5_name}`
      }
    })
    return data
  }
}

module.exports =  RecommendModal