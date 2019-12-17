<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<!-- 未读消息 -->
		<view class="msg" v-for="(item,index) in dataList.data" :key = 'item.id' @tap="unfold(item.id,index)">
			<view class="top">
				<view class="t_top"> 
					<image src="../../static/image/com_page/xit.png"></image>
					<text>{{item.business_type_name}}消息</text>
				</view>
				<view class="t_right" v-show="item.is_read == 0">1</view>
			</view>
			<view class="news">
				{{item.title}} <text v-show="msgs === index">{{item.detail}}</text>
			</view>
			<view class="times">{{item.add_time_date}}</view>
		</view>
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	export default{
		components:{
			returns
		},
		data() {
			return {
				title:'系统通知',
				dataList:'',
				msgs:'',
				
			}
		},
		methods:{
			unfold(id,index){
				console.log(this.dataList.data[index].is_read)
				this.dataList.data[index].is_read=1
				this.msgs = index 
				this.service.entire(this,'post',this.APIconfig.api_root.com_page.c_read,{
					user_id:this.$store.state.user.id,
					id:id
				},function(self,res){
					
				})
			}
		},
		onShow() {
			this.service.entire(this,'post',this.APIconfig.api_root.com_page.c_msg_index,{
				user_id:this.$store.state.user.id,
				
			},function(self,res){
				console.log(res)
				self.dataList = res.data
			})
		}
	}
</script>

<style lang="scss">
	.content{
		background: #F6F6F7;
		width: 100%;
		height: 100%;
		// padding-top: 100rpx;
		.msg{
			background: #FFFFFF;
			width: 100%;
			// height: 218rpx;
			margin-top: 30rpx;
			.top{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 25rpx 24rpx 25rpx 24rpx;
				.t_top{
					display: flex;
					align-items: center;
					image{
						width: 38rpx;
						height: 38rpx;
						margin-right: 20rpx;
					}
					text{
						font-size: 28rpx;
					}
				}
				.t_right{
					width: 25rpx;
					height: 25rpx;
					border-radius: 50rpx;
					font-size: 24rpx;
					color:#FFFFFF;
					text-align: center;
					line-height: 25rpx;
					background-color: #D80000;
				}
			}
			.news{
				font-size: 24rpx;
				color: #333333;
				padding: 0 31rpx 0 81rpx;
				text{
					margin-left: 10rpx;
				}
			}
			.times{
				font-size: 24rpx;
				color:#CCCCCC;
				padding: 24rpx 0 24rpx 82rpx;
			}
		}
	}
</style>
