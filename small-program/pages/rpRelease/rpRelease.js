// pages/publish/publish.js
var QQMapWX = require('../../qqmap-wx-jssdk.js');
// var date = require('../../index.js');
var qqmapsdk;
Page({

  data: {
    arr_one:[
      {
        title:'全职',
        url: "https://ehcto.com/image/welbj_05.jpg",
        bool:true
      },
      {
        title: '兼职',
        url: "https://ehcto.com/image/welbj_05.jpg",
        bool: true
      },
      {
        title: '实习',
        url: "https://ehcto.com/image/welbj_05.jpg",
        bool: true
      },
      {
        title: '校园',
        url: "https://ehcto.com/image/welbj_05.jpg",
        bool: true
      }
    ],
    selectarr:[
      {
        selectData: ['学历不限', '高中', '大专', '本科', '本科以上'],
        index: 0,
        show: false,
      },
      {
        selectData: ["经验不限", "1年", "2年", "3年", "3年以上"],
        index: 1,
        show: false,
      },
      {
        selectData: ["请选择给薪区间","6000-8000", "8000-13000", "13000-18000", "18000-25000"],
        index: 3,
        show: false,
      }
    ],
    mapText:""
   
   
  },
  selectTap(e) {
    var selectarr = this.data.selectarr
    if (e.currentTarget.id==0){
      
      selectarr[e.currentTarget.id].show = !selectarr[e.currentTarget.id].show
    }else{
      selectarr[e.currentTarget.id].show = selectarr[e.currentTarget.id].show
    }
    if (e.currentTarget.id == 1) {
      selectarr[e.currentTarget.id].show = !selectarr[e.currentTarget.id].show
    } else {
      selectarr[e.currentTarget.id].show = selectarr[e.currentTarget.id].show
    }
    if (e.currentTarget.id == 2) {
      selectarr[e.currentTarget.id].show = !selectarr[e.currentTarget.id].show
    } else {
      selectarr[e.currentTarget.id].show = selectarr[e.currentTarget.id].show
    }

    this.setData({
      selectarr: selectarr
    });

  },
  bgcolor:function(e){
     var that = this;
    var arr_one = this.data.arr_one;
   
    for (var i = 0; i < arr_one.length;i++){   
       arr_one[i].url = "https://ehcto.com/image/welbj_05.jpg";    
    } 

    if(e.currentTarget.dataset.text.bool){   
      arr_one[e.currentTarget.id].url = "https://ehcto.com/image/welbj_03.jpg"    
    }else{
      arr_one[e.currentTarget.id].bool = !e.currentTarget.dataset.text.bool
    }

    that.setData({
      arr_one: arr_one
    })

  },
  bindTimeChange: function (e) {
    console.log("谁哦按")
    this.setData({
      times: e.detail.value
    })
  },
  //  点击日期组件确定事件  
  bindDateChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      dates: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    qqmapsdk = new QQMapWX({
      key: '5DSBZ-3PKW6-UVMS7-EPYEK-TCAYJ-KVBW6'
    });

    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        //2、根据坐标获取当前位置名称，显示在顶部:腾讯地图逆地址解析
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function (addressRes) {
            var address = addressRes.result.formatted_addresses.recommend;
            that.setData({
              mapText: address
            })
          }
        })
      }
    })

    // date.showInfo()
   
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