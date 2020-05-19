<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<share ref="share" :datas='share_arr'></share>
		<view class="worp" >
			<image :src="$api_img()+dataList.cover" mode="widthFix"></image>
			<view class="theme">{{dataList.title}}</view>
			<view class="line">
			  <image src="../../static/image/index/apply.png" mode="widthFix"></image>
			  <text>已报名{{dataList.sign_number}}人</text>
			  <text>限{{dataList.limit}}人报名</text>
			 </view>
			 <view class="price">￥{{dataList.price}}/{{dataList.integral}}积分</view>
			<view class="countdown">
				 <text>剩余</text>
				 <view>{{day}}</view>
				 <text>天</text>
				 <view>{{hr}}</view>
				 <text>时</text>
				 <view>{{min}}</view>
				 <text>分</text>
				 <view>{{sec}}</view>
				 <text>秒</text>
			 </view>
		</view>
		<view class="worp">
			<view class="line">
			  <image src="../../static/image/index/time.png" mode="widthFix"></image>
			  <text class="theme1">{{dataList.start_time_text}} </text>
			  <text  class="theme1">{{dataList.week}}</text>
			  <!-- <text>星期三</text> -->
			  <!-- <text>17:00-19:00</text> -->
			</view>
			<hr />
			<view class="line">
				<image src='../../static/image/index/site.png' mode="widthFix"></image>
				<text class="theme1">{{dataList.address}}</text>
			</view>
			<hr />
			<view class="line">
				<image src='../../static/image/index/zhubanfang.png' mode="widthFix"></image>
				<text class="theme1">主办方：{{dataList.organizer}}</text>
			</view>
		</view>
		<view class="worp" v-if="sign_user.length">
			<view class="top">
				<text>已报名</text>
				<text @tap="$jump('./registered?id='+id)">查看更多</text>
			</view>
			<view class="personnel-list">
				<view class="list" v-for="(item,index) in sign_user" :key='index'>
					<view class="l_img">
						<image :src='$api_img()+item.avatar' mode="scaleToFill"></image>
					</view>
					<view>{{item.nickname?item.nickname:'暂无'}}</view>
				</view>
			</view>
		</view>
		<view class="p-t">活动详情</view>
		<image class="image" v-for="(item,index) in detail_img" :src='$api_img()+item.images' mode="widthFix"></image>
		
		<!-- #ifdef APP-PLUS -->
		<view class="underway" v-if="ends == true">
			<button type="default" @tap="confirm(id,dataList.limit,dataList.sign_number)">立即报名</button>
			<button type="default" @tap="tips">邀请好友</button>
		</view>
		<view class="finish" v-else>
			<button>活动已结束</button>
		</view>
		<!-- #endif -->
		
		<!-- #ifdef H5 -->
		
		<view class="download" @tap="$jump('../login/reg?code='+code)">
			下载APP观看精彩内容
		</view>
		
		<!-- #endif -->
		
		<load v-if="load_show"></load>
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	import load from '../common/load.vue'
	import share from'../common/share.vue'
	export default{
		components:{
			returns,
			load,
			share
		},
		data(){
			return{
				title:'活动详情',
				dataList:'',
				sign_user: '',
				ends:true,
				day: '',
				hr: '',
				min: '',
				sec:'',
				timer:'',
				load_show:true,
				detail_img:'',
				share_arr:{},
			}
		},
		methods:{
			tips(){ //分享
				// #ifdef H5
				uni.showModal({
				    title: '提示',
				    content: '请点击右上角选择分享！',
					showCancel:false,
				    success: function (res) {
				       
				    }
				});
				// #endif
				// #ifdef APP-PLUS
				if(this.$store.state.user.invite_code == undefined){  //判断是否有邀请码
					this.service.entire(this,'post',this.APIconfig.api_root.index.u_token,{
						id:this.$store.state.user.id
					},function(self,res){
						if(res.code == 0){
							self.$store.commit('state_user',res.data.user_info)
							self.$store.commit('state_token',res.data.token)
							uni.setStorageSync('state_user',res.data.user_info)
							uni.setStorageSync('state_token',res.data.token)
							self.$refs.share.share()
						}
					})
				}else{
					this.$refs.share.share()
				}
				// #endif
			},
			
		   countdown: function (msec) {
			  if(msec < 0){
				  msec = 0
				  this.ends = false
				  clearInterval(this.timer)
			  }
			  
			  let day = parseInt(msec  / 60 / 60 / 24)
			  let hr = parseInt(msec  / 60 / 60 % 24)
			  let min = parseInt(msec  / 60 % 60)
			  let sec = parseInt(msec  % 60)
			  this.day = day
			  this.hr = hr > 9 ? hr : '0' + hr
			  this.min = min > 9 ? min : '0' + min
			  this.sec = sec > 9 ? sec : '0' + sec
			  if(this.load_show == true)this.load_show = false
			},
			confirm(id,limit,number){
				if(limit > number){
					this.$jump('./apply?id='+id)
				}else{
					uni.showToast({
						icon:'none',
						title:'报名人数已达上限！'
					})
				}
			}
		},
		onHide() {
			
			clearInterval(this.timer)
		},
		onUnload(){
			clearInterval(this.timer)
		},
		onShow() {
			this.service.entire(this,'post',this.APIconfig.api_root.subindex.a_activity_detail,{
				id:this.id
			},function(self,res){
				
				self.share_arr.Title =  res.data.title//分享
				self.share_arr.Summary =  res.data.desc//分享
				self.share_arr.ImageUrl = self.$api_img() + res.data.cover//分享
				
				self.dataList = res.data.data
				self.sign_user = res.data.data.sign_user
				if(self.sign_user.length > 5) self.sign_user.length = 5
				let img = res.data.data.detail
				img = Object.values(img)
				self.detail_img = img
				let msec = (self.dataList.end_time - Date.parse(new Date())/1000)
				self.timer = setInterval(function(){
					msec -- 
					self.countdown(msec)
				},1000)
			})
		},
		onLoad(e) {
			this.id = e.id
			this.share_arr.Url = 'https://www.wufu-app.com/h5/#/pages/activity/particulars?id=' + e.id
		},
	}
</script>

<style lang='scss'>
	/* .content{
		height: 100%vh;
		width: 100%; */
	page{
		background-color: #F2F2F2;
	}
	.content{
		padding-bottom: 140rpx;
	}
		.worp{
			width: 100%;
			background-color: #FFFFFF;
			padding-top: 0 !important;
			margin:0 0 30rpx 0 ;
			hr{
				height:1rpx;
				border: none;
				border-top:1px solid #F4F4F4;
				width: 97%;
				margin: 0 auto;
			}
			image{
				width: 100%;
				height: 364rpx;
			}
			.theme{
				font-size: 24upx;
				color:#333333;
				margin:20upx 0 20upx 23upx;
			}
			.line{
				display: flex;
				align-items: center;
				margin-left: 23rpx;
				image{
					width: 32rpx;
					height: 32rpx;
					margin-right: 28rpx;
				}
				text{
					font-size: 28rpx;
					color:#666666;
					margin-right: 20rpx;
				}
				.theme1{
					font-size: 24upx;
					color:#333333;
					margin:20upx 10rpx 20upx 0upx;
				}
			}
			.price{
				font-size: 25rpx;
				font-weight: bold;
				color:#D80000;
				margin: 20rpx 0 0 23rpx;
				letter-spacing: 3rpx;
			}
			.countdown{
				display: flex;
				margin-left: 23rpx;
				align-items: center;
				text{
					font-size: 26rpx;
					color:#F2221F;
				}
				view{
					width: 44rpx;
					height: 44rpx;
					text-align: center;
					font-size: 21rpx;
					color: #FFFFFF;
					line-height: 44rpx;
					background-color: #D80000;
					border-radius:5rpx;
					margin: 10rpx 0;
				}
			}
			.top{
				display: flex;
				justify-content: space-between;
				align-items:center;
				margin: 0 23rpx;
				padding: 20rpx 0;
				text:first-child{
					font-size: 27rpx;
					color: #000000;
				}
				text:last-child{
					font-size: 23rpx;
					color:#EF7C38;
				}
			}
			.personnel-list{
				display: flex;
				/* justify-content: space-around; */
				.list{
					width: 20%;
					text-align: center;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					overflow: hidden;
					.l_img{
						width: 96rpx;
						height: 96rpx;
						border-radius: 50%;
						overflow: hidden;
						display: inline-block;
					}
					image{
						width: 100%;
						height: 100%;
					}
					view{
						font-size: 23rpx;
						text-align: center;
					}
				}
			}
		}
		.p-t{
			font-size: 28rpx;
			text-align: center;
		}
		.image{
			margin-top: 30rpx;
			width: 100%;
			height: 988rpx;
		}
		.underway{
			background: #FFFFFF;
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			display: flex;
			align-items: center;
			height: 140rpx;
			button:first-child{
				width: 250rpx;
				height: 80rpx;
				font-size: 30rpx;
				color: #FFFFFF;
				text-align: center;
				line-height: 80rpx;
				background-color: #D80000;
				border: none;
				border-radius: 40rpx;
				letter-spacing: 10rpx;
			}
			button:last-child{
				width: 250rpx;
				height: 80rpx;
				font-size: 30rpx;
				color: #FFFFFF;
				text-align: center;
				line-height: 80rpx;
				background-color: #EF7C38;
				border: none;
				border-radius: 40rpx;
				letter-spacing: 10rpx;
			}
		}
	/* 	结束按钮 */
		.finish{
			background: #FFFFFF;
			height: 140rpx;
			display: flex;
			align-items: center;
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			/* display: none; */
			button{
				width: 600rpx;
				height: 80rpx;
				font-size: 30rpx;
				color: #FFFFFF;
				text-align: center;
				line-height: 80rpx;
				background-color: #999999;
				border: none;
				border-radius: 40rpx;
				letter-spacing: 10rpx;
			}
		}
		.download{
			width: 100%;
			background: #fff;
			position: fixed;
			color: #FE0000;
			background: #FCCF00;
			left: 0;
			bottom: 0rpx;
			box-sizing: border-box;
			height: 80rpx;
			line-height: 80rpx;
			padding: 0 21rpx;
			text-align: center;
		}
/* 	} */
</style>
