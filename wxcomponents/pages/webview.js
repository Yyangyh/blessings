Page({
    onLoad(options){
        var webview=options.webview;
        var url = decodeURIComponent(unescape(webview));
        this.setData({
            path: url
        })
    }
})