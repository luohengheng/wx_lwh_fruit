
// components/home/home_message/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    msg: String
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
    msgInfo: _ => {
      wx.showToast({
        title: '通知详情暂未开发',
        icon: 'none',
        duration: 1000
      })

    }
  }
})
