Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bannerItem: Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    navgToDetail: function(e) {
      const { fid } = e.currentTarget.dataset

      wx.navigateTo({
        url: `/pages/f_detail/index?id=${fid}`,
      })
    }
  }
})
