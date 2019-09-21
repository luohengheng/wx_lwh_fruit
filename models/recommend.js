const HTTP = require('../util/http.js')
const config = require('../config.js')

class RecommendModal extends HTTP{

  async getRecommendList() {
    const { data = [] } = await this.request({
      url: '/getRecommedList',
      method: 'POST',
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
    const { data = [] } = await this.request({
      url: '/getFruitDetail',
      method: 'POST',
      data: params
    })

    return data
  }
}

module.exports =  RecommendModal