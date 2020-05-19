<template>
<uni-shadow-root class="components-banner"><swiper v-if="banners.length > 1" :class="'masdk banner slider </slider> '+(positionKey)" :indicator-dots="options.indicatorDots" :indicator-color="options.indicatorColor" :indicator-active-color="options.indicatorActiveColor" :autoplay="options.autoplay" :current="options.current" :current-item-id="options.currentItemId" :interval="options.interval" :duration="options.duration" :circular="options.circular" :vertical="opeions.vertical" :previous-margin="options.previousMargin" :next-margin="options.nextMargin" :display-multiple-items="options.displayMultipleItems" :skip-hidden-item-layout="options.skipHiddenItemLayout" @change="bindchange" @transition="bindtransition" @animationfinish="bindanimationfinish">
  <block v-for="(item,index) in (banners)" :key="item">
    <swiper-item class="swiper_item" @click="navigateToWeb" :data-url="item.url">
      <image mode="widthFix" :src="item.image" class="slide-image"></image>
    </swiper-item>
  </block>
</swiper>

<image mode="widthFix" v-if="banners.length == 1" :class="'masdk banner image '+(positionKey)" :src="banners[0].image" @click="navigateToWeb" :data-url="banners[0].url"></image></uni-shadow-root>
</template>

<script>

global['__wxVueOptions'] = {components:{}}

global['__wxRoute'] = 'components/banner'
// const masdk = require('shushangyun-masdk');
// const masdk = require('../index')
const masdk = getApp().globalData.masdk;
// const masdk = this.$store.state.mask
// console.log(masdk)
Component({

  options: {
    addGlobalClass: true,
  },

  /**
   * 组件的属性列表
   */
  properties: {
    positionKey: String,
    conditions: Object,
    swiperOptions: Object,
    defaultImage: String
  },

  lifetimes: {
    attached: function () {
      let self = this;

      if (typeof(this.properties.swiperOptions) == "object") {
        let i = null;
        let options = this.data.options;
        for (i in this.properties.swiperOptions) {
          options[i] = this.properties.swiperOptions[i];
        }
        this.setData({
          options: options
        })
      }

      masdk.banner({
        positionKey: this.properties.positionKey,
        conditions: this.properties.conditions
      }).then(function (res) {
        self.triggerEvent('callback', res);
        if (res.code == 200) {
          self.setData({
            banners: res.data
          })
        }
      })
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    banners: [],
    options: {
      indicatorDots: true,
      indicatorColor: "rgba(0, 0, 0, .3)",
      indicatorActiveColor: "#000000",
      autoplay: true,
      current: 0,
      currentItemId: "",
      interval: 5000,
      duration: 500,
      circular: false,
      vertical: false,
      previousMargin: "0px",
      nextMargin: "0px",
      displayMultipleItems: 1,
      skipHiddenItemLayout: false,
      bindchange: null,
      bindtransition: null,
      bindanimationfinish: null,
      binditemtap: null
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindchange(event) {
      if (this.data.options.bindchange === null) return;
      if (typeof(this.data.options.bindchange) == 'function') {
        this.data.options.bindchange(event)
      } else {
        console.error("swiperOptions.bindchange is not a function")
      }
    },

    bindtransition(event) {
      if (this.data.options.bindtransition === null) return;
      if (typeof(this.data.options.bindtransition) == 'function') {
        this.data.options.bindtransition(event)
      } else {
        console.error("swiperOptions.bindtransition is not a function")
      }
    },

    bindanimationfinish(event) {
      if (this.data.options.bindanimationfinish === null) return;
      if (typeof(this.data.options.bindanimationfinish) == 'function') {
        this.data.options.bindanimationfinish(event)
      } else {
        console.error("swiperOptions.bindanimationfinish is not a function")
      }
    },

    navigateToWeb(event) {
      if (this.data.options.binditemtap === null) {
        if (!event.currentTarget.dataset.url || event.currentTarget.dataset.url == '') {
          return;
        }
        let webviewUrl = '/miniprogram_npm/shushangyun-masdk/pages/webview';
        if (masdk.config.webviewUrl) {
          webviewUrl = masdk.config.webviewUrl
        }
        webviewUrl += '?webview=' + encodeURI(escape(event.currentTarget.dataset.url));
        wx.navigateTo({
          url: webviewUrl
        });
      } else {
        if (typeof (this.data.options.binditemtap) == 'function') {
          this.data.options.binditemtap(event)
        } else {
          console.error("swiperOptions.binditemtap is not a function")
        }
      }
    },
  }
})
export default global['__wxComponents']['components/banner']
</script>
<style platform="mp-weixin">
.swiper_item{
	height: 100%;
	width: 100%;
}
.slide-image{
  width: 100%
}
</style>