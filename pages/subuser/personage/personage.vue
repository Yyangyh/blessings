<template>
	<view class="content">
		<view class="status_bar">
							
		</view >
		<!-- <view class="top"@tap="service.returns()">
			<view class="image">
				<image src="/static/image/com_page/returns.png" mode="widthFix"></image>
			</view>
			<text>个人资料</text>
		</view>	 -->
		<returns :titles='title'></returns>
		<view class="box_top"  :style="{backgroundImage: 'url('+back+')',backgroundSize: '100% 100%'}" >
			<view class="photo_box">
				<image class="photo" :src="$api_img()+user.avatar" mode="scaleToFill"></image>
			</view>
			<view @click="reveal">修改头像</view>
		</view>
		<view class="per_box">
			
			<view class="bank"> 
				<view class="line" @tap="$jump('./alter')">
					<view class="l_felt">
						<image src="/static/image/subuser/nicheng.png" mode="widthFix"></image>
						<text>昵称</text>
					</view>
					<view class="l_right">
						<text>{{user.nickname?user.nickname:'暂无'}}</text>
						<image src='/static/image/index/go.png' mode="widthFix"></image>
					</view>
				</view>
				<hr />
				<view class="line">
					<view class="l_felt">
						<image src="/static/image/subuser/dengji.png" mode="widthFix"></image>
						<text>会员等级</text>
					</view>
					<view class="l_right">
						<text>{{user.level_name}}</text>
						<image src='/static/image/index/go.png' mode="widthFix"></image>
					</view>
				</view>
				<hr />
				<view class="line">
					<view class="l_felt">
						<image src="/static/image/subuser/phone.png" mode="widthFix"></image>
						<text>手机号码</text>
					</view>
					<view class="l_right">
						<text>{{user.mobile}}</text>
						<image src='/static/image/index/go.png' mode="widthFix"></image>
					</view>
				</view>
				<hr />
				<!-- <button>确认</button>
				<hr /> -->
			</view>
		</view>
		
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	import Back from '../../../static/image/subuser/back.png'
	import returns from '../../common/returns.vue'
		export default{
			components:{
				returns
			},
			data(){
				return{
					back:Back,
					title:'个人资料',
				}
			},
			computed: {
			  // localComputed () { /* ... */ },
			  // 使用对象展开运算符将此对象混入到外部对象中
			  ...mapState({
				  user:'user'
			  }),
			
			},	
			methods:{
				reveal(){
					let that = this
					uni.chooseImage({
					    success: (chooseImageRes) => {
					        const tempFilePaths = chooseImageRes.tempFilePaths;
							let times = that.service.loading('上传中')
					        uni.uploadFile({
					            url: this.APIconfig.api_root.subuser.s_member, 
					            filePath: tempFilePaths[0],
					            name: 'file',
					            formData: {
					                type:2,
									user_id:that.$store.state.user.id
					            },
					            success: (res) => {
									uni.hideLoading()
					                clearTimeout(times)
									let data =JSON.parse(res.data)
									if(data.code == 0){
										let user_data = {
											avatar:data.data.userinfo.avatar
										}
										that.$store.commit('set_user',user_data)
									}
					            }
					        });
					    }
					});
				}
			}
		}
	</script>
</script>

<style lang="scss">
	.content{
		.box_top{
			height: 304rpx;
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			color: #fff;
			.photo_box{
				width: 120rpx;
				height: 120rpx;
				display: block;
				margin: 0 auto ;
				border-radius: 50%;
				overflow: hidden;
				.photo{
					height: 100%;
					width: 100%;
				}
			}
			view{
				font-size: 24rpx;
				text-align: center;
				margin-top: 5rpx;
			}
		}
		.per_box{
			width:750rpx;
			height:960rpx;
			background:rgba(255,255,255,1);
			border-radius:20rpx 20rpx 0rpx 0rpx;
			margin-top: -20rpx;
			margin-top: 30rpx;
			position: relative;
			top: -70rpx;
			left: 0;
			z-index: 999;
			// z-index: 100;
			// position: absolute;
			// top: calc(var(--status-bar-height) + 194rpx);
			// left:0;
			
			.bank{
				
				button{
					width:684rpx;
					height:80rpx;
					background:rgba(216,0,0,1);
					border-radius:40rpx;
					color:#FFFFFF;
					text-align: center;
					line-height: 80rpx;
					margin: 70rpx auto;
				}
				hr{
					height:1rpx;
					border: none;
					border-top:1px solid #F4F4F4;
					width: 96%;
					margin: 0 auto;
				}
				.line{
					display: flex;
					align-content:center ;
					padding: 30rpx 30rpx 30rpx 21rpx; 
					justify-content: space-between;
					.l_felt{
						display: flex;
						align-items: center;
						image{
							width: 34rpx;
							height: 34rpx;
							margin-right: 20rpx;
						}
						text{
							font-size: 24rpx;
							color:#323232;
						}
					}
					.l_right{
						display: flex;
						align-items: center;
						text{
							font-size: 24rpx;
							color:#666666;
							margin-right: 15rpx;
						}
						image{
							width: 12rpx;
							height: 22rpx;
						}
					}
				}
			}
		}
		.bk{
			width:100%;
			position: fixed;
			left: 50%;
			transform: translateX(-50%);
			bottom:70rpx;
			z-index: 900;
			text-align: center;
			view{
				width: 710rpx;
				height: 100rpx;
				background: #FFFFFF;
				font-size: 32rpx;
				color: #32A6FF;
				text-align: center;
				line-height: 100rpx;
				margin: 0 auto;
			}
		}
	}
	
	
</style>
