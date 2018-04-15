// pages/enterprise/enterprise.js
Page({
  nav() {
    wx.navigateTo({
      url: '../rpLogin/rpLogin'
    })
  },
  zhuce() {
    wx.navigateTo({
      url: '../rpRegistration/rpRegistration'
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    bgw:100,
    bgh:100
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let That = this;
    wx.getSystemInfo({
      success: function (res) {
        let width = res.screenWidth;
        let height = res.screenHeight;
        That.setData({
          bgw: width,
          bgh: height
        })
      }
    })
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