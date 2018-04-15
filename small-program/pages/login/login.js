// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  // btnclick(){
  //   wx.reLaunch({
  //     url: '../myWork/myWork'
  //   })
  //   console.log(111)
  // },
  dian(){
    this.setData({
      str:Math.floor(Math.random()*(9999-1000)+1000)
    })
  },
  data: {
    bgw: 100,
    bgh: 100,
    mobile: '',
    str:'',
    avatarUrl:'',
    nickName:''
  },
  mobileInput: function (e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  btnclick: function () {
   
    var mobile = this.data.mobile;
    var phonetel = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
   if (mobile == '') {
      wx.showToast({
        title: '手机号不能为空',
      })

      return false
    }
    else if (mobile.length != 11) {
      wx.showToast({
        title: '手机号长度有误！',
        icon: 'success',
        duration: 1500
      })
      return false; 
    }
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (!myreg.test(mobile)) {
      wx.showToast({
        title: '手机号有误！',
        icon: 'success',
        duration: 1500
      })
      return false;
    }
    else{
      wx.reLaunch({
        url: '../myWork/myWork'
      })
    }
    return true;
   
  }, 
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    let That = this;
    
    wx.getUserInfo({
      success:function(res){
        let nickName= res.userInfo.nickName
        let avatarUrl = res.userInfo.avatarUrl
        console.log(nickName)
        That.setData({
          name: nickName,
          url: avatarUrl
        })
      }
    })

    wx.getSystemInfo({
      success: function (res) {
        let width = res.windowWidth;
        let height = res.windowHeight;
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