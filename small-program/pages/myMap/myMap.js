// pages/myMap/myMap.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    list: ["a", "澳门", "b", "北京", "c", "沧州", "沧海", "d", "德国", "德州", "f", "房山", "法国", "g", "广州", "h", "河北", "海南", "菏泽", "j", "锦州", "吉林", "k", "空桑山", "l", "辽宁", "m", "蒙古", "n", "内蒙古", "p", "盘锦", "q", "齐齐哈尔", "r", "日本", "s", "苏州", "t", "吐鲁番", "w","乌兰察布"],
    toView: "",  
  },
  et(){
    var _thsh = this
  wx.getLocation({
    
    type: 'gcj02', 
    success: function (res) {
      var latitude = res.latitude
      var longitude = res.longitude
      wx.chooseLocation({
        latitude: latitude,
        longitude: longitude,
        scale: 28,
        success: function(res){
          _thsh.setData({
            name:res.name
          })
        }
       
      })
    }
  })
  },
  jumpTo: function (e) {

    // 获取标签元素上自定义的 data-opt 属性的值

    let target = e.currentTarget.dataset.opt;

    this.setData({

      toView: target

    })

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