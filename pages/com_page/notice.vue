<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<!-- 未读消息 -->
		<view class="msg" v-for="(item,index) in dataList" :key = 'item.id' @tap="unfold(item.id,index)">
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
		<uni-load-more :status="more"></uni-load-more>
	</view>
</template>

<script>
	import returns from '../common/returns.vue'
	import uniLoadMore from '../../components/uni-load-more/uni-load-more.vue'
	export default{
		components:{
			returns,
			uniLoadMore
		},
		data() {
			return {
				title:'系统通知',
				dataList:[],
				msgs:'',
				more: 'more',
				page: 1,
				loadRecord: true
			}
		},
		methods:{
			unfold(id,index){ //读取信息
				this.dataList[index].is_read=1
				this.msgs = index 
				this.service.entire(this,'post',this.APIconfig.api_root.com_page.c_read,{
					user_id:this.$store.state.user.id,
					id:id
				},function(self,res){
					
				})
			},
			loadMore(){
				this.more = 'loading'
				this.service.entire(this,'post',this.APIconfig.api_root.com_page.c_msg_index,{
					user_id:this.$store.state.user.id,
					page:this.page
				},function(self,res){
					self.dataList.push(...res.data.data)
					self.page ++ 
					self.more = 'more'
					if(res.data.data.length < 10) {
						self.loadRecord = false
						self.more = 'noMore'
					}
				})
			}
		},
		onReachBottom() {
			if (this.loadRecord == false) return
			this.loadMore()
		},
		onLoad() {
			this.loadMore()
		}
	}
</script>

<style lang="scss">
	.content{
		// background: #F6F6F7;
		width: 100%;
		height: 100%;
		// padding-top: 100rpx;
		.msg{
			background: #FFFFFF;
			width: 100%;
			// height: 218rpx;
			// margin-top: 30rpx;
			border-bottom: 10rpx solid #F6F6F7;
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
