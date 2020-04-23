<template>
	<view class="content">
		<view class="status_bar">
						
		</view >
		<returns :titles='title'></returns>	
		<!-- <view class="line" @tap="$jump('./cellPhone')">
			<view class="l_left">
				<image src='/static/image/subuser/binding.png' mode="widthFix"></image>
				<text>绑定手机号码</text>
			</view>
			<image class="l_right" src='/static/image/index/go.png' mode="widthFix"></image>
		</view>
		<hr /> -->
		<view class="line" @tap="$jump('./cellPhone')" v-if="user.referrer == false">
			<view class="l_left">
				<image src='/static/image/subuser/set-1.png' mode="widthFix"></image>
				<text>修改手机号码</text>
			</view>
			<image class="l_right" src='/static/image/index/go.png' mode="widthFix"></image>
		</view>
		<view class="line" @tap="$jump('./password')">
			<view class="l_left">
				<image src='/static/image/subuser/set-2.png' mode="widthFix"></image>
				<text>修改密码</text>
			</view>
			<image class="l_right" src='/static/image/index/go.png' mode="widthFix"></image>
		</view>
		<!-- <hr />
		<view class="line">
			<view class="l_left">
				<image src='/static/image/subuser/set-3.png' mode="widthFix"></image>
				<text>二级密码</text>
			</view>
			<image class="l_right" src='/static/image/index/go.png' mode="widthFix"></image>
		</view>
		<hr />
		<view class="line">
			<view class="l_left">
				<image src='/static/image/subuser/set-4.png' mode="widthFix"></image>
				<text>重置二级密码</text>
			</view>
			<image class="l_right" src='/static/image/index/go.png' mode="widthFix"></image>
		</view> -->
		<view class="line" @tap="$jump('./binding')">
			<view class="l_left">
				<image src='/static/image/subuser/bindingSuper.png' mode="widthFix"></image>
				<text>添加邀请码</text>
			</view>
			<image class="l_right" src='/static/image/index/go.png' mode="widthFix"></image>
		</view> 
		<!-- #ifdef APP-PLUS -->
		<view class="line">
			<view class="l_left">
				<image src='/static/image/subuser/set-5.png' mode="widthFix"></image>
				<text>版本{{edition}}</text>
			</view>
			<image class="l_right" src='/static/image/index/go.png' mode="widthFix"></image>
		</view>
		<!-- #endif -->
		<button @tap="signout">退出登录</button>
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	import { mapState } from 'vuex'
	export default{
		components:{
			returns
		},
		
		computed:{
			edition(){
				// #ifdef APP-PLUS
				return 'plus.runtime.version'
				// #endif
			},
			...mapState({
				user:'user'
			})
		},
		data(){
			return{
				title:'设置',
			}
		},
		methods:{
			signout(){
				uni.clearStorage();
				uni.reLaunch({
					url:'../../login/login'
				})
			}
		}
	}
</script>

<style lang="scss">
	hr{
		height:1rpx;
		border: none;
		
		width: 96%;
		margin: 0 auto;
	}
	.line{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 30rpx 20rpx;
		border-bottom:1px solid #F4F4F4;
		.l_left{
			display: flex;
			align-items: center;
			image{
				width: 34rpx;
				height: 34rpx;
				margin-right: 10rpx;
			}
			text{
				font-size: 24rpx;
			}
		}
		.l_right{
			width: 18rpx;
			height: 22rpx;
		}
	}
	button{
		width:680rpx;
		height:80rpx;
		background:rgba(216,0,0,1);
		border-radius:40rpx;
		font-size: 32rpx;
		line-height: 80rpx;
		color:#FFFFFF;
		text-align: center;
		margin: 50rpx auto 0;
	}
</style>
