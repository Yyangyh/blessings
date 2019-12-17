<template>
	<view class="content">
		<view class="status_bar">
			
		</view>
		<returns :titles='title'></returns>
		<image class='integralback' src="../../../static/image/subuser/integralback.png" mode="widthFix"></image>
		<view class="back_text">
			<view class="rightjio"  @tap="$jump('./know')">
				<image src='../../../static/image/subuser/wenhao.png' mode="widthFix"></image>
				<text>了解积分</text>
			</view>
			<view class="t-text1">{{$store.state.user.integral}}</view>
			<view class="t-text2">可用积分</view>
		</view>
		<view class="allorder">
			<text @click="choise()" class="one" :class="{active:cur==2}">积分明细</text>
			<text @click="choise(1)" class="two" :class="{active:cur==1}">积分收入</text>
			<text @click="choise('0')" class="three" :class="{active:cur==0}">积分支出</text>
		</view>
		<view class="box" >
			<view class="line" v-for="(item,index) in dataList" :key ='item.id'>
				<view class="l_left">
					<view>{{item.title}}</view>
					<view>{{item.time}}</view>
				</view>
				<view class="l_right">{{item.desc}}</view>
			</view>
			<uni-load-more :status="more"></uni-load-more>
		</view>
		
	</view>
</template>

<script>
	import returns from '../../common/returns.vue'
	import uniLoadMore from '../../../components/uni-load-more/uni-load-more.vue'//引进组件
	export default{
		components:{
			returns,
			uniLoadMore
		},
		data(){
			return{
				title:'我的积分',
				cur:'',
				dataList:[],
				//下面三个必须填写的初始值
				more: 'more',
				page: 1,
				loadRecord: true
			}
		},
		methods:{
<<<<<<< HEAD
			choise(all){
				this.more = 'loading'
				this.loadRecord = true
				this.dataList.length = 0
				this.page = 1
				all? this.cur = all :this.cur = 2
=======
			choise(all){ //切换状态执行
				this.more = 'loading' //加载状态
				this.dataList.length = 0 //切换数据归零
				this.page = 1 //初始页码为1
				all? this.cur = all :this.cur = 2 //判断type值
>>>>>>> 58434dac5e73586bcbe62aa22ae0d75bc5ba9151
				let data ={
					user_id:this.$store.state.user.id,
					page:1,
					type:all
				}
				console.log(data)
				this.Index(data) //执行接口
			},
<<<<<<< HEAD
			loadMore(){
				this.more = 'loading'
=======
			loadMore(){//滚动到底部执行
>>>>>>> 58434dac5e73586bcbe62aa22ae0d75bc5ba9151
				let data = {
					user_id:this.$store.state.user.id,
					page:this.page,
					type:this.cur
				}
<<<<<<< HEAD
				
				// if(data.type == 2) delete data.type;
				if(data.type == 2) Reflect.deleteProperty(data, "type");
				console.log(data)
				this.Index(data)
=======
				if(data.type == 2) delete data.type
				this.Index(data)//执行接口
>>>>>>> 58434dac5e73586bcbe62aa22ae0d75bc5ba9151
			},
			Index(data){//这是最后一步 
				this.service.entire(this,'post',this.APIconfig.api_root.subuser.u_integral_index,data,function(self,res){
					self.dataList.push(...res.data.data)
					self.page ++ //页码数+1
					self.more = 'more'
					if(res.data.data.length < 10){//判断是否还有下一页
						self.more = 'noMore'
						self.loadRecord = false
					}
				})
			}
		},
		onReachBottom() {//页面上拉。触低事件
			if (this.loadRecord == false) return
			this.loadMore()
		},
		onLoad() { //页面只加载一回
			this.choise()
		}
	}
</script>

<style lang="scss">
	.content{
		position: relative;
		.integralback{
			position: absolute;
			top: 106rpx;
			left: 0;
			width: 100%;
			height: 370rpx;
		}
		.back_text{
			position: absolute;
			top:106rpx;
			left: 0;
			width: 100%;
			.rightjio{
				width: 201rpx;
				height: 53rpx;
				border: 1rpx solid #FFFFFF;
				border-radius:27px;
				display: flex;
				align-items: center;
				padding-left: 20rpx;
				margin:36rpx 0 0 522rpx;
				image{
					width: 32rpx;
					height: 32rpx;
					margin-right: 20rpx;
				}
				text{
					font-size: 28rpx;
					color:#FFFFFF;
				}
			}
			.t-text1{
				font-size: 84rpx;
				color: #FFFFFF;
				text-align: center;
			}
			.t-text2{
				font-size: 32rpx;
				color: #FFFFFF;
				text-align: center;
				margin-bottom: 30rpx;
			}
		}
		.allorder{
			background-color: #FFFFFF;
			box-shadow:1rpx 1rpx 6rpx 0rpx rgba(177,65,65,0.27);
			border-radius:10rpx;
			width: 100%;
			height:100upx;
			display: flex;
			text-align: center;
			line-height: 100upx;
			font-size: 28upx;
			position: absolute;
			top: 390rpx ;
			left: 0;
			border-bottom:1rpx solid #E9E9E9;
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
			top:490rpx;
			left: 0;
			.line{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding:  31rpx;
				border-bottom:1rpx solid #E9E9E9 ;
				background-color: #FFFFFF;
				.l_left{
					view:first-child{
						font-size: 28rpx;
						color:#343434 ;
					}
					view:last-child{
						font-size: 24rpx;
						color:#A1A1A1;
					}
				}
				.l_right{
					font-size: 36rpx;
					color:#EA5656;
				}
			}
		}
	}
</style>
