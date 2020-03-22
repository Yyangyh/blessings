<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="top">
			<view class="top_enlarge"  @tap="service.returns()">
				<image src="/static/image/com_page/returns.png" mode="widthFix"></image>
			</view>
			<text>余额</text>
			<text @tap="$jump('/pages/subuser/threeuser/cash')">提现</text>
		</view>
		<image class="black" src="../../static/image/subuser/back.png"></image>
		<view class="money">
			<view>可用余额（元）</view>
			<view>{{user.money ? user.money : '0'}}</view>
		</view>
		<!-- <view class="allorder">
			<text @click="choise()" class="one" :class="{active:cur==2}">全部</text>
			<text @click="choise(1)" class="two" :class="{active:cur==1}">收入</text>
			<text @click="choise('0')" class="three" :class="{active:cur==0}">支出</text>
		</view>
		<view class="box"  >
			<view class="line" v-for="(item,index) in dataList" :key ='item.id'>
				<view class="l_left">
					<view>{{item.title}}</view>
					<view>{{item.time}}</view>
				</view>
				<view class="l_right">{{item.desc}}</view>
			</view>
			<uni-load-more :status="more"></uni-load-more>
		</view> -->
		
	</view>
</template>

<script>
	import uniLoadMore from '../../components/uni-load-more/uni-load-more.vue'
		export default{
			components:{
				uniLoadMore
			},
			data(){
				return{
					
					user:this.$store.state.user,
					cur:'',
					dataList:[],
					more:'more',
					page:1,
					loadRecord: true
				}
			},
			methods:{
				choise(all){
					this.more = 'loading'
					this.dataList.length = 0
					this.page = 1
					this.loadRecord = true
					all? this.cur = all :this.cur = 2,
					console.log(this.cur)
					let data ={
						user_id:this.$store.state.user.id,
						page:1,
						operation_type:all
					}
					this.Index(data)
					
				},
				loadMore(){
					this.more = 'loading'
					let data = {
						user_id:this.$store.state.user.id,
						page:this.page,
						operation_type:this.cur
					}
					if(data.operation_type == 2) delete data.operation_type
					this.Index(data)
				},
				Index(data){
					this.service.entire(this,'post',this.APIconfig.api_root.subuser.u_balance_index,data,function(self,res){
						self.dataList.push(...res.data.data)
						self.page ++
						self.more = 'more'
						if(res.data.data.length < 10){
							self.more = 'noMore'
							self.loadRecord = false
						}
					})
				}
			},
			onReachBottom() {
				if (this.loadRecord == false) return
				this.loadMore()
			},
			onLoad() {
				this.choise()
			}
		}
</script>

<style lang="scss">
	.content{
		position: relative;
		.top{
			height: 105rpx;
			padding: 0 44rpx;
			width: 100%;
			box-sizing: border-box;
			position: fixed;
			top: var(--status-bar-height);
			z-index: 333;
			left: 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 32rpx;
			font-weight: bold;
			color: #333333;
			background: #fff;
			box-shadow:0px 2rpx 4rpx 0px rgba(0, 0, 0, 0.1);
			.top_enlarge{
				display: flex;
				align-items: center;
				height: 100%;
				width: 180rpx;
			}
			text:nth-of-type(2){
				width: 180rpx;
				font-size: 30rpx;
				font-weight: 400;
				display: inline-block;
				text-align: right;
			}
			image{
				height: 40rpx;
				width: 40rpx;
			}
		}
		.black{
			width: 100%;
			height: 209rpx;
			position:absolute;
			top:106rpx;
			left: 0;
			z-index: 100;
		}
		.money{
			width: 100%;
			position: absolute;
			top:106rpx;
			z-index: 111;
			color: #FFFFFF;
			text-align: center;
			padding-top: 40rpx;
			view:first-child{
				font-size: 24rpx;
				text-align: center;
			}
			view:last-child{
				font-size: 60rpx;
				margin-top: 15rpx;
			}
		}
		.allorder{
			width: 100%;
			height:100upx;
			display: flex;
			text-align: center;
			line-height: 100upx;
			font-size: 28upx;
			position: absolute;
			top: 300rpx;
			left: 0;
			border-bottom:1rpx solid #E9E9E9;
			z-index: 222;
			background: #fff;
			text{
				flex: 1;
			}
		}
		.active{
			color:#D80000;
			border-bottom:1rpx solid #D80000 ;
		}
		.box{
			width: 100%;
			position: absolute;
			top:400rpx;
			left: 0;
			.line{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding:  31rpx;
				border-bottom:1rpx solid #E9E9E9 ;
				.l_left{
					view:first-child{
						font-size: 28rpx;
						color:#343434 ;
					}
					view:last-child{
						font-size: 24rpx;
						color:#A1A1A1;
						margin-top: 10rpx;
					}
				}
				.l_right{
					font-size: 30rpx;
					color:#0C0C0C;
					margin-left: 20rpx;;
				}
			}
		}
	}
</style>
