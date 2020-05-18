<template>
<uni-shadow-root class="pages-webview"><web-view :src="path"></web-view></uni-shadow-root>
</template>

<script>

global['__wxRoute'] = 'pages/webview'
Page({
    onLoad(options){
        var webview=options.webview;
        var url = decodeURIComponent(unescape(webview));
        this.setData({
            path: url
        })
    }
})
export default global['__wxComponents']['pages/webview']
</script>
<style platform="mp-weixin">
/* pages/webview/webview.css */
</style>