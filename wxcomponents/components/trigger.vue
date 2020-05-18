<template>
<uni-shadow-root class="components-trigger"><template name="trigger">
  <view id="trigger" v-if="trigger.show" :animation="animationData" @transitionend="handleTransitionend" @touchstart="handleTouchstart" @touchmove="handleTouchmove" :style="'right:'+(trigger.style.right)+';top:'+(trigger.style.top)+';'" :class="'trigger '+(trigger.class)">
    <view @click="navigateToWeb">
      <image class="img" mode="widthFix" :src="trigger.imageUrl" alt></image>
    </view>
    <icon @click="handleTouchTap" type="clear" :size="trigger.iconSize" color="#000" class="ma-close"></icon>
  </view>
</template>

<template :is="componentName" :data="trigger,animationData"></template></uni-shadow-root>
</template>

<script>

global['__wxVueOptions'] = {components:{}}

global['__wxRoute'] = 'components/trigger'
// const masdk = require('shushangyun-masdk');
// const masdk = require('../index')
const masdk = getApp().globalData.masdk;
// const masdk = this.$store.state.mask
// console.log(masdk)
Component({
  data: {
    componentName: 'trigger',
    screenHeight: 0, //window高
    screenWidth: 0,//window宽
    elemWith: 0,//元素宽
    elemHeight: 0,//元素高
    animationData: {},//动画存储
    trigger: {
      isSmall: null,
      webviewUrl: '',
      style: {},
      triggerClass: '',
      show: true//是否显示
    }
  },
  properties: {
    type: {
      type: String,
      value: '',
      observer: function (newVal, oldVal, changedPath) {
        this.setData({
          componentName: newVal
        })
        // console.log(newVal)
      }
    },
    param: {
      type: Object,
      value: {},
      // 监听
      observer: function (newVal, oldVal, changedPath) {
        let name = this.data.componentName;
        if (!name) return;
        // console.log([this.data.componentName])
        var data = this.data[name]
        if (!newVal || JSON.stringify(newVal) === '{}') {
          data.show = false;
          this.setData({
            [name]: data,
            animationData: {}
          })
        } else {
          data.show = true;
          this.setData({
            [name]: data,
            animationData: {}
          })
        }
        if (!newVal.image) return;

        let webviewUrl = '/miniprogram_npm/shushangyun-masdk/pages/webview';
        if (masdk.config.webviewUrl) {
          webviewUrl = masdk.config.webviewUrl
        }
        webviewUrl += '?webview=' + encodeURI(escape(newVal.url));

        if (!newVal.image.size) {
          data.show = false;
          this.setData({
            [name]: data,
            animationData: {}
          });
          wx.navigateTo({
            url: webviewUrl
          });
          return;
        }
        var isSmall = newVal.image.size === 's';
        data = {
          isSmall,
          class: isSmall ? 'small-trigger' : 'large-trigger',
          style: {
            right: newVal.image.right + '%',
            top: newVal.image.top + '%'
          },
          webviewUrl: webviewUrl,
          iconSize: isSmall ? 16 : 24,
          show: true,
          imageUrl: newVal.image.src,
          drag: isSmall
        }
        this.setData({
          [name]: data,
          animationData: {}
        })
        if (newVal.image.stay > 0) {
          setTimeout(() => {
            this.handleTouchTap()
          }, newVal.image.stay * 1000)
        }
      }
    }

  },
  methods: {
    navigateToWeb(event) {
      if(this.data.param.url != ''){
        wx.navigateTo({
          url: this.data.trigger.webviewUrl
        });
        this.setData({
          trigger: {
            show: false
          }
        })
      }
    },
    // 手指触摸动作开始
    handleTouchstart(event) {
      var query = wx.createSelectorQuery().in(this),
        elem = query.select('#' + event.currentTarget.id);
      elem.boundingClientRect(rect => {
        this.setData({
          elemWith: rect.width,
          elemHeight: rect.height
        })
      }).exec();
    },
    // 手指触摸后移动
    handleTouchmove(event) {
      var data = this.data[this.data.componentName];
      data = JSON.parse(JSON.stringify(data));
      if (!data.drag) return;
      var touch = event.touches[0],
        elemWith = this.data.elemWith,//元素宽
        elemHeight = this.data.elemHeight,//元素高
        screenWidth = this.data.screenWidth,//window宽
        screenHeight = this.data.screenHeight,//window高
        pageX = touch.pageX + (elemWith / 2),
        pageY = touch.pageY - (elemHeight / 2),
        diffX = screenWidth - elemWith,//差值宽
        diffY = screenHeight - elemHeight,//差值高
        elementX = screenWidth - pageX,
        style = data.style;
      if (elementX < 0) {
        style.right = 0 + '%';
      } else if (elementX > diffX) {
        style.right = ((diffX / screenWidth) * 100) + '%'
      } else {
        var diffRight = screenWidth - pageX;//计算right的值
        style.right = ((diffRight / screenWidth) * 100) + '%';
      }
      if (pageY < 0) {
        style.top = 0 + '%';
      } else if (pageY > diffY) {
        style.top = ((diffY / screenHeight) * 100) + '%';
      } else {
        style.top = ((pageY / screenHeight) * 100) + '%';
      }
      this.setData({
        [this.data.componentName]: data
      })
    },
    handleTouchTap(event) {
      // 动画
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease-in',
        delay: 0
      });
      animation.opacity(0).step();
      this.setData({
        animationData: animation.export()
      })

    },
    //动画结束回调
    handleTransitionend(event) {
      if (!this.data.animationData.actions) return
      var data = this.data[this.data.componentName];
      var data = JSON.parse(JSON.stringify(this.data.trigger))
      data.show = false;
      this.setData({
        [this.data.componentName]: data
      })

    }
  },
  attached: function () {
    var _this = this;
    // 获取window的宽高
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          screenHeight: res.windowHeight,
          screenWidth: res.windowWidth
        });
      }
    });

  }
})
export default global['__wxComponents']['components/trigger']
</script>
<style platform="mp-weixin">
.ma-close{
    border: 0;
    padding: 0;
    position: absolute;
    top: 0;
    right: 0;
}
.trigger{
    position:fixed;
}
.trigger .img{
    width:100%;
    height:auto;
    vertical-align: middle;
}
.small-trigger{
    width:64px;
}
.small-trigger .ma-close{
    width:16px;
    height:16px;
    /* top:-8px;
    right:-8px; */
}
.large-trigger{
    width:80%;
    left:10%;
    top: 50% !important;
    transform: translate(0, -50%);
    /* pointer-events: none; */
}
.large-trigger .ma-close{
	width:24px;
    height:24px;
    /* top:-10px;
    right:-10px; */
}
/* .large-trigger .img{
    width:100%;
    height: auto;
    vertical-align: middle;
} */
button{
    margin:15rpx;
}
</style>