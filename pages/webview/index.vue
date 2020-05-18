<template>
  <web-view :src="path"></web-view>
</template>

<script>
export default {
  data () {
    return {
      path: ''
    }
  },
  onLoad (options) {
    let webview = options.webview;
    console.log(webview);
    let url = decodeURIComponent(unescape(webview));
    this.path = url
  }
}
</script>

<style lang="scss" scoped>
</style>