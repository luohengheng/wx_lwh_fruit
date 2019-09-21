// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartArr: [],
    allMoney: 0,
    allNum: 0,
    isAllSel: false
  },

  initData() {
    wx.showLoading({
      title: '加载中...',
    })

    wx.getStorage({
      key: 'buyCartArr',
      success: (res) => {
        const { data } = res
        //设置购物车图标数量
        wx.setTabBarBadge({
          index: 2,
          text: String(data.length),
        })

        //计算勾选产品总价
        const selProds = data.filter(i => i.state === true)
        let allMoney = 0
        selProds.forEach(i => {
          allMoney += i.cur_price * i.count
        })

        this.setData({
          cartArr: data,
          allMoney,
          allNum: selProds.length,
          isAllSel: data.length === selProds.length
        })

        wx.hideLoading()
      },
    })
  },

  allSel() {
    const { isAllSel } = this.data
    wx.getStorage({
      key: 'buyCartArr',
      success: (res) => {
        let { data } = res
        data = data.map(i => {
          return {
            ...i,
            state: !isAllSel
          }
        })

        //计算勾选产品总价
        const selProds = data.filter(i => i.state === true)
        let allMoney = 0
        selProds.forEach(i => {
          allMoney += i.cur_price * i.count
        })

        wx.setStorage({
          key: 'buyCartArr',
          data,
        })

        this.setData({
          isAllSel: !isAllSel,
          cartArr: data,
          allMoney
        })
      },
    })
  },

  subOrder() {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {  
    this.initData()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})