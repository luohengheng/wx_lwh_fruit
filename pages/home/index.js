// import { HomeModel } from '../../models/home.js'
let HomeModel = require('../../models/home.js')
const homeModel = new HomeModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    msgInfo: '',
    swiperArr: [],
    bannerArr: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    wx.showLoading({
      title: '加载中...',
    })
    this.init()
  },

  init: async function () {
      const msgArr = await homeModel.getHomeMsg()
      const swiperArr = await homeModel.getHomeSwipe()
      const bannerArr = await homeModel.getHomeBanner()

      let msgStr = ''
      msgArr.forEach((item, index) => {
          msgStr += `通知 : ${item.message} `
      })

      this.setData({
          msgInfo: msgStr,
          swiperArr,
          bannerArr
      })

      wx.hideLoading()
      wx.hideNavigationBarLoading()
      // 隐藏下拉加载状态
      wx.stopPullDownRefresh()
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
    wx.showNavigationBarLoading()
    this.init()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // wx.stopPullDownRefresh()
    // wx.showNavigationBarLoading()

    // const { bannerArr } = this.data
    // const newBannerArr = await homeModel.getHomeBanner()
    // this.setData({
    //   bannerArr: [...bannerArr, ...newBannerArr]
    // })

    // wx.hideNavigationBarLoading()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})