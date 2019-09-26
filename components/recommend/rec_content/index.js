// components/recommed/rec_content/index.js
let RecommendModel = require('../../../models/recommend.js')
const recModel = new RecommendModel()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    recList: [],
    cur: 0,
    itemArr: []
  },

  created: function() {
    wx.showLoading({
      title: '加载中...',
    })
    this.init()
  },

  ready: function() {
    const { cur } = this.data
    this.setData({
      itemArr: this.data.recList.length > 0 ? this.data.recList[cur].item : []
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

    init: async function () {
      const recList = await recModel.getRecommendList()

      this.setData({
        recList
      })

      wx.hideLoading()
    },

    changeItem: function(e) {
      const { curIndex } = e.currentTarget.dataset
      this.setData({ 
        cur: curIndex,
        itemArr: this.data.recList[curIndex].item
      })
    }
  }
})
