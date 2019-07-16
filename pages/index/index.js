Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      // 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      // 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      // 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    entry: [],
    floor: [],
    showTop: false,
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperData()
    this.getEntryData()
    this.getFloorData()
  },
  // 轮播图数据
  getSwiperData() {
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      success: res => {
        console.log(res.data)
        const { message } = res.data
        this.setData({
          imgUrls: message
        })
      }
    })
  },
  // 分类数据
  getEntryData() {
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/catitems',
      success: res => {
        console.log(res.data)
        const { message } = res.data
        this.setData({
          entry: message
        })
      }
    })
  },
  // 楼层数据
  getFloorData() {
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/floordata',
      success: res => {
        console.log(res.data)
        const { message } = res.data
        this.setData({
          floor: message
        })
      }
    })
  },

  // 返回顶部
  goTop(event) {
    console.log("xxx", event)
    const { top } = event.currentTarget.dataset
    wx.pageScrollTo({
      scrollTop: top,
      duration: 300
    })
  },
  onPageScroll(event) {
    console.log(event)
    const { scrollTop } = event;
    if (scrollTop > 200) {
      this.setData({
        showTop: true
      })
    } else {
      this.setData({
        showTop: false
      })
    }
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