const CartModel = require('../../models/cart.js')
const cartModel = new CartModel

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartArr: [],
    allMoney: 0,
    allNum: 0,
    isAllSel: false,
    isClickSub: true,
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
        this.optionBadage(data)

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
          isAllSel: data.length > 0 && data.length === selProds.length,
          isClickSub: true
        })

        wx.hideLoading()
      },fail: () => {
        wx.hideLoading()
      }
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

  async subOrder() { 
    wx.showLoading({
      title: '提交订单中...',
    })
    const { cartArr, allMoney, isClickSub } = this.data
    const selArr = cartArr.filter(i => i.state === true)
    const remaine = cartArr.filter(i => i.state === false)
    if (!isClickSub) {
      wx.hideLoading()
      return
    }
    this.setData({
      isClickSub: false
    })
    if (selArr.length === 0) {
      wx.showToast({
        title: '请选择商品',
      })
      wx.hideLoading()
      return
    }
    const res = await cartModel.genOrder({ cartData: selArr, total_price: allMoney + '' })
   
    res && wx.setStorage({
      key: 'buyCartArr',
      data: remaine,
    })
    this.optionBadage(remaine)
    wx.showToast({
      title: '提交订单成功',
    })
    wx.hideLoading()
    this.setData({
      isClickSub: false
    })

    //todo 跳转支付页面
    console.log('跳转支付页面')
    wx.switchTab({
      url: '/pages/me/index',
    })

  },

  optionBadage(data) {
    if (data.length > 0) {
      wx.setTabBarBadge({
        index: 2,
        text: String(data.length),
      })
    } else {
      wx.removeTabBarBadge({
        index: 2,
      })
    }
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