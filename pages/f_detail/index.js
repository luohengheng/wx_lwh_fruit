// pages/fDetail/index.js
const RecommendModel = require('../../models/recommend.js')
const recModel = new RecommendModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    fDetail: {},
    isShow: false,
    num: 1,
    buyCount: 0
  },

  init: async function (params) {
    const recList = await recModel.getFruitDetail(params)

    if (recList.length > 0) {
      wx.setNavigationBarTitle({
        title: recList[0].name,
      })
      this.setData({
        fDetail: recList[0]
      })
    }
    wx.hideLoading()
  },

  popBottomShow() {
    this.setData({
      isShow: true
    })
  },

  closePop() {
    this.setData({
      isShow: false
    })
  },

  getFruitNum(e) {
    const {num} = e.detail
    console.log(num)
    this.setData({
      isShow: false,
      num
    })
  },

  /**
   * 将产品加入到购物车中
   */
  addBuy() {
    const { fDetail, num, buyCount } = this.data
    const emptyArr = []
    wx.getStorage({
      key: 'buyCartArr',
      success:(res) => {
        const { data } = res
        console.log(res)
        const fIndex = data.findIndex(i => i.id === fDetail.id)
        if (fIndex !== -1) {
          //todo storage中存在该商品
          //todo 这里其实有个坑，如果该水果当前价格变动，不单单只是修改数量，同时商品的其他信息都需要改动
          data[fIndex] = { ...data[fIndex], count: data[fIndex].count + num }
        } else {
          //todo storage中不存在该商品
          data.push({ ...fDetail, count: num, state: false })
          this.setData({ buyCount: buyCount + 1 })
        }

        wx.setStorage({
          key: 'buyCartArr',
          data,
        })

      },
      fail:() => {
        emptyArr.push({ ...fDetail, count: num, state: false})
        wx.setStorage({
          key: 'buyCartArr',
          data: emptyArr,
        })
        this.setData({ buyCount: buyCount + 1 })
      }
    })
  },

  toBuy() {
    wx.switchTab({
      url: '/pages/cart/index',
    })
  },

  initNum() {
    const { buyCount } = this.data
    wx.getStorage({
      key: 'buyCartArr',
      success: (res) => {
        const { data } = res
        this.setData({
          buyCount: data.length
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
    })
    this.setData({
      fid: options.id
    })

    this.init({ id: options.id})
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
    this.initNum()
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