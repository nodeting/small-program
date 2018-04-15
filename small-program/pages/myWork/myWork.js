// pages/myWork/myWork.js
Page({
fn() {
  
  },
  fnt() {
    wx.navigateTo({
      url:'../myMap/myMap'
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
  xiang(){
    wx.navigateTo({
      url: '../workDetails/workDetails'
    })
    

  },
  /**
   * 页面的初始数据
   */
  data: {
      rp:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let This=this
    wx.request({
      url: 'https://ehcto.com/api/company.json',
      success: function (data) {
       
        let rp = data.data;
        console.log(data);
        This.setData({
          rp: rp 
        })
        
      },


      // fail: function (res) {
      //   console.log('submit fail');
      // },
      // complete: function (res) {
      //   console.log('submit complete');
      // }

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