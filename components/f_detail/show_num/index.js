// components/f_detail/show_num/index.js
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
    num: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    delNum() {
      let {num} = this.data
      this.setData({
        num: num - 1 <= 1 ? 1 : num - 1
      })
    },
    addNum() {
      let { num } = this.data
      this.setData({
        num: ++num
      })
    },
    getNum() {
      let { num } = this.data
      this.triggerEvent('fruitNumEvent', { num })
    },
    closeShow(e) {
      const { self } = e.target.dataset
      self === "_self" && this.triggerEvent('closePopEvent')
    }
  }
})
