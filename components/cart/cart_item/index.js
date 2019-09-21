// components/cart/cart_item/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemObj: Object,
    itemIndex: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    startX: 0,
    startY: 0,
    isDel: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    delNum() {
      const { itemIndex } = this.data
      wx.getStorage({
        key: 'buyCartArr',
        success: (res) => {
          let { data } = res
          let count = data[itemIndex].count
          data[itemIndex].count = (count - 1) < 1 ? 0 : count - 1
          data = data.filter(i => i.count > 0)

          wx.setStorage({
            key: 'buyCartArr',
            data,
          })

          // 数据在storage中更新但是需要page中通知刷新
          this.triggerEvent('cartFreshEvent')
        },
      })
    },

    addNum() {
      const { itemIndex } = this.data
      wx.getStorage({
        key: 'buyCartArr',
        success: (res) => {
          const { data } = res
          let count = data[itemIndex].count
          data[itemIndex].count = count + 1

          wx.setStorage({
            key: 'buyCartArr',
            data,
          })

          // 数据在storage中更新但是需要page中通知刷新
          this.triggerEvent('cartFreshEvent')
        },
      })
    },

    changeState() {
      const { itemIndex } = this.data
      wx.getStorage({
        key: 'buyCartArr',
        success: (res) => {
          const {data} = res
          data[itemIndex].state = !data[itemIndex].state

          wx.setStorage({
            key: 'buyCartArr',
            data,
          })

          // 数据在storage中更新但是需要page中通知刷新
          this.triggerEvent('cartFreshEvent')
        },
      })
    },

    toFDetail() {
      const { itemIndex } = this.data
      wx.getStorage({
        key: 'buyCartArr',
        success: (res) => {
          const { data } = res
          
          wx.navigateTo({
            url: `/pages/f_detail/index?id=${data[itemIndex].id}`,
          })
        },
      })
    },

    touchS(e) {
      const startX = e.changedTouches[0].clientX
      const startY = e.changedTouches[0].clientY
      this.setData({
        startX,
        startY
      })
      // console.log(e)
    },

    touchE(e) {
      const { startX, startY } = this.data
      const endX = e.changedTouches[0].clientX
      const endY = e.changedTouches[0].clientY

      // 我这里只是计算endX 和 startX 的横向距离大于20
      const isDel = startX - endX > 50
      this.setData({
        isDel
      })
      // console.log(e)
    },

    del_item() {
      const { itemIndex } = this.data
      wx.getStorage({
        key: 'buyCartArr',
        success: (res) => {
          let { data } = res
          data = data.filter((i, index) => index !== itemIndex)

          wx.setStorage({
            key: 'buyCartArr',
            data,
            isDel: false
          })

          // 数据在storage中更新但是需要page中通知刷新
          this.triggerEvent('cartFreshEvent')
        },
      })
    }
  }
})
