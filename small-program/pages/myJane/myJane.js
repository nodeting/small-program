// pages/myJane/myJane.js
Page({

  /**
   * 页面的初始数据
   */
  jane(){
    wx.navigateTo({
      url:"../personage/personage"
    })
  },
  btn() {
    wx.redirectTo({
      url: '../entry/entry'
    })

  },
  bon() {
    wx.redirectTo({
      url: '../myJane/myJane'
    })
  },
  data: {
    w:"",
    h:"",
    oimg:[
      "../../image/wel3_06.jpg",
      "../../image/wel3_08.jpg",
      "../../image/wel3_10.jpg"
    ],
    otext:[
      "应聘记录", "我的收藏","切换账号"
    ]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success:function(res){
        let width=res.windowWidth;
        let height = res.windowHeight;
        that.setData({
          w:width,
          h:height
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