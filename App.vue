<script>
	export default {
		
		onLaunch: function() {
			
			console.log('App Launch')
			
			
			// #ifdef H5
			// if(!uni.getStorageSync('state_token')){  //未登陆时跳转登陆页面
			// if(uni.getStorageSync('state_token')){
			// 	let url = 'pages/login/reg?code='+JSON.parse()
			// }
				// uni.reLaunch({
				//     url: 'pages/login/reg?code='+JSON.parse()
				// });
				// return false
			// }
			// #endif
			
			
			console.log('App Show')
			
			// #ifdef H5
				//在页面加载时读取sessionStorage里的状态信息
				if (uni.getStorageSync("store")) {  //防止用户刷新页面导致vuex数据丢失
					// console.log(this.$store.state)
					this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(uni.getStorageSync("store"))))
					// console.log(this.$store.state)
				}
				
				//在页面刷新时将vuex里的信息保存到sessionStorage里
				window.addEventListener("beforeunload",()=>{
					uni.setStorageSync("store",JSON.stringify(this.$store.state))
				})
			// #endif
			
			
			if(uni.getStorageSync('state_token')){
				this.$store.commit('state_user',uni.getStorageSync('state_user'))
				this.$store.commit('state_token',uni.getStorageSync('state_token'))
			}
			
			
		},
		onShow: function() {
			
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	page {
		/* height: 100%;
		width: 100%; */
		padding-top: var(--status-bar-height);
		background: #fff;
	}
	
	.content {
		padding-top: 105rpx;
	}
	
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		top: 0;
		left: 0;
		z-index: 998;
		background: #fff;
		position: fixed;
	}
	.red_button{
		font-size: 32rpx;
		background: #D80000;
		color: #FFFFFF;
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 40rpx;
	}
	.mask_black {
		position: fixed;
		height: 100%;
		width: 100%;
		background: rgba(0, 0, 0, 1);
		opacity: 0.5;
		top: 0;
		left: 0;
		z-index: 888;
	}
	.QRcode{
		position: fixed;
		right: 30rpx;
		bottom: 135rpx;
		image{
			width: 60rpx;
			height: 60rpx;
		}
	}
</style>
