// components/f_detail/add_num/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num: String
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
    showNums() {
      this.triggerEvent('showNums')
    }
  }
})
